import React, { memo } from 'react';
import Icon, { IconProps } from '../Icon';

const ArrowDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.33545 8.74741L3.66418 7.25259L11.9998 14.662L20.3354 7.25259L21.6642 8.74741L11.9998 17.338L2.33545 8.74741Z"
    />
  </Icon>
);

export default memo(ArrowDownIcon);
