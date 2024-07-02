"use client";

import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - The Home GlowUp Co.</title>
        <meta
          name="description"
          content="Learn about our mission and the team behind The Home GlowUp Co. We specialize in cost-effective home transformations, bringing elegance to every space."
        />
        <meta
          name="keywords"
          content="home transformation, affordable home makeover, about us, home glowup team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About Us - The Home GlowUp Co." />
        <meta
          property="og:description"
          content="Learn about our mission and the team behind The Home GlowUp Co. We specialize in cost-effective home transformations, bringing elegance to every space."
        />
        <meta property="og:url" content="https://thehomeglowup.com/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - The Home GlowUp Co." />
        <meta
          name="twitter:description"
          content="Learn about our mission and the team behind The Home GlowUp Co. We specialize in cost-effective home transformations, bringing elegance to every space."
        />
      </Head>
      <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
        <HeroSection />
        <WhoWeAreSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-200">
      <Image
        src="/nice-kitchen.jpg"
        alt="Our Story Image"
        fill
        priority
        className="object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-24">
        <div className="bg-quart rounded-md bg-opacity-80 p-16 text-left max-w-[50%]">
          <h2 className="text-4xl font-bold text-tertiary montserrat-regular mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-tertiary montserrat-regular">
            High costs shouldn&apos;t prevent you from making your home look brand new.
            With years of experience in residential construction, we understand that many
            Long Island families desire renovations but find full remodel prices
            prohibitive. We offer a range of cost-effective solutions, providing stunning
            transformations at a fraction of what a general contractor would charge. Let
            us elevate your home&apos;s elegance without the hefty price tag.
          </p>
        </div>
      </div>
    </div>
  );
}

function WhoWeAreSection() {
  return (
    <section className="w-full bg-quart py-24 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular  mb-8">
          Who We Are
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between items-end md:items-stretch">
          <TeamMember
            name="Denis Patrick O'Leary"
            title="Co-Founder & CEO"
            imageSrc="/den.jpg"
            description="Denis is a seasoned residential contractor with years of experience on the
            South Shore of Long Island. As the founder of O'Home Services, he has
            dedicated himself to serving the local community through renovations,
            demolition, and new builds. Denis brings a unique combination of strength
            and expertise to every job, no matter the size. Recognizing the high
            demand for affordable home revitalization solutions amidst rising labor
            and material costs, Denis saw an opportunity to offer quality renovations
            at a fraction of the cost. This vision led to the creation of The Home
            GlowUp Co., where he continues to make homes shine with renewed
            brilliance."
            reverse={false}
          />
          <TeamMember
            name="Kieran James O'Leary"
            title="Co-Founder & CTO"
            imageSrc="/kier.jpg"
            description="Kieran is a skilled software engineer by day and a dedicated sauna master
            by night. As a software engineer, he is known for his innovative
            problem-solving skills and his ability to create seamless, user-friendly
            applications that enhance the customer experience. Under the guidance of
            an Austrian sauna master, he has honed his expertise in essential oils and
            wellness practices. Kieran brings a blend of technical knowledge and
            hands-on experience to The Home GlowUp Co. His partnership with Denis
            allows him to align his passion for wellness and technology with the
            company’s mission, creating affordable home solutions for all."
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  description: string;
  reverse: boolean;
}

function TeamMember({ name, title, imageSrc, description, reverse }: TeamMemberProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "items-start" : "items-end"
      } w-full md:w-1/2 ${reverse ? "md:pl-8" : "md:pr-8"} fade-in-section slide-in-${
        reverse ? "right" : "left"
      }`}
    >
      <div className={`flex flex-col ${reverse ? "items-start" : "items-end"}`}>
        <div className="relative w-48 h-48 mb-4">
          <Image src={imageSrc} alt={name} fill className="object-cover rounded-full" />
        </div>
        <h3
          className={`text-2xl font-semibold text-tertiary montserrat-alternates-regular ${
            reverse ? "text-left" : "text-right"
          }`}
        >
          {name}
        </h3>
        <h2
          className={`text-xl font-semibold text-tertiary montserrat-alternates-regular ${
            reverse ? "text-left" : "text-right"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`text-md text-tertiary montserrat-regular mt-4 ${
          reverse ? "text-left" : "text-right"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
