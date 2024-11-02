import Button from '@/components/Button';
import Card from '../../../../../components/Card';
import { Recipe } from '../../../../../types/recipes';
import { Link } from 'react-router-dom';
import RecipeStore from '@/stores/RecipeStore';
import { observer } from 'mobx-react-lite';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = observer(({ recipe }) => {
  const isFavorite = RecipeStore.isFavorite(recipe.id);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (isFavorite) {
      RecipeStore.removeFromFavorites(recipe.id);
    } else {
      RecipeStore.addRecipeToFavorites(recipe);
    }
  };
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card
        title={recipe.title}
        image={recipe.image}
        actionSlot={<Button onClick={handleClick}>{isFavorite ? 'Saved' : 'Save'}</Button>}
      ></Card>
    </Link>
  );
});

export default RecipeCard;
