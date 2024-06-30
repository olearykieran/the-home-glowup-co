// /src/app/shopping-cart/Checkout.js
"use client";
import { useCart } from "./CartContext";
import getStripe from "../stripe";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const stripe = await getStripe();
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      } else {
        clearCart(); // Clear cart after redirecting to success page
        window.location.href = "/success"; // Redirect to success page
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        {loading ? "Loading..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}
