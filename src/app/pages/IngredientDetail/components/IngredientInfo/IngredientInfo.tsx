import s from './IngredientInfo.module.scss';
import Text from '@/components/Text';
import { observer } from 'mobx-react-lite';
import { Ingredient } from '@/types/ingredient';
import { useMemo } from 'react';

type IngredientInfoProps = {
  ingredient: Ingredient;
};

const IngredientInfo: React.FC<IngredientInfoProps> = observer(({ ingredient }) => {
  const Image = useMemo(
    () => `https://img.spoonacular.com/ingredients_500x500/${ingredient.image}`,
    [ingredient.image],
  );

  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src={Image} alt="" />
      </div>
      <div className={s.root__category}>
        <Text view="title">{ingredient.aisle}</Text>
        {ingredient.categoryPath?.map((categorty) => <Text>{categorty}</Text>)}
      </div>
      <div className={s.root__txts}>
        {ingredient.nutrition &&
          ingredient.nutrition.nutrients.map(
            (item) =>
              item && (
                <div key={item.name} className={s.root__detail}>
                  <Text view="p-m">{item.name}</Text>
                  <Text color="accent" weight="semiBold" view="p-m">
                    {item.amount}
                    {''}
                    {item.unit}
                  </Text>
                </div>
              ),
          )}
      </div>
    </div>
  );
});

export default IngredientInfo;