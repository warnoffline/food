import React from 'react';

export const RecipesLazy = React.lazy(() => import('./Recipes/Recipes'));
export const RecipeDetailLazy = React.lazy(() => import('./RecipeDetail/RecipeDetail'));
export const IngredientsLazy = React.lazy(() => import('./Ingredients/Ingredients'));
export const MealPlanningLazy = React.lazy(() => import('./MealPlanning/MealPlanning'));
export const MenuItemsLazy = React.lazy(() => import('./MenuItems/MenuItems'));
export const ProductsLazy = React.lazy(() => import('./Products/Products'));
export const ProductDetailLazy = React.lazy(() => import('./ProductDetail/ProductDetail'));
export const ProfileLazy = React.lazy(() => import('./Profile/Profile'));
export const FavoritesLazy = React.lazy(() => import('./Favorites/Favorites'));
export const NotFoundLazy = React.lazy(() => import('./NotFound/NotFound'));
export const IngredientDetailLazy = React.lazy(() => import('./IngredientDetail/IngredientDetail'));
export const AuthLazy = React.lazy(() => import('./Auth/Auth'));
export const WinePairingLazy = React.lazy(() => import('./WinePairing/WinePairing'));
