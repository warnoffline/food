import React, { memo } from 'react';
import Icon, { IconProps } from '../Icon';

const CheckIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} strokeWidth={props.strokeWidth || 2}>
    <path
      d="M4 11.6129L9.87755 18L20 7"
      strokeWidth={props.strokeWidth || 2}
      fill="none"
    />
  </Icon>
);

export default memo(CheckIcon);
