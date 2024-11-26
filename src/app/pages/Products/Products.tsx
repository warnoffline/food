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
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const Products: React.FC = observer(() => {
  const { products, queryString, page, setPage, getProducts, metaState, totalResults, searchStore } =
    useProductsStore();
  const search = searchStore.query;
  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getProducts();
  }, [page, search, queryString, getProducts]);

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Products</Text>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <SearchProduct />
        </motion.div>
        {totalPages > 1 && products.length > 0 && (
          <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }} className={s.root__pagination}>
            <div className={s.root__pagination__center}>
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </motion.div>
        )}
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <RenderMetaContent meta={metaState.products} items={products}>
            {products &&
              products.map((product, index) => (
                <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}>
                  <ProductCard key={product.id} product={product} />
                </motion.div>
              ))}
          </RenderMetaContent>
        </motion.div>
      </div>
    </motion.div>
  );
});

const ProductsWithProvider = withProvider(ProductsStoreProvider, Products);

export default ProductsWithProvider;
