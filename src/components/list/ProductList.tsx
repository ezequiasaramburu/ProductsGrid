import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries';
import { useOrder } from '../../context/OrderContext';
import ProductCard from '../card/ProductCard';
import { ProductGrid } from './ProductList.styles';
import LoadingErrorState from '../loading/LoadingErrorState';

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

  if (loading) return <LoadingErrorState message="Loading products..." />;
  if (error) return <LoadingErrorState message="Error loading products" />;

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

export default ProductList;
