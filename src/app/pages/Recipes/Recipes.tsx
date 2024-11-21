import React from 'react';
import Text from '@/components/Text';
import s from './Recipes.module.scss';
import FilterRecipes from './components/FilterRecipes/FilterRecipes';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RecipesStoreProvider, useRecipesStore } from './useRecipesStore';
import { withProvider } from '@/hoc/withProvider';
import RenderMetaContent from '@/hoc/RenderMetaContent';

const Recipes: React.FC = observer(() => {
  const { filtersStore, searchStore, setPage, recipes, queryString, page, getRecipes, totalResults, metaState } =
    useRecipesStore();

  const filters = filtersStore.filter || undefined;
  const search = searchStore.query;

  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getRecipes();
  }, [page, filters, queryString, search, getRecipes, setPage]);

  const recipe = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

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
        <RenderMetaContent meta={metaState.recipes} items={recipes}>
          {recipe}
        </RenderMetaContent>
        {totalPages > 1 && recipes.length > 0 && (
          <div className={s.root__pagination}>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>
    </div>
  );
});

const RecipesWithProvider = withProvider(RecipesStoreProvider, Recipes);

export default RecipesWithProvider;
