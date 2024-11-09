import Text from '@/components/Text';
import s from './SimilarList.module.scss';
import { Recipe } from '@/types/recipes';
import React, { memo } from 'react';
import SimilarCard from '../SimilarCard/SimilarCard';
import { observer } from 'mobx-react-lite';

type SimilarListProps = {
  recipes: Recipe[];
};

const SimilarList: React.FC<SimilarListProps> = observer(({ recipes }) => {
  return (
    <div className={s.root}>
      <Text view="p-xl" weight="semiBold">
        Similar Recipes
      </Text>
      <div className={s.root__items}>
        {recipes.map((recipe) => (
          <SimilarCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
});

export default memo(SimilarList);
