import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Recipes, RecipeDetail, Ingredients, MealPlanning, MenuItems, Products, Profile, Favorites } from '../pages';
import RootLayout from '../layout/RootLayout';

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Recipes />,
        },
        {
          path: 'recipes/:id',
          element: <RecipeDetail />,
        },
        {
          path: 'ingredients',
          element: <Ingredients />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'menu-items',
          element: <MenuItems />,
        },
        {
          path: 'meal-planning',
          element: <MealPlanning />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'favorites',
          element: <Favorites />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterComponent;
