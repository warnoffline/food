import { RecipeById } from '@/types/recipes';
import s from './RecipeInfo.module.scss';
import Text from '@/components/Text';
import { memo } from 'react';
import { DETAIL_CONFIG } from '@/configs/detailsConfig';

type RecipeInfoProps = {
  recipe: RecipeById;
};

const RecipeInfo: React.FC<RecipeInfoProps> = ({ recipe }) => {
  const mainDetails = DETAIL_CONFIG(recipe);

  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src={recipe.image} alt="" />
      </div>
      <div className={s.root__txts}>
        {mainDetails.map(
          ({ value, title }) =>
            value && (
              <div key={title} className={s.root__detail}>
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
