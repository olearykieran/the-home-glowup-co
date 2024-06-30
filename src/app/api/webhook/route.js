import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  let event;

  try {
    const body = await req.text();
    console.log("Received webhook:", body); // Log the received webhook
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Error verifying Stripe webhook signature:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Checkout session completed:", session); // Log the session details

      // Prepare customer details and shipping details, ensuring no undefined or null values
      const customerDetails = {
        address: {
          city: session.customer_details.address.city || "",
          country: session.customer_details.address.country || "",
          line1: session.customer_details.address.line1 || "",
          line2: session.customer_details.address.line2 || "",
          postal_code: session.customer_details.address.postal_code || "",
          state: session.customer_details.address.state || "",
        },
        email: session.customer_details.email || "",
        name: session.customer_details.name || "",
        phone: session.customer_details.phone || "",
        tax_exempt: session.customer_details.tax_exempt || "none",
        tax_ids: session.customer_details.tax_ids || [],
      };

      const shippingDetails = session.shipping_details
        ? {
            address: {
              city: session.shipping_details.address.city || "",
              country: session.shipping_details.address.country || "",
              line1: session.shipping_details.address.line1 || "",
              line2: session.shipping_details.address.line2 || "",
              postal_code: session.shipping_details.address.postal_code || "",
              state: session.shipping_details.address.state || "",
            },
            name: session.shipping_details.name || "",
          }
        : null;

      // Save order to Firestore
      const orderData = {
        sessionId: session.id,
        paymentStatus: session.payment_status,
        amountTotal: session.amount_total,
        currency: session.currency,
        customerDetails: customerDetails,
        shippingDetails: shippingDetails,
        timestamp: new Date(),
        fulfilled: false, // Add a field to track fulfillment status
      };

      try {
        await addDoc(collection(db, "orders"), orderData);
        console.log("Order saved to Firestore:", orderData);
      } catch (error) {
        console.error("Error saving order to Firestore:", error);
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
