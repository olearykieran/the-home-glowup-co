// Checkout.js
import { useCart } from "./CartContext";
import { stripePromise } from "./stripe";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);

    const stripe = await stripePromise;
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();

    await addDoc(collection(db, "orders"), {
      cart,
      sessionId: session.id,
      status: "pending",
    });

    await stripe.redirectToCheckout({ sessionId: session.id });
    setLoading(false);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Loading..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}
