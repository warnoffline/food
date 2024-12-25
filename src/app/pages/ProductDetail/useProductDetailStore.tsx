import React, { createContext, useContext } from 'react';
import { useLocalStore } from '@/utils/useLocalStore';
import ProductDetailStore from '@/stores/ProductDetailStore/ProductDetailStore';

type ProductDetailStoreProps = {
  children: React.ReactNode;
};

export const ProductDetailStoreContext = createContext<ProductDetailStore | undefined>(undefined);

export const ProductDetailStoreProvider: React.FC<ProductDetailStoreProps> = ({ children }) => {
  const store = useLocalStore(() => new ProductDetailStore());
  return <ProductDetailStoreContext.Provider value={store}>{children}</ProductDetailStoreContext.Provider>;
};

export const useProductDetailStore = () => {
  const store = useContext(ProductDetailStoreContext);
  if (!store) {
    throw Error('error');
  }
  return store;
};
