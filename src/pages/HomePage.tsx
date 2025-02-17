import Header from '../components/header/Header';
import ProductList from '../components/list/ProductList';
import OrderProvider from '../context/OrderProvider';

const HomePage: React.FC = () => {
  return (
    <OrderProvider>
      <Header />
      <ProductList />
    </OrderProvider>
  );
};

export default HomePage;
