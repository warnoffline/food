import { action, computed, makeObservable, observable, remove, set, toJS } from 'mobx';
import { Recipe } from '@/types/recipes';
import { ILocalStore } from '@/utils/useLocalStore';
import { CollectionModel, getInitialCollectionModel, linearizeCollection } from '../models/shared/collection';

type PrivateFields = '_favorites';

class FavoritesStore implements ILocalStore {
  private _favorites: CollectionModel<number, Recipe> = getInitialCollectionModel();

  constructor() {
    makeObservable<FavoritesStore, PrivateFields>(this, {
      _favorites: observable,
      favorites: computed,
      addRecipeToFavorites: action,
      removeFromFavorites: action,
      loadFavoritesFromLocalStorage: action,
      saveFavoritesToLocalStorage: action,
      destroy: action,
    });
    this.loadFavoritesFromLocalStorage();
  }

  get favorites() {
    return linearizeCollection(this._favorites);
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.order.includes(recipeId);
  };

  saveFavoritesToLocalStorage() {
    const plainFavorites = toJS(this._favorites);
    localStorage.setItem('favorites', JSON.stringify(plainFavorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      set(this._favorites, 'order', [...this._favorites.order, recipe.id]);
      set(this._favorites.entities, recipe.id, recipe);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(recipeId: number) {
    if (this.isFavorite(recipeId)) {
      this._favorites.order = this._favorites.order.filter((id) => id !== recipeId);
      remove(this._favorites.entities, recipeId.toString());
      this.saveFavoritesToLocalStorage();
    }
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const parsedData: CollectionModel<number, Recipe> = JSON.parse(savedFavorites);
      this._favorites = parsedData;
    }
  }

  destroy(): void {}
}

export default FavoritesStore;
