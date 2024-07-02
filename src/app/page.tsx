"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>The Home GlowUp Co. - Elegant Home Transformations</title>
        <meta
          name="description"
          content="Revitalize your home with elegant transformations for kitchens, bathrooms, and beyond. Contact us for cost-effective and stunning home makeovers."
        />
        <meta
          name="keywords"
          content="home transformation, kitchen renovation, bathroom renovation, affordable home makeover, home glowup"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="The Home GlowUp Co. - Elegant Home Transformations"
        />
        <meta
          property="og:description"
          content="Revitalize your home with elegant transformations for kitchens, bathrooms, and beyond. Contact us for cost-effective and stunning home makeovers."
        />
        <meta property="og:url" content="https://thehomeglowup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Home GlowUp Co. - Elegant Home Transformations"
        />
        <meta
          name="twitter:description"
          content="Revitalize your home with elegant transformations for kitchens, bathrooms, and beyond. Contact us for cost-effective and stunning home makeovers."
        />
      </Head>
      <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200">
          <Image
            src="/kitchen.jpeg"
            alt="Elegant kitchen with modern tiles"
            fill
            priority
            className="object-cover absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-4 sm:p-8 md:p-16 lg:p-24">
            <div className="bg-quart rounded-md bg-opacity-70 p-4 sm:p-8 md:p-12 lg:p-16 text-left w-full sm:w-3/4 md:w-2/3 lg:max-w-[50%]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tertiary montserrat-regular">
                Elegant Transformations for Kitchens, Bathrooms, and Beyond.
              </h1>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <section className="w-full bg-quart py-12 sm:py-16 md:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center fade-in-section opacity-0 transition-opacity duration-1000">
            <div className="w-full md:w-1/2 md:pr-8 text-left mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-tertiary montserrat-alternates-regular mb-4">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-4 sm:mb-6">
                At The Home GlowUp Co., we specialize in revitalizing your home with a
                touch of elegance. We understand the importance of a serene and joyous
                living space, and our expertise transforms every corner of your house. Our
                mission is to deliver sophisticated makeovers that make your spaces shine
                with renewed brilliance.
              </p>
              <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-6 sm:mb-8">
                As a special touch, we always leave you with a handmade GlowUp candle, a
                small token of our appreciation and a reminder of our dedication to your
                home&apos;s new glow.
              </p>
              <Link href="/about-us" passHref>
                <div className="inline-block text-base sm:text-lg bg-primary text-tertiary py-2 px-6 rounded montserrat-regular hover:bg-tertiary hover:text-quart transition-colors cursor-pointer">
                  Read More
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="max-w-sm mx-auto">
                <Image
                  src="/candle.jpg" // Replace with your image path
                  alt="About Us Image"
                  width={400}
                  height={400}
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full bg-cinco py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold montserrat-alternates-regular text-tertiary m mb-12 text-left">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/tiled.jpg" // Replace with your image path
                  alt="Tile Refresh"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-xl text-tertiary font-semibold mt-4">Refresh </p>
                <p className="text-md m-2 text-center text-tertiary">
                  We&apos;ll bring your old tiles back to life with our one-of-a-kind
                  cleaning, resealing and staining process.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/floor.jpg" // Replace with your image path
                  alt="Floor Refurbish"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-xl text-tertiary font-semibold mt-4">Refurbish</p>
                <p className="text-md m-2 text-center text-tertiary">
                  Our floor refurbishing service revitalizes your flooring with expert
                  sanding, staining, and sealing for a polished finish.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/trim.jpg" // Replace with your image path
                  alt="Cabinet Repair"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-xl text-tertiary font-semibold mt-4">Repair</p>
                <p className="text-md m-2 text-center text-tertiary">
                  We&apos;ll repair and restore your cabinets and trim, ensuring they are
                  free from damage and look as good as new.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/paint.jpg" // Replace with your image path
                  alt="Paint Renew"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-xl text-tertiary font-semibold mt-4">Renew</p>
                <p className="text-md m-2 text-center text-tertiary">
                  Our paint renewal service gives your walls a fresh, even coat of paint,
                  enhancing the beauty and ambiance of your home.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/services" passHref>
                <div className="text-lg rounded-md bg-primary text-tertiary py-2 px-6 montserrat-regular hover:bg-tertiary hover:text-quart transition-colors cursor-pointer">
                  View All Services
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Products Section */}
        <section className="w-full bg-gradient-to-r py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-tertiary text-left montserrat-alternates-regular mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/shop/candles" passHref>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/candles.jpg"
                    alt="Candle"
                    width={560}
                    height={300}
                    className="rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
                      <p className="text-xl font-semibold text-white">Candles</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/shop/sprays" passHref>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/spray.jpg"
                    alt="Essential Oil Spray"
                    width={560}
                    height={300}
                    className="rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
                      <p className="text-xl font-semibold text-white">
                        Essential Oil Sprays
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
