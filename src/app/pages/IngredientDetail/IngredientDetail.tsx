import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './IngredientDetail.module.scss';
import Loading from '@/components/Loading';
import IngredientInfo from './components/IngredientInfo';
import { IngredientStoreProvider, useIngredientStore } from './useIngredientStore';
import { withProvider } from '@/hoc/withProvider';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { ingredient, getIngredient } = useIngredientStore();

  useEffect(() => {
    getIngredient(Number(id));
  }, [getIngredient, id, ingredient]);

  if (!ingredient) {
    return <Loading page />;
  }

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <DetailTabHeader>{ingredient.original}</DetailTabHeader>
        <IngredientInfo ingredient={ingredient} />
      </div>
    </div>
  );
});

const IngredientWithProvider = withProvider(IngredientStoreProvider, IngredientDetail);

export default IngredientWithProvider;
