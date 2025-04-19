import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/Routes';
import { useProducts } from './services/api';
import { CartProvider } from './context/CartContext';

function App() {
  const { productArr, error, loading } = useProducts();

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="p-8 mt-4">
            <AppRoutes products={productArr} error={error} loading={loading} />
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;