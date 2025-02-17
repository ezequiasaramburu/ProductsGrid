import { Header } from './components/Header';
import { OrderProvider } from './context/OrderProvider';
import ProductList from './components/ProductList';

function App() {
  return (
    <OrderProvider>
      <>
        <Header></Header>
        <div>
          <ProductList />
        </div>
      </>
    </OrderProvider>
  );
}

export default App;
