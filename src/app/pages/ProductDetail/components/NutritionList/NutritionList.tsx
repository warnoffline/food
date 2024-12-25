import { Nutrition } from '@/types/recipes';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';
import Text from '@/components/Text';
import s from './NutritionList.module.scss';
import React from 'react';

type NutritionListProps = {
  nutrition: Nutrition;
};

const NutritionList: React.FC<NutritionListProps> = ({ nutrition }) => {
  const nutrients = nutrition.nutrients;

  return (
    <React.Fragment>
      {nutrients &&
        nutrients
          .filter((item) => item.amount && item.amount > 0)
          .map(
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
    </React.Fragment>
  );
};

export default NutritionList;
