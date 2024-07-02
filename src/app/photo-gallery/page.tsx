"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const galleryItems = [
    { before: "Coming Soon", after: "Coming Soon" },
    { before: "Coming Soon", after: "Coming Soon" },
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
                  navigation={{
                    prevEl: `.swiper-button-prev-${index}`,
                    nextEl: `.swiper-button-next-${index}`,
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  className="mySwiper customSwiper relative"
                >
                  <SwiperSlide className="swiperSlide">
                    <div className="h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                      <p className="text-2xl text-gray-600">{item.after}</p>
                    </div>
                    <div className="overlay">After</div>
                  </SwiperSlide>
                  <SwiperSlide className="swiperSlide">
                    <div className="h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                      <p className="text-2xl text-gray-600">{item.before}</p>
                    </div>
                    <div className="overlay">Before</div>
                  </SwiperSlide>
                  <div
                    className={`swiper-button-prev-${index} absolute left-0 top-1/2 transform -translate-y-1/2 z-10`}
                  >
                    <FaArrowLeft className="text-tertiary text-2xl" />
                  </div>
                  <div
                    className={`swiper-button-next-${index} absolute right-0 top-1/2 transform -translate-y-1/2 z-10`}
                  >
                    <FaArrowRight className="text-tertiary text-2xl" />
                  </div>
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
