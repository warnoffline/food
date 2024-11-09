import React from 'react';

export const RecipesLazy = React.lazy(() => import('./Recipes/Recipes'));
export const RecipeDetailLazy = React.lazy(() => import('./RecipeDetail/RecipeDetail'));
export const IngredientsLazy = React.lazy(() => import('./Ingredients/Ingredients'));
export const MealPlanningLazy = React.lazy(() => import('./MealPlanning/MealPlanning'));
export const MenuItemsLazy = React.lazy(() => import('./MenuItems/MenuItems'));
export const ProductsLazy = React.lazy(() => import('./Products/Products'));
export const ProfileLazy = React.lazy(() => import('./Profile/Profile'));
export const FavoritesLazy = React.lazy(() => import('./Favorites/Favorites'));
export const NotFoundLazy = React.lazy(() => import('./NotFound/NotFound'));
export const IngredientDetailLazy = React.lazy(() => import('./IngredientDetail/IngredientDetail'));
