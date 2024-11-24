import { AnalyzedInstructions } from '@/types/recipes';
import Text from '@/components/Text';
import s from './DirectionsList.module.scss';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

type DirectionsListProps = {
  analyzedInstructions: AnalyzedInstructions[];
};

const DirectionsList: React.FC<DirectionsListProps> = ({ analyzedInstructions }) => {
  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }} className={s.root}>
      <Text view="p-xl" weight="semiBold">
        Direction
      </Text>
      <div className={s.root__list}>
        {analyzedInstructions.map(({ name, steps }, index) => (
          <motion.div
            {...animation}
            transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
            key={name}
            className={s.root__item}
          >
            <Text>{name}</Text>
            <div className={s.root__steps}>
              {steps.map(({ number, step }, index) => (
                <motion.div
                  key={number + step}
                  {...animation}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                  className={s.root__step}
                >
                  <Text view="p-m" weight="semiBold">
                    Step {number}
                  </Text>
                  <Text view="p-s">{step}</Text>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(DirectionsList);
