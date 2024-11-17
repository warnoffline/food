import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import IngredientDetailStore from '@/stores/IngredientDetailStore/IngredientDetailStore';

type IngredientDetailStoreProps = {
  children: React.ReactNode;
};

export const IngredientStoreContext = createContext<IngredientDetailStore | undefined>(undefined);

export const IngredientStoreProvider: React.FC<IngredientDetailStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new IngredientDetailStore());
  return <IngredientStoreContext.Provider value={store}>{children}</IngredientStoreContext.Provider>;
};

export const useIngredientDetailStore = () => {
  const store = useContext(IngredientStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
