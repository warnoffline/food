import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Meta } from '@/types/shared';
import qs from 'qs';
import { ILocalStore } from '@/utils/useLocalStore';
import rootStore from '../RootStore';
import { Product, ProductsResponse } from '@/types/product';
import SearchProductStore from './SearchProductStore/SearchProductStore';

type metaStateKeys = 'products';

type PrivateFields = '_products' | '_number' | '_totalResults' | '_number' | '_queryString' | '_metaState' | '_page';

type UpdateParams = {
  page: number;
  search?: string;
};

class ProductsStore implements ILocalStore {
  private _products: Product[] = [];
  private _totalResults: number = 0;
  private _number: number = 0;
  private _queryString: string = '';
  private _page: number;
  private _metaState: Record<metaStateKeys, Meta> = {
    products: Meta.initial,
  };

  readonly searchStore = new SearchProductStore();

  constructor() {
    this._page = Number(rootStore.query.getParam('page')) || 1;

    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      _page: observable,
      products: computed,
      totalResults: computed,
      number: computed,
      page: computed,
      queryString: computed,
      metaState: computed,
      setIngredients: action,
      setMetaState: action,
      setPage: action.bound,
      destroy: action,
    });
  }

  get products() {
    return this._products;
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

  getProducts = async () => {
    try {
      const query = this.searchStore.query;
      if (query) {
        this.setMetaState('products', Meta.loading);

        const params = {
          query: query,
          offset: (this._page - 1) * 12,
          number: 12,
          addProductInformation: true,
        };

        const data = await rootStore.api.fetchProducts(params);

        runInAction(() => {
          if (data) {
            this.setMetaState('products', Meta.success);
            this.setIngredients(data);
            return;
          }

          this.setMetaState('products', Meta.error);
        });
      } else {
        this.setMetaState('products', Meta.initial);
      }
      const params: UpdateParams = {
        page: this._page,
        search: query || undefined,
      };
      this.updateUrl(params);
    } catch (error) {
      runInAction(() => {
        this.setMetaState('products', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setIngredients(data: ProductsResponse) {
    this._products = data.products;
    this._totalResults = data.totalProducts;
    this._number = data.number;
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

export default ProductsStore;
