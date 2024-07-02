"use client";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import Image from "next/image";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useCart();
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {localCart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul>
            {localCart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover mr-4"
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
