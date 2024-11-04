import { observer } from 'mobx-react-lite';
import React from 'react';
import RecipeStore from '@/stores/RecipeStore';
import FavoriteCard from './components/FavoriteCard';
import s from './Favorites.module.scss';
import Text from '@/components/Text';

const Favorites: React.FC = observer(() => {
  const favorites = RecipeStore.favorites;

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl" weight="semiBold">
          Favorite recipes
        </Text>
        <div className={s.root__list}>
          {favorites.map((recipe) => (
            <FavoriteCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Favorites;
