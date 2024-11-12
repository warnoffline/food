import { useEffect } from 'react';
import React from 'react';
import s from './Ingredients.module.scss';
import Pagination from '@/components/Pagination';
import IngredientCard from './components/IngredientCard';
import SearchIngredient from './components/SearchIngredient';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/types/shared';
import Loading from '@/components/Loading';
import { IngredientsStoreProvider, useIngredientsStore } from './useIngredientsStore';
import { withProvider } from '@/hoc/withProvider';

const Ingredients: React.FC = observer(() => {
  const { ingredients, queryString, page, setPage, getIngredients, metaState, totalResults, searchStore } =
    useIngredientsStore();
  const search = searchStore.query;
  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getIngredients();
  }, [page, search, queryString, getIngredients]);

  const renderMetaContent = () => {
    switch (metaState.ingredients) {
      case Meta.loading:
        return <Loading />;
      case Meta.error:
        return (
          <div className={s['root__no-items']}>
            <Text view="title">Oops, something went wrong!</Text>;
          </div>
        );
      case Meta.success:
        return ingredients.length > 0 ? (
          <div className={s.root__items}>
            {ingredients.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
        ) : (
          <div className={s['root__no-items']}>
            <Text view="title">No results</Text>
          </div>
        );
      default:
        return (
          <div className={s['root__no-items']}>
            <Text view="title">No results</Text>
          </div>
        );
    }
  };

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Ingredients</Text>
        <div>
          <SearchIngredient />
        </div>
        {renderMetaContent()}
        {totalPages > 1 && (
          <div className={s.root__pagination}>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>
    </div>
  );
});

const IngredientsWithProvider = withProvider(IngredientsStoreProvider, Ingredients);

export default IngredientsWithProvider;
