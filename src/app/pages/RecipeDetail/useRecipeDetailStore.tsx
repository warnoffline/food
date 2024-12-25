import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import RecipeDetailStore from '@/stores/RecipeDetailStore';

type RecipeDetailStoreProps = {
  children: React.ReactNode;
};

export const RecipeStoreContext = createContext<RecipeDetailStore | undefined>(undefined);

export const RecipeStoreProvider: React.FC<RecipeDetailStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new RecipeDetailStore());
  return <RecipeStoreContext.Provider value={store}>{children}</RecipeStoreContext.Provider>;
};

export const useRecipeDetailStore = () => {
  const store = useContext(RecipeStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
