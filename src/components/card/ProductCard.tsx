import React, { useState } from 'react';
import {
  Card,
  Image,
  Content,
  Price,
  Button,
  Title,
  Description,
  QuantitySelector,
} from './ProductCard.styles';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    variants: { price: number }[];
    assets: { source: string }[];
  };
  onAddToOrder: (
    productId: string,
    name: string,
    price: number,
    quantity: number
  ) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToOrder }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const productPrice =
    product.variants.length > 0
      ? Math.min(...product.variants.map((v) => v.price))
      : 0;
  const productImage =
    product.assets.length > 0
      ? product.assets[0].source
      : 'https://via.placeholder.com/150';

  return (
    <Card>
      <Image src={productImage} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>${productPrice}</Price>
        <QuantitySelector
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
        />
        <Button
          onClick={() =>
            onAddToOrder(product.id, product.name, productPrice, quantity)
          }
        >
          Add to Order
        </Button>
      </Content>
    </Card>
  );
};

export default ProductCard;
