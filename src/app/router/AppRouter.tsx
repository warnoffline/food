import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import { ROUTES } from '@/configs/routeConfig';
import {
  ProfileLazy,
  RecipesLazy,
  ProductsLazy,
  FavoritesLazy,
  IngredientsLazy,
  RecipeDetailLazy,
  NotFoundLazy,
  IngredientDetailLazy,
  ProductDetailLazy,
  AuthLazy,
  WinePairingLazy,
} from '../pages';
import { Suspense } from 'react';
import Loading from '@/components/Loading/Loading';
import ProtectedRoute from './ProtectedRoute';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';

const RouterComponent = observer(() => {
  const { user } = useRootStore();
  const isAuthenticated = user.isAuthenticated ? true : false;

  const router = createBrowserRouter(
    [
      {
        path: '/',
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
            path: ROUTES.winePairing,
            element: <WinePairingLazy />,
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
          {
            path: '*',
            element: <NotFoundLazy />,
          },
        ],
      },
    ],
    { basename: '/food' },
  );
  return (
    <Suspense fallback={<Loading page />}>
      <RouterProvider router={router} />
    </Suspense>
  );
});

export default RouterComponent;
