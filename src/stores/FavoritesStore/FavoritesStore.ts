import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Recipe } from '@/types/recipes';
import { ILocalStore } from '@/utils/useLocalStore';
import { Meta } from '@/types/shared';
import rootStore from '../RootStore';

type PrivateFields = '_favoritesIds' | '_favorites' | '_metaState';

type metaStateKeys = 'favorites' | 'favoritesIds';

class FavoritesStore implements ILocalStore {
  private _favoritesIds: number[] = [];
  private _favorites: Recipe[] = [];
  private _metaState: Record<metaStateKeys, Meta> = {
    favorites: Meta.initial,
    favoritesIds: Meta.initial,
  };
  private user: string;
  private initializationPromise: Promise<void>;

  constructor() {
    this.user = rootStore.user.user;
    makeObservable<FavoritesStore, PrivateFields>(this, {
      _favoritesIds: observable,
      _favorites: observable,
      _metaState: observable,
      favoritesIds: computed,
      favorites: computed,
      metaState: computed,
      addRecipeToFavorites: action,
      removeFromFavorites: action,
      loadFavoritesFromLocalStorage: action,
      saveFavorites: action,
      setMetaState: action,
      destroy: action,
    });

    this.initializationPromise = this.initializeFavorites();
  }

  get favoritesIds() {
    return this._favoritesIds;
  }

  get favorites() {
    return this._favorites;
  }

  get metaState() {
    return this._metaState;
  }

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setFavorites(data: Recipe[]) {
    this._favorites = data;
  }

  getFavorites = async () => {
    await this.initializationPromise;

    try {
      this.setMetaState('favorites', Meta.loading);
      const ids = this._favoritesIds.join(',');
      const data = await rootStore.api.fetchRecipeInformationBulk(ids);
      runInAction(() => {
        if (data) {
          this.setMetaState('favorites', Meta.success);
          this.setFavorites(data);
          return;
        }

        this.setMetaState('favorites', Meta.error);
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('favorites', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  isFavorite = (recipeId: number) => {
    return this._favoritesIds.includes(recipeId);
  };

  saveFavorites() {
    const plainFavorites = this._favoritesIds;
    if (this.user) {
      rootStore.user.saveFavorites(plainFavorites);
    } else {
      localStorage.setItem('favorites', JSON.stringify(plainFavorites));
    }
  }

  addRecipeToFavorites(recipeId: number) {
    if (!this.isFavorite(recipeId)) {
      this._favoritesIds.push(recipeId);
      this.saveFavorites();
    }
  }

  removeFromFavorites(recipeId: number) {
    if (this.isFavorite(recipeId)) {
      this._favoritesIds = this._favoritesIds.filter((id) => id !== recipeId);
      this.saveFavorites();
    }
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const parsedData: number[] = JSON.parse(savedFavorites);
      this._favoritesIds = parsedData;
    }
  }

  private async initializeFavorites() {
    if (this.user) {
      this.setMetaState('favoritesIds', Meta.loading);
      try {
        const favorites = await rootStore.user.getFavorites();
        runInAction(() => {
          this._favoritesIds = favorites;
          this.setMetaState('favoritesIds', Meta.success);
        });
      } catch (error) {
        runInAction(() => {
          this.setMetaState('favoritesIds', Meta.error);
        });
        console.error('Failed to load:', error);
      }
    } else {
      this.loadFavoritesFromLocalStorage();
    }
  }

  destroy(): void {}
}

export default FavoritesStore;
