import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Ingredient } from '@/types/ingredient';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import rootStore from '../RootStore';

type metaStateKeys = 'ingredient';

type PrivateFields = '_ingredient' | '_metaState';

class IngredientDetailStore implements ILocalStore {
  private _ingredient: Ingredient | null = null;
  private _metaState: Record<metaStateKeys, Meta> = {
    ingredient: Meta.initial,
  };

  constructor() {
    makeObservable<IngredientDetailStore, PrivateFields>(this, {
      _ingredient: observable,
      _metaState: observable,
      ingredient: computed,
      metaState: computed,
      getIngredient: action,
      setIngredient: action,
      setMetaState: action,
      destroy: action,
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
      const data = await rootStore.api.fetchIngredientById(ingredinetId);
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

  destroy(): void {}
}

export default IngredientDetailStore;
