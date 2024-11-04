import { RecipeById } from '@/types/recipes';
import styles from './RecipeInfo.module.scss';
import Text from '@/components/Text';
import { memo } from 'react';
import { DETAIL_CONFIG } from '@/configs/detailsConfig';

type RecipeInfoProps = {
  recipe: RecipeById;
};

const RecipeInfo: React.FC<RecipeInfoProps> = ({ recipe }) => {
  const mainDetails = DETAIL_CONFIG(recipe);

  return (
    <div className={styles['recipe-info']}>
      <div className={styles['recipe-info__img']}>
        <img src={recipe.image} alt="" />
      </div>
      <div className={styles['recipe-info__txts']}>
        {mainDetails.map(
          ({ value, title }) =>
            value && (
              <div key={title} className={styles['recipe-info__detail']}>
                <Text view="p-m">{title}</Text>
                <Text color="accent" weight="semiBold" view="p-m">
                  {value}
                </Text>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default memo(RecipeInfo);
