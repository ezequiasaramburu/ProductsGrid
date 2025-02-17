import HomePage from './pages/HomePage';
import OrderProvider from './context/OrderProvider';

function App() {
  return (
    <OrderProvider>
      <HomePage />
    </OrderProvider>
  );
}

export default App;
