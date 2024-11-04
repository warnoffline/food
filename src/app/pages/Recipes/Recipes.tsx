import React, { useCallback, useState } from 'react';
import Text from '@/components/Text';
import s from './Recipes.module.scss';
import { observer } from 'mobx-react-lite';
import FilterRecipes from './components/FilterRecipes/FilterRecipes';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Pagination from '@/components/Pagination';
import RecipeStore from '@/stores/RecipeStore';
import { useEffect } from 'react';

const Recipes: React.FC = observer(() => {
  const currentPageFromSession = Number(sessionStorage.getItem('recipe-current-page')) || 1;
  const resultsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromSession);

  const totalPages = Math.ceil(RecipeStore.totalResults / resultsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('recipe-current-page', page.toString());
  }, []);

  useEffect(() => {
    RecipeStore.loadRecipes(currentPage, resultsPerPage);
  }, [currentPage]);

  const recipes = RecipeStore.recipes;

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
        <div className={s.root__items}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
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
