import React, { createContext, useContext } from 'react';
import FavoritesStore from '@/stores/FavoritesStore/FavoritesStore';
import { useLocalStore } from '@/utils/useLocalStore';

type FavoriteStoreProps = {
  children: React.ReactNode;
};

export const FavoritesStoreContext = createContext<FavoritesStore | undefined>(undefined);

export const FavoritesStoreProvider: React.FC<FavoriteStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new FavoritesStore());
  return <FavoritesStoreContext.Provider value={store}>{children}</FavoritesStoreContext.Provider>;
};

export const useFavoritesStore = () => {
  const store = useContext(FavoritesStoreContext);
  if (!store) {
    throw new Error('useFavoritesStore must be used within a FavoritesStoreProvider');
  }
  return store;
};
