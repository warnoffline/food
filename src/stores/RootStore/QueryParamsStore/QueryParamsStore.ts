import { Option } from '@/types/recipes';
import { action, makeObservable, observable } from 'mobx';
import * as qs from 'qs';

type PrivateFields = '_params';

export default class QueryParamsStore {
  private _params: Record<string, string | Option[] | Option> = {};

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable.ref,
      setSearch: action.bound,
    });

    let savedParams = '';
    if (window.location.pathname.includes('recipes')) {
      savedParams = sessionStorage.getItem('recipe-filter') || '';
    }
    if (window.location.pathname.includes('ingredients')) {
      savedParams = sessionStorage.getItem('ingredient-filter') || '';
    }

    if (savedParams) {
      this._params = JSON.parse(savedParams);
    }
  }

  getParam(key: string): undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[] {
    return this._params[key];
  }

  setSearch(search: string) {
    const cleanSearch = search.slice(1);
    if (window.location.pathname.includes('recipes')) {
      const searchParams = qs.parse(cleanSearch) as Record<string, string | Option | Option[]>;
      sessionStorage.setItem('recipe-filter', JSON.stringify(searchParams));
      this._params = searchParams;
    }
    if (window.location.pathname.includes('ingredients')) {
      const searchParams = qs.parse(cleanSearch) as Record<string, string>;
      sessionStorage.setItem('ingredient-filter', JSON.stringify(searchParams));
      this._params = searchParams;
    }
  }
}
