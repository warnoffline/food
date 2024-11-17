import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Ingredient } from '@/types/ingredient';
import { Meta, Response } from '@/types/shared';
import qs from 'qs';
import { ILocalStore } from '@/utils/useLocalStore';
import SearchIngredientStore from './SearchIngredientStore/SearchIngredientStore';
import rootStore from '../RootStore';

type metaStateKeys = 'ingredients';

type PrivateFields =
  | '_ingredients'
  | '_ingredient'
  | '_number'
  | '_totalResults'
  | '_number'
  | '_queryString'
  | '_metaState'
  | '_page';

type UpdateParams = {
  page: number;
  search?: string;
};

class IngredientsStore implements ILocalStore {
  private _ingredients: Ingredient[] = [];
  private _ingredient: Ingredient | null = null;
  private _totalResults: number = 0;
  private _number: number = 0;
  private _queryString: string = '';
  private _page: number;
  private _metaState: Record<metaStateKeys, Meta> = {
    ingredients: Meta.initial,
  };

  readonly searchStore = new SearchIngredientStore();

  constructor() {
    this._page = Number(rootStore.query.getParam('page')) || 1;

    makeObservable<IngredientsStore, PrivateFields>(this, {
      _ingredients: observable,
      _ingredient: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      _page: observable,
      ingredients: computed,
      totalResults: computed,
      number: computed,
      page: computed,
      queryString: computed,
      metaState: computed,
      getIngredients: action,
      setIngredient: action,
      setIngredients: action,
      setMetaState: action,
      setPage: action.bound,
      destroy: action,
    });
  }

  get ingredients() {
    return this._ingredients;
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

  get page() {
    return this._page;
  }

  getIngredients = async () => {
    try {
      const query = this.searchStore.query;
      if (query) {
        this.setMetaState('ingredients', Meta.loading);

        const params = {
          query: query,
          offset: (this._page - 1) * 12,
          number: 12,
          metaInformation: true,
        };

        const data = await rootStore.api.fetchIngredients(params);

        runInAction(() => {
          if (data) {
            this.setMetaState('ingredients', Meta.success);
            this.setIngredients(data);
            return;
          }

          this.setMetaState('ingredients', Meta.error);
        });
      } else {
        this.setMetaState('ingredients', Meta.initial);
      }
      const params: UpdateParams = {
        page: this._page,
        search: query || undefined,
      };
      this.updateUrl(params);
    } catch (error) {
      runInAction(() => {
        this.setMetaState('ingredients', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setIngredients(data: Response<Ingredient>) {
    this._ingredients = data.results;
    this._totalResults = data.totalResults;
    this._number = data.number;
  }

  setIngredient(data: Ingredient) {
    this._ingredient = data;
  }

  setPage(page: number) {
    this._page = page;
  }

  updateUrl(params: UpdateParams) {
    const queryString = qs.stringify(params, { addQueryPrefix: true });
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {}
}

export default IngredientsStore;
