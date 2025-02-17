import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { useOrder } from '../context/OrderContext';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { addItem } = useOrder();

  const handleAddToOrder = (
    productId: string,
    name: string,
    price: number,
    quantity: number = 1
  ) => {
    const item = {
      id: productId,
      name: name,
      price: price * quantity,
    };
    addItem(item);
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <ProductGrid>
      {data.products.items.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToOrder={handleAddToOrder}
        />
      ))}
    </ProductGrid>
  );
};

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

export default ProductList;
