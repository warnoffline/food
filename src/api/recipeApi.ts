import { EquipmentById, RecipeById } from '../types/recipes';
import axiosInstance from './instance';
import { RecipesResponse } from '../types/recipes';

export const fetchRecipes = async (offset: number, number: number): Promise<RecipesResponse | null> => {
  try {
    const response = await axiosInstance.get<RecipesResponse>('/recipes/complexSearch', {
      params: {
        offset,
        number,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchRecipeById = async (recipeId: number): Promise<RecipeById | null> => {
  try {
    const response = await axiosInstance.get<RecipeById>(`/recipes/${recipeId}/information`);
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
