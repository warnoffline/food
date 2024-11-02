import React, { useState } from 'react';
import Text from '@/components/Text';
import styles from './Recipes.module.scss';
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('recipe-current-page', page.toString());
  };

  useEffect(() => {
    RecipeStore.loadRecipes(currentPage, resultsPerPage);
  }, [currentPage]);

  const recipes = RecipeStore.recipes;
  return (
    <div className={styles['recipes-root']}>
      <div className={styles['recipes-banner']}>
        <img src="/banner.png" alt="banner" />
      </div>
      <div className={styles['recipes-center']}>
        <div className={styles['recipes-center--quote']}>
          <Text>
            Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.
          </Text>
        </div>
        <FilterRecipes />
        <div className={styles['recipes-center-items']}>
          {recipes.map((recipe) => (
            <React.Fragment key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </React.Fragment>
          ))}
        </div>
        {totalPages > 1 && (
          <div className={styles['recipes-center-footer']}>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
});

export default Recipes;
