import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './Card.module.scss';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image?: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle?: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  image,
  captionSlot,
  title,
  subtitle,
  contentSlot,
  onClick,
  actionSlot,
}) => {
  return (
    <div className={classNames(styles.card, className)} onClick={onClick}>
      {image && (
        <div className={styles['card-image-wrapper']}>
          <img src={image} alt="Card Image" className={styles['card-image']} />
        </div>
      )}
      <div className={styles['card-content-wrapper']}>
        <div className={styles['card-content']}>
          {captionSlot && (
            <Text className={styles['card-caption']} weight="medium" color="secondary">
              {captionSlot}
            </Text>
          )}
          <Text className={styles['card-title']} maxLines={2} weight="medium">
            {title}
          </Text>
          <Text className={styles['card-subtitle']} color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>
        <div className={styles['card-footer']}>
          {contentSlot && (
            <Text weight="bold" className={styles['card-content-slot']}>
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className={styles['card-action']}>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
