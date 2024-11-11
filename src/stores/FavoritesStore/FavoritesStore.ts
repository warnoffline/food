import { action, computed, makeObservable, observable } from 'mobx';
import { Recipe } from '@/types/recipes';
import { ILocalStore } from '@/utils/useLocalStore';

type PrivateFields = '_favorites';

class FavoritesStore implements ILocalStore {
  private _favorites: Recipe[] = [];

  constructor() {
    makeObservable<FavoritesStore, PrivateFields>(this, {
      _favorites: observable,
      favorites: computed,
      addRecipeToFavorites: action,
      removeFromFavorites: action,
      loadFavoritesFromLocalStorage: action,
      saveFavoritesToLocalStorage: action,
    });
    this.loadFavoritesFromLocalStorage();
  }

  get favorites() {
    return this._favorites;
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.some((favorite) => favorite.id === recipeId);
  };

  saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      this._favorites.push(recipe);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(recipeId: number) {
    this._favorites = this._favorites.filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this._favorites = JSON.parse(savedFavorites);
    }
  }

  destroy(): void {}
}

export default FavoritesStore;
