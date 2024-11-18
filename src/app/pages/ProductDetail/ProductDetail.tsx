import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './ProductDetail.module.scss';
import Loading from '@/components/Loading';
import { ProductDetailStoreProvider, useProductDetailStore } from './useProductDetailStore';
import { withProvider } from '@/hoc/withProvider';
import ProductInfo from './components/ProductInfo';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { product, getProduct } = useProductDetailStore();

  useEffect(() => {
    getProduct(Number(id));
  }, [getProduct, id]);

  if (!product) {
    return <Loading page />;
  }

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <DetailTabHeader>{product.title}</DetailTabHeader>
        <ProductInfo product={product} />
      </div>
    </div>
  );
});

const ProductDetailWithProvider = withProvider(ProductDetailStoreProvider, IngredientDetail);

export default ProductDetailWithProvider;
