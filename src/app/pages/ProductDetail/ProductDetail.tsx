import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './ProductDetail.module.scss';
import { ProductDetailStoreProvider, useProductDetailStore } from './useProductDetailStore';
import { withProvider } from '@/hoc/withProvider';
import ProductInfo from './components/ProductInfo';
import RenderMetaDetailContent from '@/hoc/RenderMetaDetailContent';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { product, getProduct, metaState } = useProductDetailStore();

  useEffect(() => {
    getProduct(Number(id));
  }, [getProduct, id]);

  return (
    <RenderMetaDetailContent meta={metaState.product}>
      {product && (
        <div className={s.root}>
          <div className={s.root__center}>
            <DetailTabHeader>{product.title}</DetailTabHeader>
            <ProductInfo product={product} />
          </div>
        </div>
      )}
    </RenderMetaDetailContent>
  );
});

const ProductDetailWithProvider = withProvider(ProductDetailStoreProvider, IngredientDetail);

export default ProductDetailWithProvider;
