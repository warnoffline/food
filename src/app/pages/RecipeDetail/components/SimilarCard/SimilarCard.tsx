import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Recipe } from '@/types/recipes';
import TimerIcon from '@/components/icons/TimerIcon';
import s from './SimilarCard.module.scss';
import Text from '@/components/Text';
import BackArrowIcon from '@/components/icons/BackArrowIcon';

interface FavoriteCardProps {
  recipe: Recipe;
}

const SimilarCard: React.FC<FavoriteCardProps> = observer(({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`} className={s.root}>
      <div>
        <Text view="title">{recipe.title}</Text>
        <div className={s.caption}>
          <TimerIcon fill="none" width={14} height={14} strokeWidth={1.5} />
          <Text weight="semiBold" color="accent">
            {recipe.readyInMinutes} minutes
          </Text>
        </div>
      </div>
      <div>
        <BackArrowIcon
          className={s.icon}
          cursor="pointer"
          fill="none"
          stroke="accent"
          strokeWidth={2}
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
});

export default SimilarCard;
