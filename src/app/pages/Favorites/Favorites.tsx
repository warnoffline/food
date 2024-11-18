import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import FavoriteCard from './components/FavoriteCard';
import s from './Favorites.module.scss';
import Text from '@/components/Text';
import { FavoritesStoreProvider, useFavoritesStore } from './useFavoritesStore';
import { withProvider } from '@/hoc/withProvider';
import { Meta } from '@/types/shared';
import Loading from '@/components/Loading';

const Favorites: React.FC = observer(() => {
  const { favorites, getFavorites, metaState } = useFavoritesStore();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  const renderMetaContent = () => {
    switch (metaState.favorites) {
      case Meta.loading:
        return <Loading />;
      case Meta.error:
        return (
          <div className={s['root__no-items']}>
            <Text view="title">Oops, something went wrong!</Text>
          </div>
        );
      case Meta.success:
        return favorites.length > 0 ? (
          <div className={s.root__list}>
            {favorites.map((recipe) => (
              <FavoriteCard key={recipe.id} recipe={recipe} />
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
        <Text view="p-xxl" weight="semiBold">
          Favorite recipes
        </Text>
        {renderMetaContent()}
      </div>
    </div>
  );
});

const FavoritesWithProvider = withProvider(FavoritesStoreProvider, Favorites);

export default FavoritesWithProvider;
