import { RecipeById } from '@/types/recipes';
export const mainInfoDetails = (recipe: RecipeById) => {
  return [
    { title: 'Preparation', value: recipe.preparationMinutes || null },
    { title: 'Cooking Time', value: recipe.cookingMinutes || null },
    { title: 'Total Time', value: recipe.readyInMinutes || null },
    { title: 'Servings', value: recipe.servings || null },
    { title: 'Dish Type', value: recipe.dishTypes?.join(', ') || null },
    { title: 'Cuisine', value: recipe.cuisines?.join(', ') || null },
    { title: 'Health Score', value: recipe.healthScore || null },
    { title: 'Spoonacular Score', value: recipe.spoonacularScore || null },
    { title: 'Vegetarian', value: recipe.vegetarian ? 'Yes' : null },
    { title: 'Vegan', value: recipe.vegan ? 'Yes' : null },
    { title: 'Gluten Free', value: recipe.glutenFree ? 'Yes' : null },
    { title: 'Dairy Free', value: recipe.dairyFree ? 'Yes' : null },
    { title: 'Very Healthy', value: recipe.veryHealthy ? 'Yes' : null },
    { title: 'Cheap', value: recipe.cheap ? 'Yes' : null },
    { title: 'Sustainable', value: recipe.sustainable ? 'Yes' : null },
  ];
};
