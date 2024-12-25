import { Recipe } from '@/types/recipes';
export const DETAIL_CONFIG = (recipe: Recipe) => {
  return [
    { title: 'Preparation', value: recipe.preparationMinutes },
    { title: 'Cooking Time', value: recipe.cookingMinutes && `${recipe.cookingMinutes} minutes` },
    { title: 'Total Time', value: recipe.readyInMinutes },
    { title: 'Servings', value: recipe.servings },
    { title: 'Dish Type', value: recipe.dishTypes?.join(', ') },
    { title: 'Cuisine', value: recipe.cuisines?.join(', ') },
    { title: 'Health Score', value: recipe.healthScore && Math.round(recipe.healthScore) },
    { title: 'Spoonacular Score', value: recipe.spoonacularScore && Math.round(recipe.spoonacularScore) },
    { title: 'Vegetarian', value: recipe.vegetarian ? 'Yes' : null },
    {
      title: 'Badges',
      value: [
        recipe.vegan ? 'Vegan' : null,
        recipe.glutenFree ? 'Gluten Free' : null,
        recipe.dairyFree ? 'Dairy Free' : null,
      ].join(','),
    },
  ];
};
