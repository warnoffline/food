import React, { memo } from 'react';
import Icon, { IconProps } from '../Icon';

const LogInIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} strokeWidth={props.strokeWidth || 2}>
    <path
      d="M11 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H11M3 12H14M14 12L11 15M14 12L11 9"
      fill="none"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default memo(LogInIcon);
