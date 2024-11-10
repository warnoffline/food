import React, { useCallback, useState } from 'react';
import Text from '@/components/Text';
import s from './Recipes.module.scss';
import FilterRecipes from './components/FilterRecipes/FilterRecipes';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';
import Loading from '@/components/Loading';
import { Meta } from '@/types/shared';
import { observer } from 'mobx-react-lite';
import RecipeStore from '@/stores/RecipeStore';
import FilterStore from '@/stores/RecipeStore/FilterStore/FilterStore';
import SearchStore from '@/stores/RecipeStore/SearchRecipeStore/SearchRecipeStore';

const Recipes: React.FC = observer(() => {
  const recipeStore = RecipeStore;
  const filters = FilterStore.filter;
  const search = SearchStore.query;
  const recipes = recipeStore.recipes;
  const queryString = recipeStore.queryString;
  const currentPageFromSession = Number(sessionStorage.getItem('recipe-current-page')) || 1;
  const resultsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromSession);

  const totalPages = Math.ceil(recipeStore.totalResults / resultsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('recipe-current-page', page.toString());
  }, []);

  useEffect(() => {
    recipeStore.getRecipes(currentPage);
  }, [currentPage, recipeStore, filters, search, queryString]);

  const renderMetaContent = () => {
    switch (RecipeStore.metaState.recipes) {
      case Meta.loading:
        return <Loading />;
      case Meta.error:
        return <Text view="title">Oops, something went wrong!</Text>;
      case Meta.success:
        return recipes.length > 0 ? (
          <div className={s.root__items}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <Text view="title">No recipes found.</Text>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s.root}>
      <div className={s.root__banner}>
        <img src="/banner.png" alt="banner" />
      </div>
      <div className={s.root__content}>
        <div className={s.root__quote}>
          <Text>
            Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.
          </Text>
        </div>
        <FilterRecipes />
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

export default Recipes;
