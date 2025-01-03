import { Recipe } from '@/types/recipes';
import s from './RecipeInfo.module.scss';
import Text from '@/components/Text';
import { useCallback } from 'react';
import { DETAIL_CONFIG } from '@/configs/detailsConfig';
import Button from '@/components/Button';
import LikeIcon from '@/components/icons/LikeIcon';
import { observer } from 'mobx-react-lite';
import { useRecipeDetailStore } from '../../useRecipeDetailStore';
import { toJS } from 'mobx';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';
import ImageWithFallback from '@/hoc/ImageWithFallback';

type RecipeInfoProps = {
  recipe: Recipe;
};

const RecipeInfo: React.FC<RecipeInfoProps> = observer(({ recipe }) => {
  const recipeStore = useRecipeDetailStore();
  const mainDetails = DETAIL_CONFIG(toJS(recipe));
  const recipeId = recipe.id;
  const isRecipeFavorite = recipeStore.favorites.includes(recipe.id);

  const handleFavoriteToggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      if (isRecipeFavorite) {
        recipeStore.removeFromFavorites(recipeId);
      } else {
        recipeStore.addRecipeToFavorites(recipe.id);
      }
    },
    [isRecipeFavorite, recipe, recipeId, recipeStore],
  );

  const colorLike = isRecipeFavorite ? 'white' : 'none';

  return (
    <div className={s.root}>
      <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root__img}>
        <ImageWithFallback src={recipe.image} alt="Card Image" fallbackSrc="notImg.png" />
        {recipe.id > 0 && (
          <Button
            className={s.root__icon}
            onClick={handleFavoriteToggle}
            actionSlot={<LikeIcon width={19} height={19} color={colorLike} strokeWidth={2} stroke="white" />}
          />
        )}
      </motion.div>
      <div className={s.root__txts}>
        {mainDetails.map(
          ({ value, title }, index) =>
            value && (
              <motion.div
                {...animation}
                transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                key={title}
                className={s.root__detail}
              >
                <Text view="p-m">{title}</Text>
                <Text color="accent" weight="semiBold" view="p-m">
                  {value}
                </Text>
              </motion.div>
            ),
        )}
      </div>
    </div>
  );
});

export default RecipeInfo;
