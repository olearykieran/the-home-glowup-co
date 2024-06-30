// /src/app/shopping-cart/ShoppingCart.js
"use client";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useCart();
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  return (
    <div className="min-h-screen p-4">
      {" "}
      {/* Add min-height to fill viewport */}
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {localCart.length === 0 ? (
        <p className="p-4 m-4 text-center text-tertiary  text-lg">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {localCart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Checkout />
          </div>
        </div>
      )}
    </div>
  );
}
