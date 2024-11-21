import React, { memo } from 'react';
import cn from 'classnames';
import Text from '../Text';
import s from './Card.module.scss';
import ImageWithFallback from '@/hoc/ImageWithFallback';

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
    <div className={cn(s.root, className)} onClick={onClick}>
      {image && (
        <div className={s['root__image-wrapper']}>
          <ImageWithFallback src={image} alt="Card Image" fallbackSrc="notImg.png" className={s.root__image} />
        </div>
      )}
      <div className={s['root__content-wrapper']}>
        <div className={s.root__content}>
          {captionSlot && (
            <Text className={s.root__caption} weight="medium" color="secondary">
              {captionSlot}
            </Text>
          )}
          <Text className={s.root__title} maxLines={2} weight="medium">
            {title}
          </Text>
          <Text className={s.root__subtitle} color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>
        <div className={s.root__footer}>
          {contentSlot && (
            <Text weight="bold" className={s['root__content-slot']}>
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className={s.root__action}>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
