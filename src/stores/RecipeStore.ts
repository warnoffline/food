import { makeAutoObservable } from 'mobx';
import { fetchEquipmentsById, fetchRecipeById, fetchRecipes } from '@/api/recipeApi';
import { EquipmentById, Recipe, RecipeById } from '../types/recipes';

class RecipeStore {
  recipes: Recipe[] = [];
  favorites: Recipe[] = [];
  recipe: RecipeById | null = null;
  equipments: EquipmentById | null = null;
  totalResults: number = 0;
  number: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.loadFavoritesFromLocalStorage();
  }

  async loadEquipmentsById(recipeId: number) {
    try {
      const data = await fetchEquipmentsById(recipeId);
      if (data) {
        this.setEquipments(data);
      }
    } catch (error) {
      console.error('Failed to load:', error);
    }
  }

  async loadRecipes(page: number, resultsPerPage: number) {
    try {
      const offset = (page - 1) * resultsPerPage;
      const data = await fetchRecipes(offset, resultsPerPage);
      if (data) {
        this.setRecipes(data.results, data.totalResults, data.number);
      }
    } catch (error) {
      console.error('Failed to load:', error);
    }
  }

  async loadRecipeById(recipeId: number) {
    try {
      const data = await fetchRecipeById(recipeId);
      if (data) {
        this.setRecipe(data);
      }
    } catch (error) {
      console.error('Failed to load:', error);
    }
  }

  setRecipes(recipes: Recipe[], totalResults: number, number: number) {
    this.recipes = recipes;
    this.totalResults = totalResults;
    this.number = number;
  }

  setRecipe(recipe: RecipeById) {
    this.recipe = recipe;
  }

  setEquipments(equipments: EquipmentById) {
    this.equipments = equipments;
  }

  isFavorite(recipeId: number) {
    return this.favorites.some((recipe) => recipe.id === recipeId);
  }

  saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      this.favorites.push(recipe);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeFromFavorites(recipeId: number) {
    this.favorites = this.favorites.filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }
}

export default new RecipeStore();
