import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import DetailTabHeader from '@/components/DetailTabHeader';
import s from './IngredientDetail.module.scss';
import IngredientInfo from './components/IngredientInfo';
import { IngredientStoreProvider, useIngredientDetailStore } from './useIngredientDetailStore';
import { withProvider } from '@/hoc/withProvider';
import RenderMetaDetailContent from '@/hoc/RenderMetaDetailContent';

const IngredientDetail: React.FC = observer(() => {
  const { id } = useParams();
  const { ingredient, getIngredient, metaState } = useIngredientDetailStore();

  useEffect(() => {
    getIngredient(Number(id));
  }, [getIngredient, id]);

  return (
    <RenderMetaDetailContent meta={metaState.ingredient}>
      {ingredient && (
        <div className={s.root}>
          <div className={s.root__center}>
            <DetailTabHeader>{ingredient.original}</DetailTabHeader>
            <IngredientInfo ingredient={ingredient} />
          </div>
        </div>
      )}
    </RenderMetaDetailContent>
  );
});

const IngredientWithProvider = withProvider(IngredientStoreProvider, IngredientDetail);

export default IngredientWithProvider;
