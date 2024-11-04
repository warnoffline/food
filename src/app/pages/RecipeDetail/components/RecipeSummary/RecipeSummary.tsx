import Text from '@/components/Text';
import s from './RecipeSummary.module.scss';
import React, { memo } from 'react';

type RecipeSummaryProps = {
  summary: string;
};

const RecipeSummary: React.FC<RecipeSummaryProps> = ({ summary }) => {
  return (
    <div className={s.root}>
      <Text isHtml tag="p">
        {summary}
      </Text>
    </div>
  );
};

export default memo(RecipeSummary);
