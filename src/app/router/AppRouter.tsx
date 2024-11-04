import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import { ROUTES } from '@/configs/routeConfig';

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: ROUTES.map(({ path, lazy }) => ({
        path,
        lazy,
      })),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterComponent;
