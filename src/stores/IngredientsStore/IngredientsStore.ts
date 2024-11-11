import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Ingredient } from '@/types/ingredient';
import { Meta, Response } from '@/types/shared';
import { fetchIngredientById, fetchIngredients } from '@/api/ingredientApi';
import qs from 'qs';
import { ILocalStore } from '@/utils/useLocalStore';

type metaStateKeys = 'ingredients' | 'ingredient';

type PrivateFields = '_ingredients' | '_ingredient' | '_totalResults' | '_number' | '_queryString' | '_metaState';

class IngredientsStore implements ILocalStore {
  private _ingredients: Ingredient[] = [];
  private _ingredient: Ingredient | null = null;
  private _totalResults: number = 0;
  private _number: number = 0;
  private _queryString: string = '';
  private _metaState: Record<metaStateKeys, Meta> = {
    ingredients: Meta.initial,
    ingredient: Meta.initial,
  };

  constructor() {
    makeObservable<IngredientsStore, PrivateFields>(this, {
      _ingredients: observable,
      _ingredient: observable,
      _totalResults: observable,
      _number: observable,
      _queryString: observable,
      _metaState: observable,
      ingredients: computed,
      ingredient: computed,
      totalResults: computed,
      number: computed,
      queryString: computed,
      metaState: computed,
      getIngredient: action,
      getIngredients: action,
      setIngredient: action,
      setIngredients: action,
      setMetaState: action,
    });
  }

  get ingredients() {
    return this._ingredients;
  }

  get ingredient() {
    return this._ingredient;
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

  getIngredients = async (currentPage: number, query: string) => {
    try {
      if (query) {
        this.setMetaState('ingredients', Meta.loading);

        const params = {
          query: query,
          offset: (currentPage - 1) * 12,
          number: 12,
          metaInformation: true,
        };
        const data = await fetchIngredients(params);
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
      this.updateUrl(query);
    } catch (error) {
      runInAction(() => {
        this.setMetaState('ingredients', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  getIngredient = async (ingredinetId: number) => {
    try {
      this.setMetaState('ingredient', Meta.loading);
      const data = await fetchIngredientById(ingredinetId);
      runInAction(() => {
        if (data) {
          this.setMetaState('ingredient', Meta.success);
          this.setIngredient(data);
          return;
        }

        this.setMetaState('ingredient', Meta.error);
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('ingredient', Meta.error);
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
  updateUrl(search: string) {
    const queryString = qs.stringify({ search: search ? search : undefined }, { addQueryPrefix: true });
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {
    this._ingredients = [];
    this._totalResults = 0;
    this._number = 0;
    this._queryString = '';
  }
}

export default IngredientsStore;
