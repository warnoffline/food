import DetailTabHeader from '@/components/DetailTabHeader/DetailTabHeader';
import React from 'react';
import s from './RecipeDetail.module.scss';
import { IngredientList, RecipeSummary, RecipeInfo, EquipmentList, DirectionsList } from './components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import SimilarList from './components/SimilarList/SimilarList';
import Loading from '@/components/Loading';
import { RecipeStoreProvider, useRecipeDetailStore } from './useRecipeDetailStore';
import { withProvider } from '@/hoc/withProvider';

const RecipeDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { recipe, equipments, similarRecipes, initRecipeDetail } = useRecipeDetailStore();

  useEffect(() => {
    const recipeId = Number(id);
    if (recipeId && recipeId !== -1) {
      initRecipeDetail(recipeId);
    }
  }, [id, initRecipeDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <Loading page />;
  }

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <DetailTabHeader>{recipe.title}</DetailTabHeader>
        <RecipeInfo recipe={recipe} />
        {recipe.summary && <RecipeSummary summary={recipe.summary} />}
        <div className={s.root__list}>
          {recipe.extendedIngredients && <IngredientList ingredients={recipe.extendedIngredients} />}
          <div className={s.root__share}>
            <div className={s['root__share-circle']}></div>
            <div className={s['root__share-line']}></div>
          </div>
          {equipments?.equipment && <EquipmentList equipments={equipments} />}
        </div>
        <div>
          {recipe.analyzedInstructions && <DirectionsList analyzedInstructions={recipe.analyzedInstructions} />}
        </div>
        {similarRecipes.length > 0 && <SimilarList recipes={similarRecipes} />}
      </div>
    </div>
  );
});

const RecipeWithProvider = withProvider(RecipeStoreProvider, RecipeDetail);

export default RecipeWithProvider;
