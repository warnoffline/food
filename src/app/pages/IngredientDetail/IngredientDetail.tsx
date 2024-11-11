import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './IngredientDetail.module.scss';
import Loading from '@/components/Loading';
import IngredientInfo from './components/IngredientInfo';
import { IngredientStoreProvider, useIngredientStore } from './useIngredientStore';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();
  const ingredientStore = useIngredientStore();

  useEffect(() => {
    const recipeId = Number(id);
    ingredientStore.getIngredient(recipeId);
  }, [id, ingredientStore]);

  if (!ingredientStore.ingredient) {
    return <Loading page />;
  }

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <DetailTabHeader>{ingredientStore.ingredient.original}</DetailTabHeader>
        <IngredientInfo ingredient={ingredientStore.ingredient} />
      </div>
    </div>
  );
});

const IngredientWithProvider: React.FC = () => {
  return (
    <IngredientStoreProvider>
      <IngredientDetail />
    </IngredientStoreProvider>
  );
};

export default IngredientWithProvider;
