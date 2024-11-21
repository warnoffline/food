import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Filter, Recipe } from '@/types/recipes';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import qs from 'qs';
import FilterStore from './FilterStore/FilterStore';
import SearchRecipeStore from './SearchRecipeStore/SearchRecipeStore';
import rootStore from '../RootStore';

type PrivateFields = '_recipes' | '_totalResults' | '_number' | '_metaState' | '_queryString' | '_favorites' | '_page';

type metaStateKeys = 'recipes' | 'extractRecipe';

class RecipesStore implements ILocalStore {
  private _recipes: Recipe[] = [];
  private _totalResults: number = 0;
  private _favorites: number[] = [];
  private _number: number = 0;
  private _queryString: string = '';
  private _metaState: Record<metaStateKeys, Meta> = {
    recipes: Meta.initial,
    extractRecipe: Meta.initial,
  };
  private _page: number;
  private user: string;
  private initializationPromise: Promise<void>;

  readonly filtersStore = new FilterStore();
  readonly searchStore = new SearchRecipeStore();

  constructor() {
    this._page = Number(rootStore.query.getParam('page')) || 1;
    this.user = rootStore.user.user;

    makeObservable<RecipesStore, PrivateFields>(this, {
      _page: observable,
      _recipes: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      _favorites: observable,
      page: computed,
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
      setPage: action.bound,
      setRecipes: action.bound,
      destroy: action,
      updateUrl: action,
      isFavorite: action,
      loadFavoritesFromLocalStorage: action,
      addRecipeToFavorites: action,
      saveFavorites: action,
      resetPage: action.bound,
      removeFromFavorites: action,
    });

    this.initializationPromise = this.initializeFavorites();
  }

  get page() {
    return this._page;
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

  get favorites() {
    return this._favorites;
  }

  getRecipes = async () => {
    await this.initializationPromise;

    try {
      this.setMetaState('recipes', Meta.loading);
      
      const filterData = {
        query: this.searchStore.query || undefined,
        offset: (this._page - 1) * 12,
        number: 12,
        diet: this.filtersStore.filter?.diet?.map(({ value }) => value).join() || undefined,
        cuisine: this.filtersStore.filter?.cuisine?.map(({ value }) => value).join() || undefined,
        intolerances: this.filtersStore.filter?.intolerances?.map(({ value }) => value).join() || undefined,
        type: this.filtersStore.filter?.type?.map(({ value }) => value).join() || undefined,
        includeIngredients: this.filtersStore.filter?.includeIngredients || undefined,
        excludeIngredients: this.filtersStore.filter?.excludeIngredients || undefined,
        addRecipeNutrition: true,
        addRecipeInformation: true,
      };

      const filterUrl: Filter = {
        page: this._page,
        search: filterData.query,
        diet: filterData.diet,
        cuisine: filterData.cuisine,
        intolerances: filterData.intolerances,
        type: filterData.type,
        includeIngredients: filterData.includeIngredients,
        excludeIngredients: filterData.excludeIngredients,
      };
      this.updateUrl(filterUrl);

      const data = await rootStore.api.fetchRecipes(filterData);
      runInAction(() => {
        if (data) {
          this.setMetaState('recipes', Meta.success);
          this.setRecipes(data.results);
          this._number = data.number;
          this._totalResults = data.totalResults;
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

  setRecipes(recipes: Recipe[]) {
    this._recipes = recipes;
  }

  setPage(page: number) {
    this._page = page;
  }

  updateUrl(filterUrl: Filter) {
    const queryString = qs.stringify(filterUrl, { addQueryPrefix: true });
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {}

  getExtractRecipe = async (url: string) => {
    try {
      this.setMetaState('extractRecipe', Meta.loading);
      const data = await rootStore.api.fetchExtractRecipe(url);
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
    return this._favorites.includes(recipeId);
  };

  resetPage = () => {
    this.setPage(1);
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

export default RecipesStore;
