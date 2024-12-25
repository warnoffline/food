import React, { memo } from 'react';
import Icon, { IconProps } from '../Icon';

const BurgerIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} strokeWidth={props.strokeWidth || 2}>
    <path d="M4 18L20 18" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M4 12L20 12" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M4 6L20 6" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </Icon>
);

export default memo(BurgerIcon);
