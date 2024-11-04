import React, { memo } from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './Card.module.scss';

export type CardProps = {
  className?: string;
  image?: string;
  captionSlot?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  contentSlot?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
        <div className={styles['card__image-wrapper']}>
          <img src={image} alt="Card Image" className={styles.card__image} />
        </div>
      )}
      <div className={styles['card__content-wrapper']}>
        <div className={styles.card__content}>
          {captionSlot && (
            <Text className={styles.card__caption} weight="medium" color="secondary">
              {captionSlot}
            </Text>
          )}
          <Text className={styles.card__title} maxLines={2} weight="medium">
            {title}
          </Text>
          <Text className={styles.card__subtitle} color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>
        <div className={styles.card__footer}>
          {contentSlot && (
            <Text weight="bold" className={styles['card__content-slot']}>
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className={styles.card__action}>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
