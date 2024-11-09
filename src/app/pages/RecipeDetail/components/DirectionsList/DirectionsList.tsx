import { AnalyzedInstructions } from '@/types/recipes';
import Text from '@/components/Text';
import s from './DirectionsList.module.scss';
import React, { memo } from 'react';

type DirectionsListProps = {
  analyzedInstructions: AnalyzedInstructions[];
};

const DirectionsList: React.FC<DirectionsListProps> = ({ analyzedInstructions }) => {
  return (
    <div className={s.root}>
      <Text view="p-xl" weight="semiBold">
        Direction
      </Text>
      <div className={s.root__list}>
        {analyzedInstructions.map(({ name, steps }) => (
          <div key={name} className={s.root__item}>
            <Text>{name}</Text>
            <div className={s.root__steps}>
              {steps.map(({ number, step }) => (
                <div key={number + step} className={s.root__step}>
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
