import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { fetchExtractRecipe, fetchRecipes } from '@/api/recipeApi';
import { Filter, FilterData, Recipe } from '@/types/recipes';
import { Meta, Response } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import qs from 'qs';

type PrivateFields = '_recipes' | '_totalResults' | '_number' | '_metaState' | '_queryString' | '_favorites';

type metaStateKeys = 'recipes' | 'extractRecipe';

class RecipesStore implements ILocalStore {
  private _recipes: Recipe[] = [];
  private _totalResults: number = 0;
  private _favorites: Recipe[] = [];
  private _number: number = 0;
  private _queryString: string = '';
  private _metaState: Record<metaStateKeys, Meta> = {
    recipes: Meta.initial,
    extractRecipe: Meta.initial,
  };

  constructor() {
    makeObservable<RecipesStore, PrivateFields>(this, {
      _recipes: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      _favorites: observable,
      favorites: computed,
      recipes: computed,
      totalResults: computed,
      number: computed,
      queryString: computed,
      metaState: computed,
      getRecipes: action,
      getExtractRecipe: action,
      extractRicpe: action,
      setMetaState: action,
      setRecipes: action,
      destroy: action,
      updateUrl: action,
    });
    this.loadFavoritesFromLocalStorage();
  }

  get favorites() {
    return this._favorites;
  }

  get recipes() {
    return this._recipes;
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

  getRecipes = async (currentPage: number, query?: string, filters?: FilterData) => {
    try {
      this.setMetaState('recipes', Meta.loading);
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

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setRecipes(data: Response<Recipe>) {
    this._recipes = data.results;
    this._number = data.number;
    this._totalResults = data.totalResults;
  }

  updateUrl(filterUrl: Filter) {
    const queryString = qs.stringify(filterUrl, { addQueryPrefix: true });
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {
    this._recipes = [];
    this._totalResults = 0;
    this._number = 0;
    this._queryString = '';
  }

  getExtractRecipe = async (url: string) => {
    try {
      this.setMetaState('extractRecipe', Meta.loading);
      const data = await fetchExtractRecipe(url);
      runInAction(() => {
        if (data) {
          this.setMetaState('extractRecipe', Meta.success);
          this.extractRicpe(data);
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

  extractRicpe(data: Recipe) {
    sessionStorage.setItem('extractRecipe', JSON.stringify(data));
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

export default RecipesStore;
