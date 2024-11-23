import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { EquipmentById, Recipe } from '@/types/recipes';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import rootStore from '../RootStore';

type PrivateFields = '_similarRecipes' | '_recipe' | '_equipments' | '_metaState' | '_favorites';

type metaStateKeys = 'recipe' | 'equipments' | 'similarRecipes';

class RecipeDetailStore implements ILocalStore {
  private _similarRecipes: Recipe[] = [];
  private _recipe: Recipe | null = null;
  private _equipments: EquipmentById | null = null;
  private _favorites: number[] = [];
  private _metaState: Record<metaStateKeys, Meta> = {
    recipe: Meta.initial,
    equipments: Meta.initial,
    similarRecipes: Meta.initial,
  };
  private user: string;
  private initializationPromise: Promise<void>;

  constructor() {
    this.user = rootStore.user.user;

    makeObservable<RecipeDetailStore, PrivateFields>(this, {
      _similarRecipes: observable,
      _recipe: observable,
      _equipments: observable,
      _metaState: observable,
      _favorites: observable,
      similarRecipes: computed,
      favorites: computed,
      recipe: computed,
      equipments: computed,
      metaState: computed,
      getRecipeById: action,
      getEquipmentsById: action,
      getSimilarRecipe: action,
      setMetaState: action,
      setRecipe: action,
      setSimilar: action,
      setEquipments: action,
      isFavorite: action,
      addRecipeToFavorites: action.bound,
      removeFromFavorites: action.bound,
      destroy: action,
      initRecipeDetail: action.bound,
    });
    const extractRecipe = sessionStorage.getItem('extractRecipe');
    if (extractRecipe) {
      this._recipe = JSON.parse(extractRecipe);
    }

    this.initializationPromise = this.initializeFavorites();
  }

  get similarRecipes() {
    return this._similarRecipes;
  }

  get recipe() {
    return this._recipe;
  }

  get equipments() {
    return this._equipments;
  }

  get metaState() {
    return this._metaState;
  }

  getRecipeById = async (recipeId: number) => {
    try {
      this.setMetaState('recipe', Meta.loading);
      const data = await rootStore.api.fetchRecipeById(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('recipe', Meta.success);
          this.setRecipe(data);
        } else {
          this.setMetaState('recipe', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('recipe', Meta.error);
      });
      console.error('Failed to load recipe by ID:', error);
    }
  };

  getEquipmentsById = async (recipeId: number) => {
    try {
      this.setMetaState('equipments', Meta.loading);
      const data = await rootStore.api.fetchEquipmentsById(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('equipments', Meta.success);
          this.setEquipments(data);
        } else {
          this.setMetaState('equipments', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('equipments', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  getSimilarRecipe = async (recipeId: number) => {
    try {
      this.setMetaState('similarRecipes', Meta.loading);
      const data = await rootStore.api.fetchSimilarRecipe(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('similarRecipes', Meta.success);
          this.setSimilar(data);
        } else {
          this.setMetaState('similarRecipes', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('similarRecipes', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  initRecipeDetail = async (recipeId: number) => {
    if (recipeId === -1) {
      const findRecipe = sessionStorage.getItem('extractRecipe') || '';
      this._recipe = JSON.parse(findRecipe);
      this.setMetaState('recipe', Meta.success);
    } else {
      await this.initializationPromise;

      try {
        this.setMetaState('recipe', Meta.loading);
        this.setMetaState('equipments', Meta.loading);
        this.setMetaState('similarRecipes', Meta.loading);

        const [recipeData, equipmentsData, similarRecipesData] = await Promise.all([
          rootStore.api.fetchRecipeById(recipeId),
          rootStore.api.fetchEquipmentsById(recipeId),
          rootStore.api.fetchSimilarRecipe(recipeId),
        ]);

        runInAction(() => {
          if (recipeData) {
            this.setMetaState('recipe', Meta.success);
            this.setRecipe(recipeData);
          } else {
            this.setMetaState('recipe', Meta.error);
          }

          if (equipmentsData) {
            this.setMetaState('equipments', Meta.success);
            this.setEquipments(equipmentsData);
          } else {
            this.setMetaState('equipments', Meta.error);
          }

          if (similarRecipesData) {
            this.setMetaState('similarRecipes', Meta.success);
            this.setSimilar(similarRecipesData);
          } else {
            this.setMetaState('similarRecipes', Meta.error);
          }
        });
      } catch (error) {
        runInAction(() => {
          this.setMetaState('recipe', Meta.error);
          this.setMetaState('equipments', Meta.error);
          this.setMetaState('similarRecipes', Meta.error);
        });
        console.error('Failed to load recipe details:', error);
      }
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setRecipe(recipe: Recipe) {
    this._recipe = recipe;
  }

  setSimilar(recipes: Recipe[]) {
    this._similarRecipes = recipes;
  }

  setEquipments(equipments: EquipmentById) {
    this._equipments = equipments;
  }

  destroy(): void {}

  get favorites() {
    return this._favorites;
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.includes(recipeId);
  };

  saveFavorites() {
    const plainFavorites = this._favorites;
    if (this.user) {
      rootStore.user.saveFavorites(plainFavorites);
    } else {
      localStorage.setItem('favorites', JSON.stringify(plainFavorites));
    }
  }

  addRecipeToFavorites(recipeId: number) {
    if (!this.isFavorite(recipeId)) {
      this._favorites.push(recipeId);
      this.saveFavorites();
    }
  }

  removeFromFavorites(recipeId: number) {
    if (this.isFavorite(recipeId)) {
      this._favorites = this._favorites.filter((id) => id !== recipeId);
      this.saveFavorites();
    }
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const parsedData: number[] = JSON.parse(savedFavorites);
      this._favorites = parsedData;
    }
  }

  private async initializeFavorites() {
    if (this.user) {
      try {
        const favorites = await rootStore.user.getFavorites();
        runInAction(() => {
          this._favorites = favorites;
        });
      } catch (error) {
        console.error('Failed to load:', error);
      }
    } else {
      this.loadFavoritesFromLocalStorage();
    }
  }
}

export default RecipeDetailStore;
