"use client";

import { useEffect, Suspense } from "react";
import { useCart } from "../shopping-cart/CartContext";
import { useSearchParams } from "next/navigation";

function SuccessContentInner() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p>Your order has been placed successfully.</p>
      <p>Session ID: {sessionId}</p>
    </div>
  );
}

export default function SuccessContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContentInner />
    </Suspense>
  );
}
