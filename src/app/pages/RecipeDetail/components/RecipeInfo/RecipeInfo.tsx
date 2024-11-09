import { Recipe } from '@/types/recipes';
import s from './RecipeInfo.module.scss';
import Text from '@/components/Text';
import { memo, useCallback } from 'react';
import { DETAIL_CONFIG } from '@/configs/detailsConfig';
import Button from '@/components/Button';
import LikeIcon from '@/components/icons/LikeIcon';
import { observer } from 'mobx-react-lite';
import RecipeStore from '@/stores/RecipeStore';

type RecipeInfoProps = {
  recipe: Recipe;
};

const RecipeInfo: React.FC<RecipeInfoProps> = observer(({ recipe }) => {
  const isFavorite = RecipeStore.isFavorite(recipe.id);
  const mainDetails = DETAIL_CONFIG(recipe);

  const handleFavoriteToggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      if (isFavorite) {
        RecipeStore.removeFromFavorites(recipe.id);
      } else {
        RecipeStore.addRecipeToFavorites(recipe);
      }
    },
    [isFavorite, recipe],
  );

  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src={recipe.image} alt="" />
        {recipe.id > 0 && (
          <Button className={s.root__icon} onClick={handleFavoriteToggle}>
            <LikeIcon width={19} height={19} color={isFavorite ? 'white' : 'none'} strokeWidth={2} stroke="white" />
          </Button>
        )}
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
});

export default memo(RecipeInfo);
