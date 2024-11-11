import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Ingredient } from '@/types/ingredient';
import { Meta } from '@/types/shared';
import { fetchIngredientById } from '@/api/ingredientApi';
import { ILocalStore } from '@/utils/useLocalStore';

type metaStateKeys = 'ingredient';

type PrivateFields = '_ingredient' | '_metaState';

class IngredientStore implements ILocalStore {
  private _ingredient: Ingredient | null = null;
  private _metaState: Record<metaStateKeys, Meta> = {
    ingredient: Meta.initial,
  };

  constructor() {
    makeObservable<IngredientStore, PrivateFields>(this, {
      _ingredient: observable,
      _metaState: observable,
      ingredient: computed,
      metaState: computed,
      getIngredient: action,
      setIngredient: action,
      setMetaState: action,
    });
  }

  get ingredient() {
    return this._ingredient;
  }

  get metaState() {
    return this._metaState;
  }

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

  setIngredient(data: Ingredient) {
    this._ingredient = data;
  }

  destroy(): void {
    this._ingredient = null;
  }
}

export default IngredientStore;
