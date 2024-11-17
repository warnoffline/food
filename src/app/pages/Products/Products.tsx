import { useEffect } from 'react';
import React from 'react';
import s from './Products.module.scss';
import Pagination from '@/components/Pagination';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/types/shared';
import Loading from '@/components/Loading';
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

  const renderMetaContent = () => {
    switch (metaState.products) {
      case Meta.loading:
        return <Loading />;
      case Meta.error:
        return (
          <div className={s['root__no-items']}>
            <Text view="title">Oops, something went wrong!</Text>;
          </div>
        );
      case Meta.success:
        return products.length > 0 ? (
          <div className={s.root__items}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={s['root__no-items']}>
            <Text view="title">No results</Text>
          </div>
        );
      default:
        return (
          <div className={s['root__no-items']}>
            <Text view="title">No results</Text>
          </div>
        );
    }
  };

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Products</Text>
        <div>
          <SearchProduct />
        </div>
        {renderMetaContent()}
        {totalPages > 1 && (
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
