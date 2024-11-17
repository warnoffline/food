import { makeAutoObservable } from 'mobx';
import { Ingredient } from '@/types/ingredient';
import axiosInstance from './instance';
import { IngredientsLoadParams } from '@/types/ingredient';
import { Response } from '@/types/shared';
import { EquipmentById, GetRecipesParams, Recipe } from '@/types/recipes';
import { Product, ProductsLoadParams, ProductsResponse } from '@/types/product';

class ApiStore {
  constructor() {
    makeAutoObservable(this);
  }

  // Recipe
  fetchRecipes = async (params: GetRecipesParams): Promise<Response<Recipe> | null> => {
    try {
      const response = await axiosInstance.get<Response<Recipe>>('/recipes/complexSearch', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchRecipeById = async (recipeId: number): Promise<Recipe | null> => {
    try {
      const response = await axiosInstance.get<Recipe>(`/recipes/${recipeId}/information`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchEquipmentsById = async (recipeId: number): Promise<EquipmentById | null> => {
    try {
      const response = await axiosInstance.get<EquipmentById>(`/recipes/${recipeId}/equipmentWidget.json`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchSimilarRecipe = async (recipeId: number): Promise<Recipe[] | null> => {
    try {
      const response = await axiosInstance.get<Recipe[]>(`/recipes/${recipeId}/similar`, {
        params: {
          number: 12,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchExtractRecipe = async (url: string): Promise<Recipe | null> => {
    try {
      const response = await axiosInstance.get<Recipe>(`/recipes/extract`, {
        params: {
          url,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchRecipeInformationBulk = async (ids: string): Promise<Recipe[] | null> => {
    try {
      const includeNutrition = true;
      const response = await axiosInstance.get<Recipe[]>(`/recipes/informationBulk`, {
        params: {
          includeNutrition,
          ids,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // Ingredient
  fetchIngredients = async (params: IngredientsLoadParams): Promise<Response<Ingredient> | null> => {
    try {
      const response = await axiosInstance.get<Response<Ingredient>>('/food/ingredients/search', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchIngredientById = async (ingredientId: number): Promise<Ingredient | null> => {
    try {
      const response = await axiosInstance.get<Ingredient>(`/food/ingredients/${ingredientId}/information`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // Product
  fetchProducts = async (params: ProductsLoadParams): Promise<ProductsResponse | null> => {
    try {
      const response = await axiosInstance.get<ProductsResponse>('/food/products/search', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  fetchProductById = async (productId: number): Promise<Product | null> => {
    try {
      const response = await axiosInstance.get<Product>(`/food/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

export default ApiStore;
