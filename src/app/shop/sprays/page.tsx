"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../shopping-cart/CartContext";
import SuccessMessage from "../../components/Success";
import Head from "next/head";

interface Spray {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function Sprays() {
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const { addToCart } = useCart();

  const sprays: Spray[] = [
    { id: 1, name: "Clove & Ylang Ylang Spray", image: "/spray.jpg", price: 8.0 },
    {
      id: 2,
      name: "Lavender, Bee Balm & Coriander Spray",
      image: "/spray.jpg",
      price: 8.0,
    },
  ];

  const handleAddToCart = (spray: Spray) => {
    console.log("Adding to cart:", spray);
    addToCart(spray);
    setSuccessMessage(`Added ${spray.name} to cart!`);

    // Remove the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Sprays - The Home GlowUp Co.</title>
        <meta
          name="description"
          content="Explore our range of handmade essential oil sprays with unique blends of scents. Perfect for enhancing your home ambiance."
        />
        <meta
          name="keywords"
          content="essential oil sprays, handmade sprays, home decor, aromatherapy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sprays - The Home GlowUp Co." />
        <meta
          property="og:description"
          content="Explore our range of handmade essential oil sprays with unique blends of scents. Perfect for enhancing your home ambiance."
        />
        <meta property="og:url" content="https://thehomeglowup.com/shop/sprays" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sprays - The Home GlowUp Co." />
        <meta
          name="twitter:description"
          content="Explore our range of handmade essential oil sprays with unique blends of scents. Perfect for enhancing your home ambiance."
        />
      </Head>
      <main className="bg-white min-h-screen py-16 px-8">
        {successMessage && <SuccessMessage message={successMessage} />}
        <section className="w-full py-16 px-8 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
              Sprays
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sprays.map((spray) => (
                <SprayCard
                  key={spray.id}
                  spray={spray}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
            <Link
              href="/shop"
              className="bg-primary text-tertiary py-2 px-4 rounded-md hover:bg-tertiary hover:text-primary transition-colors mt-8 inline-block"
            >
              Back to Shop
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

interface SprayCardProps {
  spray: Spray;
  handleAddToCart: (spray: Spray) => void;
}

function SprayCard({ spray, handleAddToCart }: SprayCardProps) {
  return (
    <div className="fade-in-section opacity-0 transition-opacity duration-1000">
      <Image
        src={spray.image}
        alt={spray.name}
        layout="responsive"
        width={500}
        height={300}
        className="rounded-lg object-cover"
      />
      <div className="mt-4 text-xl font-semibold text-tertiary montserrat-alternates-regular">
        {spray.name}
      </div>
      <div className="text-lg font-bold text-tertiary montserrat-regular">
        ${spray.price.toFixed(2)}
      </div>
      <button
        disabled
        className="bg-gray-500 text-white py-2 px-4 rounded-md mt-2 cursor-not-allowed"
      >
        Coming Soon
      </button>
    </div>
  );
}
