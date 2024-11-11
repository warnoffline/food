import { CUISINES } from '@/configs/cuisinesConfig';
import { DIETS } from '@/configs/dietConfig';
import { INTOLERANCES } from '@/configs/intolerancesConfig';
import { TYPES } from '@/configs/typesConfig';
import { Filter, FilterData } from '@/types/recipes';
import type { Option } from '@/types/recipes';
import { ILocalStore } from '@/utils/useLocalStore';
import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_filter';

class FilterStore implements ILocalStore {
  private _filter: FilterData | null = null;
  constructor() {
    makeObservable<FilterStore, PrivateFields>(this, {
      _filter: observable.ref,
      filter: computed,
      setFilters: action,
      resetFilters: action,
    });

    const savedFilters = sessionStorage.getItem('recipe-filter');

    if (savedFilters) {
      const filters: Filter = JSON.parse(savedFilters);

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

      this.setFilters(sortedFilter);
    }
  }

  get filter() {
    return this._filter;
  }

  setFilters(filters: FilterData | null) {
    this._filter = filters;
  }

  resetFilters(): void {
    this.setFilters(null);
  }

  destroy(): void {
    this.resetFilters();
  }
}

export default FilterStore;
