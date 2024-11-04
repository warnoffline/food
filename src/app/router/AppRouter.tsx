import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import { ROUTES } from '@/configs/routeConfig';
import {
  ProfileLazy,
  RecipesLazy,
  ProductsLazy,
  FavoritesLazy,
  MenuItemsLazy,
  IngredientsLazy,
  MealPlanningLazy,
  RecipeDetailLazy,
} from '../pages';
import { Suspense } from 'react';

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.root,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <RecipesLazy />,
        },
        {
          path: ROUTES.recipeById,
          element: <RecipeDetailLazy />,
        },
        {
          path: ROUTES.products,
          element: <ProductsLazy />,
        },
        {
          path: ROUTES.ingredients,
          element: <IngredientsLazy />,
        },
        {
          path: ROUTES.menuItems,
          element: <MenuItemsLazy />,
        },
        {
          path: ROUTES.mealPlanning,
          element: <MealPlanningLazy />,
        },
        {
          path: ROUTES.favorites,
          element: <FavoritesLazy />,
        },
        {
          path: ROUTES.profile,
          element: <ProfileLazy />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default RouterComponent;
