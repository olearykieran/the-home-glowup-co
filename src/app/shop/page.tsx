"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Shop - The Home GlowUp Co.</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16633623489"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16633623489');
          `,
          }}
        />
        <meta
          name="description"
          content="Explore our range of handmade candles and essential oil sprays. Elevate your home ambiance with our exquisite products."
        />
        <meta
          name="keywords"
          content="shop, candles, essential oil sprays, home products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Shop - The Home GlowUp Co." />
        <meta
          property="og:description"
          content="Explore our range of handmade candles and essential oil sprays. Elevate your home ambiance with our exquisite products."
        />
        <meta property="og:url" content="https://thehomeglowup.com/shop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop - The Home GlowUp Co." />
        <meta
          name="twitter:description"
          content="Explore our range of handmade candles and essential oil sprays. Elevate your home ambiance with our exquisite products."
        />
      </Head>
      <main className="bg-white min-h-screen py-16 px-8">
        <ShopSection />
      </main>
    </>
  );
}

function ShopSection() {
  return (
    <section className="w-full py-16 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
          Shop (Coming Soon...)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ShopItem
            href="/shop/candles"
            src="/candle.jpg"
            alt="Candles"
            title="Candles"
          />
          <ShopItem href="/shop/sprays" src="/spray.jpg" alt="Sprays" title="Sprays" />
        </div>
      </div>
    </section>
  );
}

function ShopItem({
  href,
  src,
  alt,
  title,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <Link href={href} passHref>
      <div className="group cursor-pointer fade-in-section opacity-0 transition-opacity duration-1000">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
        <div className="mt-4 text-2xl font-semibold text-tertiary montserrat-alternates-regular">
          {title}
        </div>
      </div>
    </Link>
  );
}
