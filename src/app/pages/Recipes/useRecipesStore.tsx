import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import RecipesStore from '@/stores/RecipesStore';

type RecipesStoreProps = {
  children: React.ReactNode;
};

export const RecipesStoreContext = createContext<RecipesStore | undefined>(undefined);

export const RecipesStoreProvider: React.FC<RecipesStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new RecipesStore());
  return <RecipesStoreContext.Provider value={store}>{children}</RecipesStoreContext.Provider>;
};

export const useRecipesStore = () => {
  const store = useContext(RecipesStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
