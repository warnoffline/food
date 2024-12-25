import DetailTabHeader from '@/components/DetailTabHeader/DetailTabHeader';
import React from 'react';
import s from './RecipeDetail.module.scss';
import { IngredientList, RecipeSummary, RecipeInfo, EquipmentList, DirectionsList } from './components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import SimilarList from './components/SimilarList/SimilarList';
import { RecipeStoreProvider, useRecipeDetailStore } from './useRecipeDetailStore';
import { withProvider } from '@/hoc/withProvider';
import RenderMetaDetailContent from '@/hoc/RenderMetaDetailContent';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const RecipeDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { recipe, equipments, similarRecipes, initRecipeDetail, metaState } = useRecipeDetailStore();

  useEffect(() => {
    const recipeId = Number(id);
    if (recipeId) {
      initRecipeDetail(recipeId);
    }
  }, [id, initRecipeDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RenderMetaDetailContent meta={metaState.recipe}>
      {recipe && (
        <div className={s.root}>
          <div className={s.root__center}>
            <DetailTabHeader>{recipe.title}</DetailTabHeader>
            <RecipeInfo recipe={recipe} />
            {recipe.summary && <RecipeSummary summary={recipe.summary} />}
            <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }} className={s.root__list}>
              {recipe.extendedIngredients && <IngredientList ingredients={recipe.extendedIngredients} />}
              <div className={s.root__share}>
                <div className={s['root__share-circle']}></div>
                <div className={s['root__share-line']}></div>
              </div>
              {equipments?.equipment && <EquipmentList equipments={equipments} />}
            </motion.div>
            <div>
              {recipe.analyzedInstructions && <DirectionsList analyzedInstructions={recipe.analyzedInstructions} />}
            </div>
            {similarRecipes.length > 0 && <SimilarList recipes={similarRecipes} />}
          </div>
        </div>
      )}
    </RenderMetaDetailContent>
  );
});

const RecipeWithProvider = withProvider(RecipeStoreProvider, RecipeDetail);

export default RecipeWithProvider;
