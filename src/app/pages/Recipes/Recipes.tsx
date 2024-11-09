import React, { useCallback, useState } from 'react';
import Text from '@/components/Text';
import s from './Recipes.module.scss';
import FilterRecipes from './components/FilterRecipes/FilterRecipes';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';
import { FilterData } from '@/types/recipes';
import Loading from '@/components/Loading';
import { Meta } from '@/types/shared';
import { observer } from 'mobx-react-lite';
import RecipeStore from '@/stores/RecipeStore';

const Recipes: React.FC = observer(() => {
  const { recipes, getRecipes, metaState, totalResults } = RecipeStore;
  const currentPageFromSession = Number(sessionStorage.getItem('recipe-current-page')) || 1;
  const resultsPerPage = 12;
  const [filters, setFilters] = useState<FilterData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromSession);
  const [query, setQuery] = useState<string>(sessionStorage.getItem('recipe-query') || '');

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('recipe-current-page', page.toString());
  }, []);

  const handleFilterSubmit = useCallback(
    (filters: FilterData) => {
      setFilters(filters);
      handlePageChange(1);
    },
    [handlePageChange],
  );

  const handleQuerySubmit = useCallback(
    (query: string) => {
      setQuery(query);
      sessionStorage.setItem('recipe-query', query);
      handlePageChange(1);
    },
    [handlePageChange],
  );

  useEffect(() => {
    const savedFilters = localStorage.getItem('recipeFilters');
    if (savedFilters) {
      const filter = JSON.parse(savedFilters);
      setFilters(filter);
    }
  }, []);

  useEffect(() => {
    getRecipes({
      query: query || undefined,
      offset: (currentPage - 1) * resultsPerPage,
      number: resultsPerPage,
      diet: filters?.diet?.map(({ value }) => value).join() || undefined,
      cuisine: filters?.cuisine?.map(({ value }) => value).join() || undefined,
      intolerances: filters?.intolerances?.map(({ value }) => value).join() || undefined,
      type: filters?.type?.map(({ value }) => value).join() || undefined,
      includeIngredients: filters?.includeIngredients || undefined,
      excludeIngredients: filters?.excludeIngredients || undefined,
      addRecipeNutrition: true,
      addRecipeInformation: true,
    });
  }, [currentPage, filters, getRecipes, query]);

  const renderMetaContent = () => {
    switch (metaState.recipes) {
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
        <FilterRecipes handleQuerySubmit={handleQuerySubmit} onFilterSubmit={handleFilterSubmit} />
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
