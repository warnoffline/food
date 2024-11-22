import Card from '@/components/Card';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Wine } from '@/types/wines';

type WineCardProps = {
  wine: Wine;
};

const WineCard: React.FC<WineCardProps> = observer(({ wine }) => {
  const Image = useMemo(() => wine.imageUrl || undefined, [wine.imageUrl]);

  return (
    <a href={wine.link} target="_blank" rel="noopener noreferrer">
      <Card title={wine.title} subtitle={wine.description} image={Image} contentSlot={wine.price} />
    </a>
  );
});

export default WineCard;
