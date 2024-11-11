import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Ingredient } from '@/types/ingredient';

type IngredientCardProps = {
  ingredient: Ingredient;
};

const IngredientCard: React.FC<IngredientCardProps> = observer(({ ingredient }) => {
  const Image = `https://img.spoonacular.com/ingredients_500x500/${ingredient.image}`;

  return (
    <Link to={`/ingredients/${ingredient.id}`}>
      <Card captionSlot={ingredient.aisle} title={ingredient.name} image={Image} />
    </Link>
  );
});

export default IngredientCard;
