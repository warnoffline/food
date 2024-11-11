import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import IngredientStore from '@/stores/IngredientStore/IngredientStore';

type IngredientStoreProps = {
  children: React.ReactNode;
};

export const IngredientStoreContext = createContext<IngredientStore | undefined>(undefined);

export const IngredientStoreProvider: React.FC<IngredientStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new IngredientStore());
  return <IngredientStoreContext.Provider value={store}>{children}</IngredientStoreContext.Provider>;
};

export const useIngredientStore = () => {
  const store = useContext(IngredientStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
