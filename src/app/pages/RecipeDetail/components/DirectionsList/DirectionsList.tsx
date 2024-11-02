import { AnalyzedInstructions } from '@/types/recipes';
import Text from '@/components/Text';
import styles from './DirectionsList.module.scss';
const DirectionsList: React.FC<{ analyzedInstructions: AnalyzedInstructions[] }> = ({ analyzedInstructions }) => {
  return (
    <div className={styles['directions']}>
      <Text view="p-20" weight="semiBold">
        Direction
      </Text>
      <div className={styles['directions-list']}>
        {analyzedInstructions.map((instruction) => (
          <div className={styles['directions-list-direction']}>
            {instruction.name && <Text>{instruction.name}</Text>}
            <div className={styles['directions-list-steps']}>
              {instruction.steps.map((direction) => (
                <div className={styles['directions-list-step']}>
                  <Text view="p-16" weight="semiBold">
                    Step {direction.number}
                  </Text>
                  <Text view="p-14">{direction.step}</Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionsList;
