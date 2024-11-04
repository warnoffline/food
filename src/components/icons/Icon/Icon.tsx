import * as React from 'react';
import s from './Icon.module.scss';
import cn from 'classnames';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'disabled' | '';
  width?: number;
  height?: number;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  color,
  width = 24,
  height = 24,
  className,
  ...props
}) => {
  const colorClass = color ? s[`icon-${color}`] : '';
  const strokeColor = props.stroke ? s[`icon-stroke-${props.stroke}`] : '';
  const classNames = cn(className || '', colorClass, strokeColor);

  return (
    <svg
      width={width}
      height={height}
      className={classNames}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
