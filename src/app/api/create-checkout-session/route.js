// /src/app/api/create-checkout-session/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { cart } = await req.json();

      // Save order to Firebase
      const orderData = {
        items: cart,
        timestamp: new Date(),
      };

      console.log("Order Data:", orderData); // Log order data for debugging

      await addDoc(collection(db, "orders"), orderData);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: cart.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price * 100), // price in cents
          },
          quantity: 1,
        })),
        mode: "payment",
        success_url: `${req.headers.get(
          "origin"
        )}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/cancel`,
        shipping_address_collection: {
          allowed_countries: ["US", "CA"], // Add the countries you want to allow
        },
      });

      return NextResponse.json({ id: session.id });
    } catch (error) {
      console.error("Error in create-checkout-session:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
