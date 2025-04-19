// Routes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;