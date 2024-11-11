import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import SearchRecipeStore from '@/stores/RecipesStore/SearchRecipeStore/SearchRecipeStore';

type SearchRecipesStoreProps = {
  children: React.ReactNode;
};

export const SearchRecipesStoreContext = createContext<SearchRecipeStore | undefined>(undefined);

export const SearchRecipesStoreProvider: React.FC<SearchRecipesStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new SearchRecipeStore());
  return <SearchRecipesStoreContext.Provider value={store}>{children}</SearchRecipesStoreContext.Provider>;
};

export const useSearchRecipesStore = () => {
  const store = useContext(SearchRecipesStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
