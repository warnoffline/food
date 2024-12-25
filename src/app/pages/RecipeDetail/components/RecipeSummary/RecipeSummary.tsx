import Text from '@/components/Text';
import s from './RecipeSummary.module.scss';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

type RecipeSummaryProps = {
  summary: string;
};

const RecipeSummary: React.FC<RecipeSummaryProps> = ({ summary }) => {
  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }} className={s.root}>
      <Text isHtml tag="p">
        {summary}
      </Text>
    </motion.div>
  );
};

export default memo(RecipeSummary);
