import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../icons/BackArrowIcon';
import s from './DetailTabHeader.module.scss';
import Text from '../Text';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

type DetailTabHeaderProps = {
  children: React.ReactNode;
};

const DetailTabHeader: React.FC<DetailTabHeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <button onClick={() => navigate(-1)}>
        <BackArrowIcon cursor="pointer" fill="none" stroke="accent" strokeWidth={2} width={32} height={32} />
      </button>
      <Text view="p-xxl" weight="bold">
        {children}
      </Text>
    </motion.div>
  );
};

export default memo(DetailTabHeader);
