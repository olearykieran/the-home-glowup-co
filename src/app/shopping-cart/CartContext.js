// /src/app/shopping-cart/CartContext.js
"use client";
import { createContext, useContext, useState, useCallback, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = useCallback((item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, { ...item, id: Date.now() }];
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((item) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
