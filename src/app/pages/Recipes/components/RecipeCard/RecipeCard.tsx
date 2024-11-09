import Button from '@/components/Button';
import Card from '@/components/Card';
import { Recipe } from '@/types/recipes';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import React, { memo, useCallback } from 'react';
import TimerIcon from '@/components/icons/TimerIcon';
import s from './RecipeCard.module.scss';
import Text from '@/components/Text';
import RecipeStore from '@/stores/RecipeStore';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = observer(({ recipe }) => {
  const isFavorite = RecipeStore.isFavorite(recipe.id);

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

  const CaptionSlot: React.ReactNode = (
    <span className={s.caption}>
      <TimerIcon fill="none" width={14} height={14} strokeWidth={1.5} />
      <span>{recipe.readyInMinutes} minutes</span>
    </span>
  );

  const ActionSlot = <Button onClick={handleFavoriteToggle}>{isFavorite ? 'Saved' : 'Save'}</Button>;

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card
        captionSlot={CaptionSlot}
        title={recipe.title}
        image={recipe.image}
        subtitle={
          <Text tag="span" isHtml>
            {recipe.summary}
          </Text>
        }
        contentSlot={
          recipe.nutrition?.nutrients[0]
            ? `${recipe.nutrition.nutrients[0].amount} ${recipe.nutrition.nutrients[0].unit}`
            : 'No nutrition data'
        }
        actionSlot={ActionSlot}
      />
    </Link>
  );
});

export default memo(RecipeCard);
