import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Recipe } from '@/types/recipes';
import TimerIcon from '@/components/icons/TimerIcon';
import s from './SimilarCard.module.scss';
import { memo } from 'react';

interface FavoriteCardProps {
  recipe: Recipe;
}

const SimilarCard: React.FC<FavoriteCardProps> = observer(({ recipe }) => {
  const CaptionSlot: React.ReactNode = (
    <span className={s.caption}>
      <TimerIcon fill="none" width={14} height={14} strokeWidth={1.5} />
      <span>{recipe.readyInMinutes} minutes</span>
    </span>
  );

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card captionSlot={CaptionSlot} title={recipe.title} image={recipe.image} />
    </Link>
  );
});

export default memo(SimilarCard);
