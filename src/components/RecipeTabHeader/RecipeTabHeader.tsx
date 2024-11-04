import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../icons/BackArrowIcon';
import styles from './RecipeTabHeader.module.scss';
import Text from '../Text';

type RecipeTabHeaderProps = {
  children: React.ReactNode;
};

const RecipeTabHeader: React.FC<RecipeTabHeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles['recipe-tab-header']}>
      <BackArrowIcon
        cursor="pointer"
        fill="none"
        stroke="accent"
        strokeWidth={2}
        width={32}
        height={32}
        onClick={() => navigate(-1)}
      />
      <Text view="p-xxl" weight="bold">
        {children}
      </Text>
    </div>
  );
};

export default memo(RecipeTabHeader);
