// /src/app/Layout.js
"use client";

import { ReactNode, useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaEnvelope,
  FaConciergeBell,
  FaInfoCircle,
  FaHome,
  FaPhotoVideo,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CartProvider, useCart } from "./shopping-cart/CartContext";
import { useRouter } from "next/navigation";

interface RootLayoutProps {
  children: ReactNode;
}

function CartIcon() {
  const { cart } = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative">
      <button onClick={() => router.push("/cart")} className="text-2xl text-tertiary">
        <FaShoppingCart />
      </button>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContactClick = () => {
    router.push("/#contact");
    setMenuOpen(false);
  };

  return (
    <CartProvider>
      <html lang="en">
        <body className="bg-cinco">
          <header className="relative flex justify-between items-center mt-6 px-8 py-4">
            <div className="flex items-center space-x-4">
              <button onClick={toggleMenu} className="text-2xl text-tertiary">
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
              <div className="relative" style={{ top: "3px" }}>
                {" "}
                {/* Adjust top value as needed */}
                <CartIcon />
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <Image
                src="/flame-2.png"
                alt="Logo"
                width={30}
                height={30}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-xl mt-2 text-tertiary montserrat-alternates-thin">
                The Home GlowUp Co.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-tertiary"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-tertiary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-tertiary"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-tertiary"
              >
                <SiTiktok />
              </a>
            </div>
          </header>
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 left-0 h-full bg-quart text-tertiary w-64 p-4 z-30 transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={toggleMenu} className="text-2xl text-tertiary mb-4">
              <AiOutlineClose />
            </button>
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-lg montserrat-alternates-regular flex items-center"
              >
                <FaHome className="mr-2" />
                Home
              </a>
              <a
                href="/about-us"
                className="text-lg montserrat-alternates-regular flex items-center"
              >
                <FaInfoCircle className="mr-2" />
                About
              </a>
              <a
                href="/services"
                className="text-lg montserrat-alternates-regular flex items-center"
              >
                <FaConciergeBell className="mr-2" />
                Services
              </a>
              <a
                href="/shop"
                className="text-lg montserrat-alternates-regular flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Shop
              </a>
              <a
                href="/photo-gallery"
                className="text-lg montserrat-alternates-regular flex items-center"
              >
                <FaPhotoVideo className="mr-2" />
                Gallery
              </a>
              <a
                onClick={handleContactClick}
                className="text-lg montserrat-alternates-regular flex items-center cursor-pointer"
              >
                <FaEnvelope className="mr-2" />
                Contact
              </a>
            </nav>
          </div>
          <main className="flex-grow bg-white mt-6 min-h-screen">{children}</main>
          <footer className="bg-cinco text-tertiary py-8">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    <SiTiktok />
                  </a>
                </div>
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} The Home GlowUp Co. - All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </CartProvider>
  );
}
