import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './IngredientDetail.module.scss';
import Loading from '@/components/Loading';
import IngredientInfo from './components/IngredientInfo';
import IngredientStore from '@/stores/IngredientStore';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    const recipeId = Number(id);
    IngredientStore.getIngredient(recipeId);
  }, [id]);

  if (!IngredientStore.ingredient) {
    return <Loading page />;
  }

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <DetailTabHeader>{IngredientStore.ingredient.original}</DetailTabHeader>
        <IngredientInfo ingredient={IngredientStore.ingredient} />
      </div>
    </div>
  );
});

export default IngredientDetail;
