"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutUs() {
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
          src="/nice-kitchen.jpg" // Placeholder for the recommended image
          alt="Our Story Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-24">
          <div className="bg-quart rounded-md bg-opacity-80 p-16 text-left max-w-[50%]">
            <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-4">
              Our Story
            </h2>
            <p className="text-lg text-tertiary montserrat-regular">
              Prices are too high for a full remodel, but a basic cleaning won't get the
              job done. If you want to make your preexisting home look like it's brand
              new, we are the ones to call. After working in the residential construction
              industry for several years, we realized that many Long Island families have
              the need and desire to renovate but the prices are just too unreasonable. We
              offer various solutions to keep the price at a fraction of the cost that a
              general contractor would charge for a full remodel.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="w-full bg-quart py-24 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
            Who We Are
          </h2>
          <div className="flex flex-wrap justify-center md:justify-between items-start md:items-stretch">
            {/* Denis O'Leary */}
            <div className="flex flex-col items-end w-full md:w-1/2 text-right md:pr-8 fade-in-section slide-in-left">
              <div className="flex flex-col items-end">
                <div className="relative items-end w-48 h-48 mb-4">
                  <Image
                    src="/den.jpg" // Replace with Denis' image path
                    alt="Denis O'Leary"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-tertiary montserrat-alternates-regular">
                  Denis Patrick O'Leary
                </h3>
                <h2 className="text-xl font-semibold text-tertiary montserrat-alternates-regular">
                  Co-Founder & CEO
                </h2>
              </div>
              <p className="text-md text-tertiary montserrat-regular mt-4">
                Denis is a seasoned residential contractor with years of experience on the
                South Shore of Long Island. As the founder of O'Home Services, he has
                dedicated himself to serving the local community through renovations,
                demolition, and new builds. Denis brings a unique combination of strength
                and expertise to every job, no matter the size. Recognizing the high
                demand for affordable home revitalization solutions amidst rising labor
                and material costs, Denis saw an opportunity to offer quality renovations
                at a fraction of the cost. This vision led to the creation of The Home
                GlowUp Co., where he continues to make homes shine with renewed
                brilliance.
              </p>
            </div>

            {/* Kieran O'Leary */}
            <div className="flex flex-col items-start w-full md:w-1/2 text-left md:pl-8 fade-in-section slide-in-right">
              <div className="flex flex-col items-left">
                <div className="relative justify-start w-48 h-48 mb-4">
                  <Image
                    src="/kier.jpg" // Replace with Kieran's image path
                    alt="Kieran O'Leary"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-tertiary montserrat-alternates-regular">
                  Kieran James O'Leary
                </h3>
                <h2 className="text-xl font-semibold text-tertiary montserrat-alternates-regular">
                  Co-Founder & CTO
                </h2>
              </div>
              <p className="text-md text-tertiary montserrat-regular mt-4">
                Kieran is a skilled software engineer by day and a dedicated sauna master
                by night. As a software engineer, he is known for his innovative
                problem-solving skills and his ability to create seamless, user-friendly
                applications that enhance the customer experience. Under the guidance of
                an Austrian sauna master, he has honed his expertise in essential oils and
                wellness practices. Kieran brings a blend of technical knowledge and
                hands-on experience to The Home GlowUp Co. His partnership with Denis
                allows him to align his passion for wellness and technology with the
                company’s mission, creating affordable home solutions for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
