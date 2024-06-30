// src/app/cancel/page.tsx
"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-5">Payment Cancelled</h1>
      <p className="mb-5">Your payment was cancelled. No charges were made.</p>
      <Link href="/cart" className="text-blue-500 hover:underline">
        Return to Cart
      </Link>
    </div>
  );
}
