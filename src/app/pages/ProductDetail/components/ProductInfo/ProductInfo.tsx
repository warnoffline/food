import s from './ProductInfo.module.scss';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Product } from '@/types/product';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = observer(({ product }) => {
  const Image = useMemo(() => product.image, [product.image]);

  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src={Image} alt="" />
      </div>
      <div className={s.root__category}>
        <Text view="title">{product.aisle}</Text>
        {product.badges?.map((badge) => <Text>{badge}</Text>)}
      </div>
      <div className={s.root__txts}>
        {product.nutrition?.nutrients &&
          product.nutrition.nutrients.map(
            (item) =>
              item && (
                <div key={item.name} className={s.root__detail}>
                  <Text view="p-m">{item.name}</Text>
                  <Text color="accent" weight="semiBold" view="p-m">
                    {item.amount}
                    {''}
                    {item.unit}
                  </Text>
                </div>
              ),
          )}
      </div>
    </div>
  );
});

export default ProductInfo;
