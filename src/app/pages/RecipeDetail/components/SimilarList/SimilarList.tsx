import Text from '@/components/Text';
import s from './SimilarList.module.scss';
import { Recipe } from '@/types/recipes';
import React from 'react';
import SimilarCard from '../SimilarCard/SimilarCard';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

type SimilarListProps = {
  recipes: Recipe[];
};

const SimilarList: React.FC<SimilarListProps> = observer(({ recipes }) => {
  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <Text view="p-xl" weight="semiBold">
        Similar Recipes
      </Text>
      <div className={s.root__items}>
        {recipes.map((recipe, index) => (
          <motion.div key={recipe.id} {...animation} transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}>
            <SimilarCard recipe={recipe} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

export default SimilarList;
