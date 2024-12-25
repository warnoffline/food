import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import ProductsStore from '@/stores/ProductsStore/ProductsStore';

type ProductsStoreProps = {
  children: React.ReactNode;
};

export const ProductsStoreContext = createContext<ProductsStore | undefined>(undefined);

export const ProductsStoreProvider: React.FC<ProductsStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new ProductsStore());
  return <ProductsStoreContext.Provider value={store}>{children}</ProductsStoreContext.Provider>;
};

export const useProductsStore = () => {
  const store = useContext(ProductsStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
