import React from 'react'
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <div className="text-center p-8">Your cart is empty</div>;
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price} each</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total</h3>
          <p className="text-xl font-semibold">${getTotalPrice().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart
