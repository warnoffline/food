import { RecipeById } from '@/types/recipes';
export const DETAIL_CONFIG = (recipe: RecipeById) => {
  return [
    { title: 'Preparation', value: recipe.preparationMinutes },
    { title: 'Cooking Time', value: recipe.cookingMinutes },
    { title: 'Total Time', value: recipe.readyInMinutes },
    { title: 'Servings', value: recipe.servings },
    { title: 'Dish Type', value: recipe.dishTypes?.join(', ') },
    { title: 'Cuisine', value: recipe.cuisines?.join(', ') },
    { title: 'Health Score', value: recipe.healthScore },
    { title: 'Spoonacular Score', value: recipe.spoonacularScore },
    { title: 'Vegetarian', value: recipe.vegetarian ? 'Yes' : null },
    { title: 'Vegan', value: recipe.vegan ? 'Yes' : null },
    { title: 'Gluten Free', value: recipe.glutenFree ? 'Yes' : null },
    { title: 'Dairy Free', value: recipe.dairyFree ? 'Yes' : null },
    { title: 'Very Healthy', value: recipe.veryHealthy ? 'Yes' : null },
    { title: 'Cheap', value: recipe.cheap ? 'Yes' : null },
    { title: 'Sustainable', value: recipe.sustainable ? 'Yes' : null },
  ];
};
