import { EquipmentById, GetRecipesParams, Recipe } from '../types/recipes';
import axiosInstance from './instance';
import { Response } from '@/types/shared';

export const fetchRecipes = async (params: GetRecipesParams): Promise<Response<Recipe> | null> => {
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

export const fetchRecipeById = async (recipeId: number): Promise<Recipe | null> => {
  try {
    const response = await axiosInstance.get<Recipe>(`/recipes/${recipeId}/information`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchEquipmentsById = async (recipeId: number): Promise<EquipmentById | null> => {
  try {
    const response = await axiosInstance.get<EquipmentById>(`/recipes/${recipeId}/equipmentWidget.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSimilarRecipe = async (recipeId: number): Promise<Recipe[] | null> => {
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

export const fetchExtractRecipe = async (url: string): Promise<Recipe | null> => {
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
