import Text from '@/components/Text';
import DishIcon from '@/components/icons/DishIcon';
import styles from './IngredientList.module.scss';
import { Ingredient } from '@/types/recipes';

const IngredientList: React.FC<{ ingredients: Ingredient[] }> = ({ ingredients }) => {
  return (
    <div className={styles['recipe-center-list--ingredients']}>
      <Text view="p-20" weight="semiBold">
        Ingredients
      </Text>
      <div className={styles['ingredients']}>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className={styles['recipe-ingredient']}>
            <div>
              <DishIcon width={24} height={24} color="accent" />
            </div>
            <Text view="p-16">{ingredient.original}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
