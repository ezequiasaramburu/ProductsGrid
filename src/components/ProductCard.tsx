import React, { useState } from 'react';
import styled from 'styled-components';

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  min-height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; // Ensure the content fills the remaining space
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: auto; // This ensures the button stays at the bottom
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: red;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 16px;
`;

const QuantitySelector = styled.input`
  width: 50px;
  margin-top: 8px;
  padding: 5px;
  font-size: 1rem;
`;

export default ProductCard;
