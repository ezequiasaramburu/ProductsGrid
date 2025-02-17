import { createContext, useContext } from 'react';

export interface Item {
  id: string;
  name: string;
  price: number;
}

interface OrderContextType {
  items: Item[];
  subtotal: number;
  addItem: (item: Item) => void;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export default OrderContext;
