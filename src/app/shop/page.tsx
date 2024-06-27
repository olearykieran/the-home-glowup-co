"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Shop() {
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
  return (
    <main className="bg-white min-h-screen py-16 px-8">
      <section className="w-full py-16 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
            Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/shop/candles" passHref>
              <div className="group cursor-pointer fade-in-section opacity-0 transition-opacity duration-1000">
                <Image
                  src="/candle.jpg"
                  alt="Soaps"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-4 text-2xl font-semibold text-tertiary montserrat-alternates-regular">
                  Candles
                </div>
              </div>
            </Link>
            <Link href="/shop/sprays" passHref>
              <div className="group cursor-pointer fade-in-section opacity-0 transition-opacity duration-1000">
                <Image
                  src="/spray.jpg"
                  alt="Sprays"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-4 text-2xl font-semibold text-tertiary montserrat-alternates-regular">
                  Sprays
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
