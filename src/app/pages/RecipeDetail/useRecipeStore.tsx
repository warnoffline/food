import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import RecipeStore from '@/stores/RecipeStore';

type RecipeStoreProps = {
  children: React.ReactNode;
};

export const RecipeStoreContext = createContext<RecipeStore | undefined>(undefined);

export const RecipeStoreProvider: React.FC<RecipeStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new RecipeStore());
  return <RecipeStoreContext.Provider value={store}>{children}</RecipeStoreContext.Provider>;
};

export const useRecipeStore = () => {
  const store = useContext(RecipeStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
