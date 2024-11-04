import { AnalyzedInstructions } from '@/types/recipes';
import Text from '@/components/Text';
import styles from './DirectionsList.module.scss';
import React, { memo } from 'react';

type DirectionsListProps = {
  analyzedInstructions: AnalyzedInstructions[];
};

const DirectionsList: React.FC<DirectionsListProps> = ({ analyzedInstructions }) => {
  return (
    <div className={styles.directions}>
      <Text view="p-xl" weight="semiBold">
        Direction
      </Text>
      <div className={styles.directions__list}>
        {analyzedInstructions.map((instruction) => (
          <div key={instruction.name} className={styles.directions__item}>
            {instruction.name && <Text>{instruction.name}</Text>}
            <div className={styles.directions__steps}>
              {instruction.steps.map(({ number, step }) => (
                <div className={styles.directions__step}>
                  <Text view="p-m" weight="semiBold">
                    Step {number}
                  </Text>
                  <Text view="p-s">{step}</Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DirectionsList);
