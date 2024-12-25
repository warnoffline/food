import { CUISINES } from '@/configs/cuisinesConfig';
import { DIETS } from '@/configs/dietConfig';
import { INTOLERANCES } from '@/configs/intolerancesConfig';
import { TYPES } from '@/configs/typesConfig';
import { FilterData, Option } from '@/types/recipes';
import { ILocalStore } from '@/utils/useLocalStore';
import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_filter' | '_filterData';

class FilterStore implements ILocalStore {
  private _filter: FilterData | null = null;
  private _filterData: FilterData | null = null;
  private regex = /^[A-Za-zА-Яа-я\s,]+$/;

  constructor() {
    makeObservable<FilterStore, PrivateFields>(this, {
      _filter: observable.ref,
      _filterData: observable.ref,
      filter: computed,
      filterData: computed,
      setFilters: action,
      resetFilters: action,
      setIncludeIngredients: action,
      setExcludeIngredients: action,
      syncFilters: action,
    });

    const savedFilters = sessionStorage.getItem('recipe-filter');
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);

      const getSelectedOptions = (filterKey: string, options: Option[]) => {
        if (filters[filterKey]) {
          return options.filter((option) => (filters[filterKey] as string).includes(option.value));
        }
        return [];
      };

      const sortedFilter = {
        cuisine: getSelectedOptions('cuisine', CUISINES),
        diet: getSelectedOptions('diet', DIETS),
        intolerances: getSelectedOptions('intolerances', INTOLERANCES),
        type: getSelectedOptions('type', TYPES),
        includeIngredients: filters.includeIngredients || '',
        excludeIngredients: filters.excludeIngredients || '',
      };

      this._filterData = sortedFilter;
      this._filter = sortedFilter;
    }
  }

  syncFilters() {
    if (this._filterData) {
      this._filter = { ...this._filterData };
    }
  }

  get filter() {
    return this._filter;
  }

  get filterData() {
    return this._filterData;
  }

  setFilters(filters: FilterData | null) {
    this._filterData = filters;
  }

  resetFilters(): void {
    this.setFilters(null);
    this._filter = null;
  }

  setIncludeIngredients(value: string): void {
    if (this.regex.test(value) || value === '') {
      this._filterData = { ...this._filterData, includeIngredients: value };
    }
  }

  setExcludeIngredients(value: string): void {
    if (this.regex.test(value) || value === '') {
      this._filterData = { ...this._filterData, excludeIngredients: value };
    }
  }

  destroy(): void {}
}

export default FilterStore;
