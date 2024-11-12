import React from 'react';
import Text from '@/components/Text';
import s from './Recipes.module.scss';
import FilterRecipesWithProvider from './components/FilterRecipes/FilterRecipes';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';
import Loading from '@/components/Loading';
import { Meta } from '@/types/shared';
import { observer } from 'mobx-react-lite';
import { RecipesStoreProvider, useRecipesStore } from './useRecipesStore';
import { withProvider } from '@/hoc/withProvider';

const Recipes: React.FC = observer(() => {
  const { filtersStore, searchStore, setPage, recipes, queryString, page, getRecipes, totalResults, metaState } =
    useRecipesStore();

  const filters = filtersStore.filter || undefined;
  const search = searchStore.query;

  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getRecipes();
  }, [page, filters, queryString, search, getRecipes]);

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
        <FilterRecipesWithProvider />
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

const RecipesWithProvider = withProvider(RecipesStoreProvider, Recipes);

export default RecipesWithProvider;
