import { observer } from 'mobx-react-lite';
import React from 'react';
import RecipeStore from '@/stores/RecipeStore';
import FavoriteCard from './components/FavoriteCard';
import styles from './Favorites.module.scss';
import Text from '@/components/Text';

const Favorites: React.FC = observer(() => {
  const favorites = RecipeStore.favorites;

  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__center}>
        <Text view="p-xxl" weight="semiBold">
          Favorite recipes
        </Text>
        <div className={styles.favorites__list}>
          {favorites.map((recipe) => (
            <React.Fragment>
              <FavoriteCard recipe={recipe} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Favorites;
