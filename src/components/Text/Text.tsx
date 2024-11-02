import classNames from 'classnames';
import * as React from 'react';
import styles from './Text.module.scss';

export type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-44' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'semiBold' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
  isHtml?: boolean;
};

const Text: React.FC<TextProps> = ({ className, view, tag = 'p', weight, children, color, isHtml, maxLines }) => {
  const Tag = tag;
  const textClassName = classNames(styles.text, className, {
    [styles[`text-${color}`]]: color,
    [styles[`font-${weight}`]]: weight,
    [styles[`view-${view}`]]: view,
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

export default Text;
