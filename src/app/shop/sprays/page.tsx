"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "../../shopping-cart/CartContext"; // Import useCart hook

export default function Sprays() {
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

    // Cleanup the observer
    return () => {
      observer.disconnect();
    };
  }, []);

  const { addToCart } = useCart(); // Use the addToCart function from the cart context

  const sprays = [
    { name: "Clove & Ylang Ylang Spray", image: "/spray.jpg", price: "$8.00" },
    {
      name: "Lavendar, Bee Balm & Coriander Spray",
      image: "/spray.jpg",
      price: "$8.00",
    },
    // Add more sprays as needed
  ];

  return (
    <main className="bg-white min-h-screen py-16 px-8">
      <section className="w-full py-16 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
            Sprays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sprays.map((spray, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 transition-opacity duration-1000"
              >
                <Image
                  src={spray.image}
                  alt={spray.name}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-4 text-xl font-semibold text-tertiary montserrat-alternates-regular">
                  {spray.name}
                </div>
                <div className="text-lg text-tertiary montserrat-regular">
                  {spray.price}
                </div>
                <button
                  className="mt-4 bg-primary text-tertiary py-2 px-6 rounded-md hover:bg-tertiary hover:text-primary transition-colors"
                  onClick={() => addToCart({ name: spray.name, price: 8.0 })}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
