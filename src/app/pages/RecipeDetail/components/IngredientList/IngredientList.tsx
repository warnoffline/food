import Text from '@/components/Text';
import DishIcon from '@/components/icons/DishIcon';
import styles from './IngredientList.module.scss';
import { Ingredient } from '@/types/recipes';
import React, { memo } from 'react';

type IngredientListProps = {
  ingredients: Ingredient[];
};

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <div className={styles['ingredient-list']}>
      <Text view="p-xl" weight="semiBold">
        Ingredients
      </Text>
      <div className={styles['ingredient-list__items']}>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className={styles['ingredient-list__item']}>
            <div>
              <DishIcon width={24} height={24} color="accent" />
            </div>
            <Text view="p-m">{ingredient.original}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(IngredientList);
