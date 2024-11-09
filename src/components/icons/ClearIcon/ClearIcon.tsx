import React, { memo } from 'react';
import Icon, { IconProps } from '../Icon';

const DishIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </Icon>
);

export default memo(DishIcon);
