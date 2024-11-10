import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import {
  fetchEquipmentsById,
  fetchExtractRecipe,
  fetchRecipeById,
  fetchRecipes,
  fetchSimilarRecipe,
} from '@/api/recipeApi';
import FilterStore from './FilterStore/FilterStore';
import SearchRecipeStore from './SearchRecipeStore/SearchRecipeStore';
import { EquipmentById, Filter, Recipe } from '@/types/recipes';
import { Meta, Response } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import qs from 'qs';

type PrivateFields =
  | '_recipes'
  | '_favorites'
  | '_similarRecipes'
  | '_recipe'
  | '_equipments'
  | '_totalResults'
  | '_number'
  | '_metaState'
  | '_queryString';

type metaStateKeys = 'recipe' | 'equipments' | 'similarRecipes' | 'recipes' | 'extractRecipe';

class RecipeStore implements ILocalStore {
  private _recipes: Recipe[] = [];
  private _favorites: Recipe[] = [];
  private _similarRecipes: Recipe[] = [];
  private _recipe: Recipe | null = null;
  private _equipments: EquipmentById | null = null;
  private _totalResults: number = 0;
  private _number: number = 0;
  private _queryString: string = '';
  private _metaState: Record<metaStateKeys, Meta> = {
    recipes: Meta.initial,
    recipe: Meta.initial,
    equipments: Meta.initial,
    similarRecipes: Meta.initial,
    extractRecipe: Meta.initial,
  };

  constructor() {
    makeObservable<RecipeStore, PrivateFields>(this, {
      _recipes: observable,
      _favorites: observable,
      _similarRecipes: observable,
      _recipe: observable,
      _equipments: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      recipes: computed,
      favorites: computed,
      similarRecipes: computed,
      recipe: computed,
      equipments: computed,
      totalResults: computed,
      number: computed,
      queryString: computed,
      metaState: computed,
      getRecipeById: action,
      getEquipmentsById: action,
      getRecipes: action,
      getSimilarRecipe: action,
      getExtractRecipe: action,
      setMetaState: action,
      setRecipes: action,
      setRecipe: action,
      setSimilar: action,
      setEquipments: action,
      addRecipeToFavorites: action,
      removeFromFavorites: action,
      loadFavoritesFromLocalStorage: action,
      destroy: action,
      updateUrl: action,
    });
    this.loadFavoritesFromLocalStorage();
  }

  get recipes() {
    return this._recipes;
  }

  get favorites() {
    return this._favorites;
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

  get totalResults() {
    return this._totalResults;
  }

  get number() {
    return this._number;
  }

  get metaState() {
    return this._metaState;
  }

  get queryString() {
    return this._queryString;
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

  getRecipes = async (currentPage: number) => {
    try {
      this.setMetaState('recipes', Meta.loading);
      const filters = FilterStore.filter;
      const query = SearchRecipeStore.query;
      const filterData = {
        query: query || undefined,
        offset: (currentPage - 1) * 12,
        number: 12,
        diet: filters?.diet?.map(({ value }) => value).join() || undefined,
        cuisine: filters?.cuisine?.map(({ value }) => value).join() || undefined,
        intolerances: filters?.intolerances?.map(({ value }) => value).join() || undefined,
        type: filters?.type?.map(({ value }) => value).join() || undefined,
        includeIngredients: filters?.includeIngredients || undefined,
        excludeIngredients: filters?.excludeIngredients || undefined,
        addRecipeNutrition: true,
        addRecipeInformation: true,
      };

      const filterUrl: Filter = {
        search: filterData.query,
        diet: filterData.diet,
        cuisine: filterData.cuisine,
        intolerances: filterData.intolerances,
        type: filterData.type,
        includeIngredients: filterData.includeIngredients,
        excludeIngredients: filterData.excludeIngredients,
      };
      this.updateUrl(filterUrl);

      const data = await fetchRecipes(filterData);
      runInAction(() => {
        if (data) {
          this.setMetaState('recipes', Meta.success);
          this.setRecipes(data);
        } else {
          this.setMetaState('recipes', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('recipes', Meta.error);
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

  getExtractRecipe = async (url: string) => {
    try {
      this.setMetaState('extractRecipe', Meta.loading);
      const data = await fetchExtractRecipe(url);
      runInAction(() => {
        if (data) {
          this.setMetaState('extractRecipe', Meta.success);
          this.setRecipe(data);
        } else {
          this.setMetaState('extractRecipe', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('extractRecipe', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setRecipes(data: Response<Recipe>) {
    this._recipes = data.results;
    this._number = data.number;
    this._totalResults = data.totalResults;
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

  isFavorite = (recipeId: number) => {
    return this._favorites.some((favorite) => favorite.id === recipeId);
  };

  saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      runInAction(() => {
        this._favorites.push(recipe);
        this.saveFavoritesToLocalStorage();
      });
    }
  }

  removeFromFavorites(recipeId: number) {
    runInAction(() => {
      this._favorites = this._favorites.filter((recipe) => recipe.id !== recipeId);
      localStorage.setItem('favorites', JSON.stringify(this._favorites));
    });
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      runInAction(() => {
        this._favorites = JSON.parse(savedFavorites);
      });
    }
  }

  updateUrl(filterUrl: Filter) {
    const queryString = qs.stringify(filterUrl, { addQueryPrefix: true });
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {
    this._recipes = [];
    this._recipe = null;
  }
}

export default new RecipeStore();
