"use client";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const markAsFulfilled = async (orderId) => {
    try {
      const orderDoc = doc(db, "orders", orderId);
      await updateDoc(orderDoc, { fulfilled: true });
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, fulfilled: true } : order
        )
      );
    } catch (err) {
      console.error("Error marking order as fulfilled:", err);
      alert("Failed to mark order as fulfilled. Please try again.");
    }
  };

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-tertiary font-bold mb-4">Orders</h1>
      <table className="min-w-full text-tertiary bg-white">
        <thead>
          <tr>
            <th className="py-2 ">Order ID</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Customer Email</th>
            <th className="py-2">Shipping Address</th>
            <th className="py-2">Fulfillment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2">{order.id}</td>
              <td className="py-2">${((order.amountTotal || 0) / 100).toFixed(2)}</td>
              <td className="py-2">{order.paymentStatus || "N/A"}</td>
              <td className="py-2">{order.customerDetails?.name || "N/A"}</td>
              <td className="py-2">{order.customerDetails?.email || "N/A"}</td>
              <td className="py-2">
                {order.shippingDetails?.address
                  ? `${order.shippingDetails.address.line1 || ""}, ${
                      order.shippingDetails.address.city || ""
                    }, ${order.shippingDetails.address.state || ""}, ${
                      order.shippingDetails.address.postal_code || ""
                    }, ${order.shippingDetails.address.country || ""}`
                  : "N/A"}
              </td>
              <td className="py-2">
                {order.fulfilled ? (
                  "Fulfilled"
                ) : (
                  <button
                    onClick={() => markAsFulfilled(order.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Mark as Fulfilled
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
