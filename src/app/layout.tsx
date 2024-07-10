"use client";

import { ReactNode, useState } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaConciergeBell,
  FaInfoCircle,
  FaHome,
  // FaShoppingCart,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { CartProvider, useCart } from "./shopping-cart/CartContext";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

interface RootLayoutProps {
  children: ReactNode;
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
}

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/*
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
      <button onClick={() => router.push("/cart")} className="text-xl text-tertiary">
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
*/

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipCode: "",
        message: "",
      });
      setSuccessMessage("Thank you! Your message has been successfully sent.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error writing document: ", error);
      setSuccessMessage("There was an error sending your message. Please try again.");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    // <CartProvider>
    <html lang="en">
      <body className="bg-cinco">
        <header className="relative flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 pb-0 pt-6">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="text-xl text-tertiary flex items-center"
              >
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
              {/* <div className="relative mt-1 w-[24px] h-[24px]">
                  <CartIcon />
                </div> */}
            </div>
          </div>
          <div className="flex-grow flex justify-center md:ml-16 items-center">
            <Link href="/" className="flex flex-col items-center cursor-pointer">
              <div className="relative w-[30px] h-[40px]">
                <Image
                  src="/flame-2.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="text-2xl mt-2 text-tertiary montserrat-alternates-black text-center">
                The Home GlowUp Co.
              </div>
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61561688316000"
              icon={<FaFacebookF />}
            />
            <SocialIcon href="https://x.com/thehomeglowupco" icon={<FaTwitter />} />
            <SocialIcon
              href="https://www.instagram.com/homeglowupco/"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://www.tiktok.com/@thehomeglowupco?lang=en"
              icon={<SiTiktok />}
            />
          </div>
        </header>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        ></div>
        <nav
          className={`fixed top-0 left-0 h-full bg-quart text-tertiary w-64 p-4 z-30 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button onClick={toggleMenu} className="text-2xl text-tertiary mb-0">
            <AiOutlineClose />
          </button>
          <NavigationLinks
            handleContactClick={handleContactClick}
            closeMenu={toggleMenu}
          />
          <div className="mt-8 sm:hidden">
            <div className="flex justify-center space-x-4">
              <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
              <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
              <SocialIcon href="https://tiktok.com" icon={<SiTiktok />} />
            </div>
          </div>
        </nav>
        <main className="flex-grow bg-white mt-6 min-h-screen">{children}</main>
        <ContactUsSection
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          successMessage={successMessage}
        />
        <Footer />
      </body>
    </html>
    // </CartProvider>
  );
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg text-tertiary"
    >
      {icon}
    </a>
  );
}

function NavigationLinks({
  handleContactClick,
  closeMenu,
}: {
  handleContactClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  closeMenu: () => void;
}) {
  return (
    <nav className="flex flex-col mt-2 space-y-4">
      <NavLink href="/" icon={<FaHome />} label="Home" onClick={closeMenu} />
      <NavLink
        href="/about-us"
        icon={<FaInfoCircle />}
        label="About"
        onClick={closeMenu}
      />
      <NavLink
        href="/services"
        icon={<FaConciergeBell />}
        label="Services"
        onClick={closeMenu}
      />
      {/* <NavLink href="/shop" icon={<FaShoppingCart />} label="Shop" onClick={closeMenu} /> */}
      {/* <NavLink
        href="/photo-gallery"
        icon={<FaPhotoVideo />}
        label="Gallery"
        onClick={closeMenu}
      /> */}
      <a
        onClick={handleContactClick}
        className="text-lg montserrat-alternates-regular flex items-center cursor-pointer"
      >
        <FaEnvelope className="mr-2" />
        Contact
      </a>
    </nav>
  );
}

function NavLink({ href, icon, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-lg montserrat-alternates-regular flex items-center"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
}

function ContactUsSection({
  formData,
  handleChange,
  handleSubmit,
  successMessage,
}: ContactFormProps & { successMessage: string }) {
  return (
    <section id="contact" className="w-full bg-tertiary py-16">
      <div id="contact" className="max-w-5xl p-8 mx-auto text-center">
        <h2 className="text-4xl font-bold montserrat-alternates-regular text-quart text-left mb-12">
          Contact Us
        </h2>
        {successMessage && (
          <div className="bg-cinco text-tertiary p-4 rounded mb-4">{successMessage}</div>
        )}
        <div className="flex flex-col md:flex-row md:justify-between montserrat-alternates-regular items-center bg-quart p-8 rounded-lg shadow-lg">
          <ContactInfo />
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="md:w-1/2 mb-4 md:mb-0">
      <Image
        src="/flame-2.png"
        alt="Logo"
        width={50}
        height={50}
        className="mx-auto mb-4"
      />
      <h3 className="text-2xl montserrat-alternates-regular text-tertiary mb-4">
        Get in Touch
      </h3>
      <p className="text-lg text-gray-700 px-8 py-2 mb-4">
        Fill out this form to request an appointment, schedule a consult, or ask general
        questions.
      </p>
      <div className="text-left">
        <p className="text-lg text-gray-700">
          <span className="font-bold montserrat-bold">Phone (Call or Text):</span> (516)
          382-4279
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold montserrat-bold">Email:</span>{" "}
          info@thehomeglowupco.com
        </p>
      </div>
    </div>
  );
}

function ContactForm({ formData, handleChange, handleSubmit }: ContactFormProps) {
  return (
    <div className="md:w-1/2">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 border border-gray-300 p-2 rounded-lg text-black"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="zipCode"
          type="text"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
        <textarea
          className="col-span-2 border border-gray-300 p-2 rounded-lg text-black"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          className="col-span-2 bg-primary text-tertiary p-2 rounded-md hover:bg-tertiary hover:text-secondary transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-cinco text-tertiary py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-4 mb-4">
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61561688316000"
              icon={<FaFacebookF />}
            />
            <SocialIcon href="https://x.com/thehomeglowupco" icon={<FaTwitter />} />
            <SocialIcon
              href="https://www.instagram.com/homeglowupco/"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://www.tiktok.com/@thehomeglowupco?lang=en"
              icon={<SiTiktok />}
            />
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Home GlowUp Co. - All Rights Reserved.
          </p>
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
