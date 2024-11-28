import s from './ProductInfo.module.scss';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';
import ImageWithFallback from '@/hoc/ImageWithFallback';
import NutritionList from '../NutritionList';
import { BADGES_CONFIG } from '@/configs/badgesConfig';

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
        {product.badges?.map((badge) => {
          const badgeInfo = BADGES_CONFIG.find((b) => b.key === badge);
          return <Text>{badgeInfo ? badgeInfo.label : badge}</Text>;
        })}
      </div>
      <div className={s.root__txts}>
        <NutritionList nutrition={product.nutrition} />
      </div>
    </motion.div>
  );
});

export default ProductInfo;
