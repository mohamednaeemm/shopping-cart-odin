import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { 
                ...item, 
                quantity: item.quantity + product.quantity,
                totalPrice: (item.quantity + product.quantity) * item.price
              }
            : item
        );
      }
      
      return [...currentCart, { 
        ...product, 
        totalPrice: product.quantity * product.price 
      }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId 
          ? { 
              ...item, 
              quantity: newQuantity,
              totalPrice: newQuantity * item.price
            } 
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 