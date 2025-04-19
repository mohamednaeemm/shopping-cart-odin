import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Store = ({ products, error, loading }) => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error: {error.message}</div>;
  }

  if (!products) {
    return <div className="text-center p-8">No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{quantities[product.id] || 1}</span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
