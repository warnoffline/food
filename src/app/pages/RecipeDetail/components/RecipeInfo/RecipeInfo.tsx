import { RecipeById } from '@/types/recipes';
import styles from './RecipeInfo.module.scss';
import Text from '@/components/Text';
import { mainInfoDetails } from './lib/mainInfoDetails';

const RecipeInfo: React.FC<{ recipe: RecipeById }> = ({ recipe }) => {
  const mainDetails = mainInfoDetails(recipe);
  return (
    <div className={styles['recipe-center-main_info']}>
      <div className={styles['recipe-center-main_info--img']}>
        <img src={recipe.image} alt="" />
      </div>
      <div className={styles['recipe-center-main_info--txts']}>
        {mainDetails.map(
          (detail, index) =>
            detail.value && (
              <div key={index} className={styles['recipe-center-main_info--detail']}>
                <Text view="p-16">{detail.title}</Text>
                <Text color="accent" weight="semiBold" view="p-16">
                  {detail.value}
                </Text>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default RecipeInfo;
