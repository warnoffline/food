import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import SearchIngredientStore from '@/stores/IngredientsStore/SearchIngredientStore/SearchIngredientStore';

type SearchIngredientStoreProps = {
  children: React.ReactNode;
};

export const SearchIngredientStoreContext = createContext<SearchIngredientStore | undefined>(undefined);

export const IngredientsStoreProvider: React.FC<SearchIngredientStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new SearchIngredientStore());
  return <SearchIngredientStoreContext.Provider value={store}>{children}</SearchIngredientStoreContext.Provider>;
};

export const useSearchIngredientStore = () => {
  const store = useContext(SearchIngredientStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
