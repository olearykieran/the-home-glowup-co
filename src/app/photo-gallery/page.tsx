"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Gallery() {
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

  const galleryItems = [
    { before: "/before-1.jpeg", after: "/after-1.jpeg" },
    { before: "/before-2.jpeg", after: "/after-2.jpeg" },
    // Add more items as needed
  ];

  return (
    <main className="bg-white min-h-screen py-16 px-8">
      <section className="w-full py-16 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
            Our Work Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 transition-opacity duration-1000"
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  className="mySwiper customSwiper" // Apply custom styles
                >
                  <SwiperSlide className="swiperSlide">
                    <Image
                      src={item.after}
                      alt={`After Image ${index + 1}`}
                      layout="responsive"
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                    <div className="overlay">After</div>
                  </SwiperSlide>
                  <SwiperSlide className="swiperSlide">
                    <Image
                      src={item.before}
                      alt={`Before Image ${index + 1}`}
                      layout="responsive"
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                    <div className="overlay">Before</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
