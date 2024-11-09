import { Ingredient } from '@/types/ingredient';
import axiosInstance from './instance';
import { IngredientsLoadParams } from '@/types/ingredient';
import { Response } from '@/types/shared';

export const fetchIngredients = async (params: IngredientsLoadParams): Promise<Response<Ingredient> | null> => {
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

export const fetchIngredientById = async (ingredientId: number): Promise<Ingredient | null> => {
  try {
    const response = await axiosInstance.get<Ingredient>(`/food/ingredients/${ingredientId}/information`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
