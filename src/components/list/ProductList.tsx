import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { useOrder } from '../../context/OrderContext';
import ProductCard from '../card/ProductCard';
import { ProductGrid } from './ProductList.styles';
import LoadingErrorState from '../loading/LoadingErrorState';

const ProductList: React.FC = () => {
  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_PRODUCTS);
  const { addItem } = useOrder();
  const [addOrderItem, { loading: mutationLoading }] =
    useMutation(ADD_ITEM_TO_ORDER);

  const handleAddToOrder = async (
    productId: string,
    name: string,
    price: number,
    quantity: number = 1
  ) => {
    try {
      await addOrderItem({
        variables: {
          productVariantId: productId,
          quantity: quantity,
        },
      });
      const item = {
        id: productId,
        name: name,
        price: price * quantity,
      };
      addItem(item);
    } catch (err) {
      console.error('Error adding item to order:', err);
    }
  };

  if (queryLoading) return <LoadingErrorState message="Loading products..." />;
  if (queryError) return <LoadingErrorState message="Error loading products" />;
  if (mutationLoading)
    return <LoadingErrorState message="Adding item to order..." />;

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
