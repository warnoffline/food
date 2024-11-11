import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { fetchEquipmentsById, fetchRecipeById, fetchSimilarRecipe } from '@/api/recipeApi';
import { EquipmentById, Recipe } from '@/types/recipes';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';

type PrivateFields = '_similarRecipes' | '_recipe' | '_equipments' | '_metaState' | '_favorites';

type metaStateKeys = 'recipe' | 'equipments' | 'similarRecipes';

class RecipeStore implements ILocalStore {
  private _similarRecipes: Recipe[] = [];
  private _favorites: Recipe[] = [];
  private _recipe: Recipe | null = null;
  private _equipments: EquipmentById | null = null;
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
      addRecipeToFavorites: action,
      removeFromFavorites: action,
      destroy: action,
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

  get favorites() {
    return this._favorites;
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

  destroy(): void {
    sessionStorage.removeItem('extractRecipe');
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.some((favorite) => favorite.id === recipeId);
  };

  saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      this._favorites.push(recipe);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(recipeId: number) {
    this._favorites = this._favorites.filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this._favorites = JSON.parse(savedFavorites);
    }
  }
}

export default RecipeStore;
