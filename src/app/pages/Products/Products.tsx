import { useEffect } from 'react';
import React from 'react';
import s from './Products.module.scss';
import Pagination from '@/components/Pagination';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import RenderMetaContent from '@/hoc/RenderMetaContent';
import { ProductsStoreProvider, useProductsStore } from './useProductsStore';
import { withProvider } from '@/hoc/withProvider';
import ProductCard from './components/ProductCard';
import SearchProduct from './components/SearchProduct';

const Products: React.FC = observer(() => {
  const { products, queryString, page, setPage, getProducts, metaState, totalResults, searchStore } =
    useProductsStore();
  const search = searchStore.query;
  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getProducts();
  }, [page, search, queryString, getProducts]);

  const product = products.map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Products</Text>
        <div>
          <SearchProduct />
        </div>
        <RenderMetaContent meta={metaState.products} items={products}>
          {product}
        </RenderMetaContent>
        {totalPages > 1 && products.length > 0 && (
          <div className={s.root__pagination}>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>
    </div>
  );
});

const ProductsWithProvider = withProvider(ProductsStoreProvider, Products);

export default ProductsWithProvider;
