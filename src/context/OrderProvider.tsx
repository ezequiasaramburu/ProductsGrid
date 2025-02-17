import React, { ReactNode } from 'react';
import OrderContext from './OrderContext';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface Item {
  id: string;
  name: string;
  price: number;
}

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [items, setItems] = useStateWithStorage<Item[]>('order-items', []);
  const [subtotal, setSubtotal] = useStateWithStorage<number>(
    'order-subtotal',
    0
  );

  const addItem = (item: Item) => {
    setItems([...items, item]);
    setSubtotal(subtotal + item.price);
  };

  return (
    <OrderContext.Provider value={{ items, subtotal, addItem }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
