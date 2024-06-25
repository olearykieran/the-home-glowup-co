import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Home GlowUp Co.",
  description: "Elegant Refurbishments - Transforming Spaces",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <header className="relative bg-cinco text-center">
          <div className="flex flex-col p-8 items-center">
            <Image src="/flame-2.png" alt="Logo" width={50} height={50} />
            <div className="text-3xl mt-4 text-tertiary montserrat-alternates-thin ">
              The Home GlowUp Co.
            </div>
          </div>
        </header>
        <div className="bg-quart">
          <nav className="relative z-10 text-tertiary px-8 py-4 flex justify-center space-x-8 shadow-lg">
            <a href="/" className="text-lg montserrat-alternates-regular">
              Home
            </a>
            <a href="/about-us" className="text-lg montserrat-alternates-regular">
              About Us
            </a>
            <a href="/services" className="text-lg montserrat-alternates-regular">
              Services
            </a>
            <a href="/products" className="text-lg montserrat-alternates-regular">
              Products
            </a>
            <a href="/photo-gallery" className="text-lg montserrat-alternates-regular">
              Photo Gallery
            </a>
            <a href="/contact-us" className="text-lg montserrat-alternates-regular">
              Contact Us
            </a>
          </nav>
        </div>
        <main className="flex-grow bg-white">{children}</main>
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
  );
}
