import { observer } from 'mobx-react-lite';
import React from 'react';
import FavoriteCard from './components/FavoriteCard';
import s from './Favorites.module.scss';
import Text from '@/components/Text';
import { FavoritesStoreProvider, useFavoritesStore } from './useFavoritesStore';
import { withProvider } from '@/hoc/withProvider';

const Favorites: React.FC = observer(() => {
  const favoriteStore = useFavoritesStore();
  const favorites = favoriteStore.favorites;

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl" weight="semiBold">
          Favorite recipes
        </Text>
        <div className={s.root__list}>
          {favorites &&
            favorites.length > 0 &&
            favorites.map((recipe) => <FavoriteCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
});

const FavoritesWithProvider = withProvider(FavoritesStoreProvider, Favorites);

export default FavoritesWithProvider;
