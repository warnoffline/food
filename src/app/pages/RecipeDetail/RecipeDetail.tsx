import RecipeTabHeader from '@/components/RecipeTabHeader';
import React from 'react';
import styles from './RecipeDetail.module.scss';
import { IngredientList, RecipeSummary, RecipeInfo, EquipmentList, DirectionsList } from './components';
import RecipeStore from '@/stores/RecipeStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const RecipeDetail: React.FC = observer(() => {
  const { id } = useParams();
  const recipe = RecipeStore.recipe;
  const equipments = RecipeStore.equipments;

  useEffect(() => {
    const recipeId = Number(id);
    if (recipeId) {
      RecipeStore.loadRecipeById(recipeId);
      RecipeStore.loadEquipmentsById(recipeId);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.recipe}>
      <div className={styles.recipe__center}>
        <RecipeTabHeader>{recipe.title}</RecipeTabHeader>
        <RecipeInfo recipe={recipe} />
        <RecipeSummary summary={recipe.summary} />
        <div className={styles.recipe__list}>
          <IngredientList ingredients={recipe.extendedIngredients} />
          <div className={styles.recipe__share}>
            <div className={styles['recipe__share-circle']}></div>
            <div className={styles['recipe__share-line']}></div>
          </div>
          {equipments?.equipment && <EquipmentList equipments={equipments} />}
        </div>
        <div>
          <DirectionsList analyzedInstructions={recipe.analyzedInstructions} />
        </div>
      </div>
    </div>
  );
});

export default RecipeDetail;
