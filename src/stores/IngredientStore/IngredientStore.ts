import { makeAutoObservable, runInAction } from 'mobx';
import { Ingredient, IngredientsLoadParams } from '@/types/ingredient';
import { Meta, Response } from '@/types/shared';
import { fetchIngredientById, fetchIngredients } from '@/api/ingredientApi';

type metaStateKeys = 'ingredients' | 'ingredient';

class IngredientStore {
  private _ingredients: Ingredient[] = [];
  private _ingredient: Ingredient | null = null;
  private _totalResults: number = 0;
  private _number: number = 0;
  private _metaState: Record<metaStateKeys, Meta> = {
    ingredients: Meta.initial,
    ingredient: Meta.initial,
  };

  constructor() {
    makeAutoObservable(this);
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

  getIngredients = async (params: IngredientsLoadParams) => {
    try {
      this.setMetaState('ingredients', Meta.loading);
      const data = await fetchIngredients(params);
      runInAction(() => {
        if (data) {
          this.setMetaState('ingredients', Meta.success);
          this.setIngredients(data);
          return;
        }

        this.setMetaState('ingredients', Meta.error);
      });
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
}

export default new IngredientStore();
