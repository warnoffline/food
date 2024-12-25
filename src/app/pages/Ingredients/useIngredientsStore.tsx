import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import IngredientsStore from '@/stores/IngredientsStore';

type IngredientsStoreProps = {
  children: React.ReactNode;
};

export const IngredientsStoreContext = createContext<IngredientsStore | undefined>(undefined);

export const IngredientsStoreProvider: React.FC<IngredientsStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new IngredientsStore());
  return <IngredientsStoreContext.Provider value={store}>{children}</IngredientsStoreContext.Provider>;
};

export const useIngredientsStore = () => {
  const store = useContext(IngredientsStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
