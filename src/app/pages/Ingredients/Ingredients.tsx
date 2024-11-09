import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import s from './Ingredients.module.scss';
import Pagination from '@/components/Pagination';
import IngredientCard from './components/IngredientCard';
import SearchIngredient from './components/SearchIngredient';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/types/shared';
import Loading from '@/components/Loading';
import IngredientStore from '@/stores/IngredientStore';

const Ingredients: React.FC = observer(() => {
  const ingredients = IngredientStore.ingredients;
  const currentPageFromSession = Number(sessionStorage.getItem('ingredient-current-page')) || 1;
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromSession);
  const [query, setQuery] = useState<string>(sessionStorage.getItem('ingredient-query') || '');
  const resultsPerPage = 12;

  const totalPages = Math.ceil(IngredientStore.totalResults / resultsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('ingredient-current-page', page.toString());
  }, []);

  const handleQuerySubmit = useCallback(
    (query: string) => {
      setQuery(query);
      sessionStorage.setItem('ingredient-query', query);
      handlePageChange(1);
    },
    [handlePageChange],
  );

  useEffect(() => {
    if (query) {
      IngredientStore.getIngredients({
        query: query,
        offset: (currentPage - 1) * resultsPerPage,
        number: resultsPerPage,
        metaInformation: true,
      });
    }
  }, [currentPage, query]);

  const renderMetaContent = () => {
    switch (IngredientStore.metaState.ingredients) {
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
          <SearchIngredient handleQuerySubmit={handleQuerySubmit} />
        </div>
        {renderMetaContent()}
        {totalPages > 1 && (
          <div className={s.root__pagination}>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
});

export default Ingredients;
