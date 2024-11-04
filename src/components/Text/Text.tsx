import classNames from 'classnames';
import React, { memo } from 'react';
import styles from './Text.module.scss';

export type TextProps = {
  className?: string;
  view?: 'title' | 'button' | 'p-xxl' | 'p-xl' | 'p-l' | 'p-m' | 'p-l' | 'p-s' | 'p-xs' | 'p-xxs';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  weight?: 'normal' | 'medium' | 'semiBold' | 'bold';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent';
  maxLines?: number;
  isHtml?: boolean;
};

const Text: React.FC<TextProps> = ({ className, view, tag = 'p', weight, children, color, isHtml, maxLines }) => {
  const Tag = tag;
  const textClassName = classNames(styles.text, className, {
    [styles[`text--${color}`]]: color,
    [styles[`text--weight-${weight}`]]: weight,
    [styles[`text--view-${view}`]]: view,
  });

  const lineClampStyle: React.CSSProperties = maxLines
    ? {
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : {};

  return isHtml ? (
    <Tag className={textClassName} style={lineClampStyle} dangerouslySetInnerHTML={{ __html: children as string }} />
  ) : (
    <Tag className={textClassName} style={lineClampStyle}>
      {children}
    </Tag>
  );
};

export default memo(Text);
