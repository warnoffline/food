import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Product } from '@/types/product';

type IngredientCardProps = {
  product: Product;
};

const ProductCard: React.FC<IngredientCardProps> = observer(({ product }) => {
  const Image = useMemo(() => product.image || undefined, [product.image]);

  return (
    <Link to={`/products/${product.id}`}>
      <Card captionSlot={product.aisle} title={product.title} subtitle={product.ingredientList} image={Image} />
    </Link>
  );
});

export default ProductCard;
