// src/app/cart/page.tsx
"use client";
import dynamic from "next/dynamic";

const ShoppingCart = dynamic(() => import("../shopping-cart/ShoppingCart"), {
  ssr: false,
});

export default function CartPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Your Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
}
