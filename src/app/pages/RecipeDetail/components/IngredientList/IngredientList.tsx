import Text from '@/components/Text';
import DishIcon from '@/components/icons/DishIcon';
import s from './IngredientList.module.scss';
import { Ingredient } from '@/types/ingredient';
import React, { memo } from 'react';

type IngredientListProps = {
  ingredients: Ingredient[];
};

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <div className={s.root}>
      <Text view="p-xl" weight="semiBold">
        Ingredients
      </Text>
      <div className={s.root__items}>
        {ingredients.map(({ name, id, original }) => (
          <div key={id + name} className={s.root__item}>
            <div>
              <DishIcon width={24} height={24} color="accent" />
            </div>
            <Text view="p-m">{original}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(IngredientList);