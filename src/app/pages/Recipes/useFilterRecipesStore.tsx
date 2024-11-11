import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import FilterStore from '@/stores/RecipesStore/FilterStore/FilterStore';

type SearchRecipesStoreProps = {
  children: React.ReactNode;
};

export const FilterRecipesStoreContext = createContext<FilterStore | undefined>(undefined);

export const FilterRecipesStoreProvider: React.FC<SearchRecipesStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new FilterStore());
  return <FilterRecipesStoreContext.Provider value={store}>{children}</FilterRecipesStoreContext.Provider>;
};

export const useFilterRecipesStore = () => {
  const store = useContext(FilterRecipesStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
