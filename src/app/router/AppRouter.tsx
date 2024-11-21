import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
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
  NotFoundLazy,
  IngredientDetailLazy,
  ProductDetailLazy,
  AuthLazy,
} from '../pages';
import { Suspense } from 'react';
import Loading from '@/components/Loading/Loading';
import ProtectedRoute from './ProtectedRoute';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';

const RouterComponent = observer(() => {
  const { user } = useRootStore();
  const isAuthenticated = user.isAuthenticated ? true : false;

  const router = createBrowserRouter([
    {
      path: '/food',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={ROUTES.recipes} replace />,
        },
        {
          path: ROUTES.recipes,
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
          path: ROUTES.productById,
          element: <ProductDetailLazy />,
        },
        {
          path: ROUTES.ingredients,
          element: <IngredientsLazy />,
        },
        {
          path: ROUTES.ingredientById,
          element: <IngredientDetailLazy />,
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
          path: ROUTES.auth,
          element: <AuthLazy />,
        },
        {
          element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
          children: [
            {
              path: ROUTES.profile,
              element: <ProfileLazy />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundLazy />,
    },
  ]);
  return (
    <Suspense fallback={<Loading page />}>
      <RouterProvider router={router} />
    </Suspense>
  );
});

export default RouterComponent;
