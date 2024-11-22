import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import FavoriteCard from './components/FavoriteCard';
import s from './Favorites.module.scss';
import Text from '@/components/Text';
import { FavoritesStoreProvider, useFavoritesStore } from './useFavoritesStore';
import { withProvider } from '@/hoc/withProvider';
import RenderMetaContent from '@/hoc/RenderMetaContent';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const Favorites: React.FC = observer(() => {
  const { favorites, getFavorites, metaState } = useFavoritesStore();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  const favorite = favorites.map((recipe, index) => (
    <motion.div {...animation} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <FavoriteCard key={recipe.id} recipe={recipe} />
    </motion.div>
  ));

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl" weight="semiBold">
          Favorite recipes
        </Text>
        <RenderMetaContent meta={metaState.favorites} items={favorites}>
          {favorite}
        </RenderMetaContent>
      </div>
    </motion.div>
  );
});

const FavoritesWithProvider = withProvider(FavoritesStoreProvider, Favorites);

export default FavoritesWithProvider;
