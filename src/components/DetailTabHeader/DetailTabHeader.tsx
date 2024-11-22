import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../icons/BackArrowIcon';
import s from './DetailTabHeader.module.scss';
import Text from '../Text';

type DetailTabHeaderProps = {
  children: React.ReactNode;
};

const DetailTabHeader: React.FC<DetailTabHeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
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

export default memo(DetailTabHeader);