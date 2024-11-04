export const ROUTES = [
  {
    name: 'Recipes',
    path: '/',
    lazy: async () => {
      const { Recipes } = await import('@/app/pages');
      return { Component: Recipes };
    },
  },
  {
    path: 'recipes/:id',
    lazy: async () => {
      const { RecipeDetail } = await import('@/app/pages');
      return { Component: RecipeDetail };
    },
  },
  {
    name: 'Ingredients',
    path: 'ingredients',
    lazy: async () => {
      const { Ingredients } = await import('@/app/pages');
      return { Component: Ingredients };
    },
  },
  {
    name: 'Products',
    path: 'products',
    lazy: async () => {
      const { Products } = await import('@/app/pages');
      return { Component: Products };
    },
  },
  {
    name: 'Menu Items',
    path: 'menu-items',
    lazy: async () => {
      const { MenuItems } = await import('@/app/pages');
      return { Component: MenuItems };
    },
  },
  {
    name: 'Meal Planning',
    path: 'meal-planning',
    lazy: async () => {
      const { MealPlanning } = await import('@/app/pages');
      return { Component: MealPlanning };
    },
  },
  {
    path: 'profile',
    lazy: async () => {
      const { Profile } = await import('@/app/pages');
      return { Component: Profile };
    },
  },
  {
    path: 'favorites',
    lazy: async () => {
      const { Favorites } = await import('@/app/pages');
      return { Component: Favorites };
    },
  },
];
