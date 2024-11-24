import { useEffect } from 'react';
import React from 'react';
import s from './Ingredients.module.scss';
import Pagination from '@/components/Pagination';
import IngredientCard from './components/IngredientCard';
import SearchIngredient from './components/SearchIngredient';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { IngredientsStoreProvider, useIngredientsStore } from './useIngredientsStore';
import { withProvider } from '@/hoc/withProvider';
import RenderMetaContent from '@/hoc/RenderMetaContent';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const Ingredients: React.FC = observer(() => {
  const { ingredients, queryString, page, setPage, getIngredients, metaState, totalResults, searchStore } =
    useIngredientsStore();
  const search = searchStore.query;
  const resultsPerPage = 12;

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    getIngredients();
  }, [page, search, queryString, getIngredients]);

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Ingredients</Text>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <SearchIngredient />
        </motion.div>
        {totalPages > 1 && ingredients.length > 0 && (
          <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }} className={s.root__pagination}>
            <div className={s.root__pagination__center}>
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </motion.div>
        )}
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <RenderMetaContent meta={metaState.ingredients} items={ingredients}>
            {ingredients.map((ingredient, index) => (
              <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}>
                <IngredientCard key={ingredient.id} ingredient={ingredient} />
              </motion.div>
            ))}
          </RenderMetaContent>
        </motion.div>
      </div>
    </motion.div>
  );
});

const IngredientsWithProvider = withProvider(IngredientsStoreProvider, Ingredients);

export default IngredientsWithProvider;
