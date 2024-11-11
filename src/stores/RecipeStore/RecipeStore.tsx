import { action, computed, makeObservable, observable, remove, runInAction, set, toJS } from 'mobx';
import { fetchEquipmentsById, fetchRecipeById, fetchSimilarRecipe } from '@/api/recipeApi';
import { EquipmentById, Recipe } from '@/types/recipes';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import { CollectionModel, getInitialCollectionModel, linearizeCollection } from '../models/shared/collection';

type PrivateFields = '_similarRecipes' | '_recipe' | '_equipments' | '_metaState' | '_favorites';

type metaStateKeys = 'recipe' | 'equipments' | 'similarRecipes';

class RecipeStore implements ILocalStore {
  private _similarRecipes: Recipe[] = [];
  private _recipe: Recipe | null = null;
  private _equipments: EquipmentById | null = null;
  private _favorites: CollectionModel<number, Recipe> = getInitialCollectionModel();
  private _metaState: Record<metaStateKeys, Meta> = {
    recipe: Meta.initial,
    equipments: Meta.initial,
    similarRecipes: Meta.initial,
  };

  constructor() {
    makeObservable<RecipeStore, PrivateFields>(this, {
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
    this.loadFavoritesFromLocalStorage();
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
      const data = await fetchRecipeById(recipeId);
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
      const data = await fetchEquipmentsById(recipeId);
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
      const data = await fetchSimilarRecipe(recipeId);
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
    try {
      this.setMetaState('recipe', Meta.loading);
      this.setMetaState('equipments', Meta.loading);
      this.setMetaState('similarRecipes', Meta.loading);

      const [recipeData, equipmentsData, similarRecipesData] = await Promise.all([
        fetchRecipeById(recipeId),
        fetchEquipmentsById(recipeId),
        fetchSimilarRecipe(recipeId),
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
    return linearizeCollection(this._favorites);
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.order.includes(recipeId);
  };

  saveFavoritesToLocalStorage() {
    const plainFavorites = toJS(this._favorites);
    localStorage.setItem('favorites', JSON.stringify(plainFavorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      set(this._favorites, 'order', [...this._favorites.order, recipe.id]);
      set(this._favorites.entities, recipe.id, recipe);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(recipeId: number) {
    if (this.isFavorite(recipeId)) {
      this._favorites.order = this._favorites.order.filter((id) => id !== recipeId);
      remove(this._favorites.entities, recipeId.toString());
      this.saveFavoritesToLocalStorage();
    }
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const parsedData: CollectionModel<number, Recipe> = JSON.parse(savedFavorites);
      this._favorites = parsedData;
    }
  }
}

export default RecipeStore;
