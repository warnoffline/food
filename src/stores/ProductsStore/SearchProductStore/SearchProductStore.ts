import { ILocalStore } from '@/utils/useLocalStore';
import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_query';

class SearchProductStore implements ILocalStore {
  private _query: string = '';

  constructor() {
    makeObservable<SearchProductStore, PrivateFields>(this, {
      _query: observable.ref,
      query: computed,
      setQuery: action,
      reset: action,
      destroy: action,
    });
    const filter = sessionStorage.getItem('product-filter');
    const savedQuery = JSON.parse(filter !== null ? filter : '');
    if (savedQuery) {
      this.setQuery(savedQuery.search);
    }
  }

  get query() {
    return this._query;
  }

  setQuery(query: string) {
    this._query = query;
  }

  reset() {
    this._query = '';
  }

  destroy(): void {}
}

export default SearchProductStore;
