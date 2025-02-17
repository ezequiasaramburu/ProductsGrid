import Header from '../components/header/Header';
import ProductList from '../components/list/ProductList';
import { OrderProvider } from '../context/OrderProvider';

const HomePage: React.FC = () => {
  return (
    <OrderProvider>
      <>
        <Header />
        <div>
          <ProductList />
        </div>
      </>
    </OrderProvider>
  );
};

export default HomePage;
