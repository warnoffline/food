import { ILocalStore } from '@/utils/useLocalStore';
import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_query';

class SearchRecipeStore implements ILocalStore {
  private _query: string = '';

  constructor() {
    makeObservable<SearchRecipeStore, PrivateFields>(this, {
      _query: observable.ref,
      query: computed,
      setQuery: action,
      reset: action,
    });
    const filter = sessionStorage.getItem('recipe-filter');
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

  destroy(): void {
    this.reset();
  }
}

export default SearchRecipeStore;
