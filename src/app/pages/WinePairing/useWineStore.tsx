import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import WineStore from '@/stores/WineStore/WineStore';

type WineStoreProps = {
  children: React.ReactNode;
};

export const WineStoreContext = createContext<WineStore | undefined>(undefined);

export const WineStoreProvider: React.FC<WineStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new WineStore());
  return <WineStoreContext.Provider value={store}>{children}</WineStoreContext.Provider>;
};

export const useWineStore = () => {
  const store = useContext(WineStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
