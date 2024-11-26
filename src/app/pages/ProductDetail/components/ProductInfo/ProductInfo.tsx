import s from './ProductInfo.module.scss';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';
import ImageWithFallback from '@/hoc/ImageWithFallback';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = observer(({ product }) => {
  const Image = useMemo(() => product.image, [product.image]);

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__img}>
        <ImageWithFallback src={Image} alt="Card Image" fallbackSrc="notImg.png" />
      </div>
      <div className={s.root__category}>
        <Text view="title">{product.aisle}</Text>
        {product.badges?.map((badge) => <Text>{badge}</Text>)}
      </div>
      <div className={s.root__txts}>
        {product.nutrition?.nutrients &&
          product.nutrition.nutrients.map(
            (item, index) =>
              item && (
                <motion.div
                  {...animation}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                  key={item.name}
                  className={s.root__detail}
                >
                  <Text view="p-m">{item.name}</Text>
                  <Text color="accent" weight="semiBold" view="p-m">
                    {item.amount}
                    {''}
                    {item.unit}
                  </Text>
                </motion.div>
              ),
          )}
      </div>
    </motion.div>
  );
});

export default ProductInfo;
