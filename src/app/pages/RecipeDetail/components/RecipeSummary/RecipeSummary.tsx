import Text from '@/components/Text';
import styles from './RecipeSummary.module.scss';
import React, { memo } from 'react';

type RecipeSummaryProps = {
  summary: string;
};

const RecipeSummary: React.FC<RecipeSummaryProps> = ({ summary }) => {
  return (
    <div className={styles.summary}>
      <Text isHtml tag="p">
        {summary}
      </Text>
    </div>
  );
};

export default memo(RecipeSummary);
