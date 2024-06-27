"use client";

import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // Importing TikTok icon

export default function Home() {
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
      setTimeout(() => setSuccessMessage(""), 5000); // Clear the message after 5 seconds
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

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
    <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/kitchen.jpeg"
          alt="Kitchen Tile Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-24">
          <div className="bg-quart rounded-md bg-opacity-70 p-16 text-left max-w-[50%]">
            <p className="text-5xl text-tertiary montserrat-regular">
              Elegant Transformations for Kitchens, Bathrooms, and Beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <section className="w-full bg-quart py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center fade-in-section opacity-0 transition-opacity duration-1000">
          <div className="w-full md:w-1/2 pr-8 text-left">
            <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-4">
              About Us
            </h2>
            <p className="text-lg text-tertiary montserrat-regular mb-8">
              At The Home GlowUp Co., we specialize in revitalizing your home with a touch
              of elegance. We understand the importance of a serene and joyous living
              space, and our expertise transforms every corner of your house. Our mission
              is to deliver sophisticated makeovers that make your spaces shine with
              renewed brilliance.
            </p>
            <p className="text-lg text-tertiary montserrat-regular mb-8">
              As a special touch, we always leave you with a handmade GlowUp&trade;
              candle, a small token of our appreciation and a reminder of our dedication
              to your home&apos;s new glow.
            </p>
            <Link href="/about-us" passHref>
              <div className="text-lg rounded-md bg-primary text-tertiary py-2 px-6 rounded montserrat-regular hover:bg-tertiary hover:text-quart transition-colors cursor-pointer">
                Read More
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/candle.jpg" // Replace with your image path
              alt="About Us Image"
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="rounded-full"
            />
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
            <div className="relative group">
              <Image
                src="/candles.jpg" // Replace with your image path
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
            <div className="relative group">
              <Image
                src="/spray.jpg" // Replace with your image path
                alt="Essential Oil Spray"
                width={560}
                height={300}
                className="rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
                  <p className="text-xl font-semibold text-white">Essential Oil Sprays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section id="contact" className="w-full bg-tertiary py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold montserrat-alternates-regular text-quart text-left mb-12">
            Contact Us
          </h2>
          {successMessage && (
            <div className="bg-cinco text-tertiary p-4 rounded mb-4">
              {successMessage}
            </div>
          )}
          <div className="flex flex-col md:flex-row md:justify-between montserrat-alternates-regular items-center bg-quart p-8 rounded-lg shadow-lg">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/flame-2.png" // Replace with your logo path
                alt="Logo"
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl montserrat-alternates-regular text-tertiary mb-4">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-700 px-8 py-2 mb-4">
                Fill out this form to request an appointment, schedule a consult, or ask
                general questions.
              </p>
              <div className="text-left">
                <p className="text-lg text-gray-700">
                  <span className="font-bold montserrat-bold">Phone (Call or Text):</span>{" "}
                  (516) 382-4279
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-bold montserrat-bold">Email:</span>{" "}
                  info@thehomeglowupco.com
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </main>
  );
}
