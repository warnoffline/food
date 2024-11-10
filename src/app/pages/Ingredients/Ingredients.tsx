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
import SearchIngredientStore from '@/stores/IngredientStore/SearchIngredientStore/SearchIngredientStore';

const Ingredients: React.FC = observer(() => {
  const ingredientStore = IngredientStore;
  const search = SearchIngredientStore.query;
  const ingredients = ingredientStore.ingredients;
  const queryString = ingredientStore.queryString;
  const currentPageFromSession = Number(sessionStorage.getItem('ingredient-current-page')) || 1;
  const resultsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromSession);

  const totalPages = Math.ceil(ingredientStore.totalResults / resultsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('ingredient-current-page', page.toString());
  }, []);

  useEffect(() => {
    ingredientStore.getIngredients(currentPage);
  }, [currentPage, ingredientStore, search, queryString]);

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
          <SearchIngredient />
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
