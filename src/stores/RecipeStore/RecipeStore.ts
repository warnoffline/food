import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchEquipmentsById,
  fetchExtractRecipe,
  fetchRecipeById,
  fetchRecipes,
  fetchSimilarRecipe,
} from '@/api/recipeApi';
import { EquipmentById, GetRecipesParams, Recipe } from '@/types/recipes';
import { Meta, Response } from '@/types/shared';

type metaStateKeys = 'recipe' | 'equipments' | 'similarRecipes' | 'recipes' | 'extractRecipe';

class RecipeStore {
  private _recipes: Recipe[] = [];
  private _favorites: Recipe[] = [];
  private _similarRecipes: Recipe[] = [];
  private _recipe: Recipe | null = null;
  private _equipments: EquipmentById | null = null;
  private _totalResults: number = 0;
  private _number: number = 0;
  private _metaState: Record<metaStateKeys, Meta> = {
    recipes: Meta.initial,
    recipe: Meta.initial,
    equipments: Meta.initial,
    similarRecipes: Meta.initial,
    extractRecipe: Meta.initial,
  };

  constructor() {
    makeAutoObservable(this);
    this.loadFavoritesFromLocalStorage();
  }

  get recipes() {
    return this._recipes;
  }

  get favorites() {
    return this._favorites;
  }

  get similarRecipes() {
    return this._similarRecipes;
  }

  get recipe() {
    return this._recipe;
  }

  get equipments() {
    return this._equipments;
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

  getRecipeById = async (recipeId: number) => {
    try {
      this.setMetaState('recipe', Meta.loading);
      const data = await fetchRecipeById(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('recipe', Meta.success);
          this.setRecipe(data);
        } else {
          this.setMetaState('recipe', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('recipe', Meta.error);
      });
      console.error('Failed to load recipe by ID:', error);
    }
  };

  getEquipmentsById = async (recipeId: number) => {
    try {
      this.setMetaState('equipments', Meta.loading);
      const data = await fetchEquipmentsById(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('equipments', Meta.success);
          this.setEquipments(data);
        } else {
          this.setMetaState('equipments', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('equipments', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  getRecipes = async (params: GetRecipesParams) => {
    try {
      this.setMetaState('recipes', Meta.loading);
      const data = await fetchRecipes(params);
      runInAction(() => {
        if (data) {
          this.setMetaState('recipes', Meta.success);
          this.setRecipes(data);
        } else {
          this.setMetaState('recipes', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('recipes', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  getSimilarRecipe = async (recipeId: number) => {
    try {
      this.setMetaState('similarRecipes', Meta.loading);
      const data = await fetchSimilarRecipe(recipeId);
      runInAction(() => {
        if (data) {
          this.setMetaState('similarRecipes', Meta.success);
          this.setSimilar(data);
        } else {
          this.setMetaState('similarRecipes', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('similarRecipes', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  getExtractRecipe = async (url: string) => {
    try {
      this.setMetaState('extractRecipe', Meta.loading);
      const data = await fetchExtractRecipe(url);
      runInAction(() => {
        if (data) {
          this.setMetaState('extractRecipe', Meta.success);
          this.setRecipe(data);
        } else {
          this.setMetaState('extractRecipe', Meta.error);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('extractRecipe', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setRecipes(data: Response<Recipe>) {
    runInAction(() => {
      this._recipes = data.results;
      this._number = data.number;
      this._totalResults = data.totalResults;
    });
  }

  setRecipe(recipe: Recipe) {
    runInAction(() => {
      this._recipe = recipe;
    });
  }

  setSimilar(recipes: Recipe[]) {
    runInAction(() => {
      this._similarRecipes = recipes;
    });
  }

  setEquipments(equipments: EquipmentById) {
    runInAction(() => {
      this._equipments = equipments;
    });
  }

  isFavorite = (recipeId: number) => {
    return this._favorites.some((favorite) => favorite.id === recipeId);
  };

  saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this._favorites));
  }

  addRecipeToFavorites(recipe: Recipe) {
    if (!this.isFavorite(recipe.id)) {
      runInAction(() => {
        this._favorites.push(recipe);
        this.saveFavoritesToLocalStorage();
      });
    }
  }

  removeFromFavorites(recipeId: number) {
    runInAction(() => {
      // Wrap in runInAction for consistency
      this._favorites = this._favorites.filter((recipe) => recipe.id !== recipeId);
      localStorage.setItem('favorites', JSON.stringify(this._favorites));
    });
  }

  loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      runInAction(() => {
        // Wrap in runInAction for consistency
        this._favorites = JSON.parse(savedFavorites);
      });
    }
  }
}

export default new RecipeStore();
