import * as React from "react";
import styles from "./Icon.module.scss";

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: "primary" | "secondary" | "accent" | "white" | "disabled" | '';
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
  const colorClass = color ? styles[`icon-${color}`] : "";
  const strokeColor = props.stroke ? styles[`icon-stroke-${props.stroke}`] : "";

  return (
    <svg
      width={width}
      height={height}
      className={`${className || ""} ${colorClass} ${strokeColor}`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
