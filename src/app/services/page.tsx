"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Head from "next/head";

interface ServicesContentProps {
  tileSquareFootage: number;
  setTileSquareFootage: Dispatch<SetStateAction<number>>;
  floorSquareFootage: number;
  setFloorSquareFootage: Dispatch<SetStateAction<number>>;
  cabinetUnits: number;
  setCabinetUnits: Dispatch<SetStateAction<number>>;
  trimFeet: number;
  setTrimFeet: Dispatch<SetStateAction<number>>;
  tileCost: number;
  floorCost: number;
  cabinetCost: number;
  trimCost: number;
  totalCost: number;
  fullReplacementCost: number;
  savings: number;
  tileFullReplacement: number;
  floorFullReplacement: number;
  cabinetFullReplacement: number;
  trimFullReplacement: number;
  handleCalculate: () => void;
}

interface InputFieldProps {
  label: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

interface CalculatorResultsProps {
  tileCost: number;
  floorCost: number;
  cabinetCost: number;
  trimCost: number;
  totalCost: number;
  fullReplacementCost: number;
  savings: number;
  tileFullReplacement: number;
  floorFullReplacement: number;
  cabinetFullReplacement: number;
  trimFullReplacement: number;
}

interface CostCardProps {
  title: string;
  costs: { label: string; value: number }[];
}

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  reverse?: boolean;
}

export default function Services() {
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

  const [tileSquareFootage, setTileSquareFootage] = useState(0);
  const [floorSquareFootage, setFloorSquareFootage] = useState(0);
  const [cabinetUnits, setCabinetUnits] = useState(0);
  const [trimFeet, setTrimFeet] = useState(0);

  const [tileCost, setTileCost] = useState(0);
  const [floorCost, setFloorCost] = useState(0);
  const [cabinetCost, setCabinetCost] = useState(0);
  const [trimCost, setTrimCost] = useState(0);

  const [totalCost, setTotalCost] = useState(0);
  const [fullReplacementCost, setFullReplacementCost] = useState(0);
  const [savings, setSavings] = useState(0);

  const [tileFullReplacement, setTileFullReplacement] = useState(0);
  const [floorFullReplacement, setFloorFullReplacement] = useState(0);
  const [cabinetFullReplacement, setCabinetFullReplacement] = useState(0);
  const [trimFullReplacement, setTrimFullReplacement] = useState(0);

  const handleCalculate = () => {
    if (
      isNaN(tileSquareFootage) ||
      isNaN(floorSquareFootage) ||
      isNaN(cabinetUnits) ||
      isNaN(trimFeet)
    ) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const tileReplacementCost = tileSquareFootage * 40;
    const floorReplacementCost = floorSquareFootage * 15;
    const cabinetReplacementCost = cabinetUnits * 1100;
    const trimReplacementCost = trimFeet * 12.5;

    const totalReplacementCost =
      tileReplacementCost +
      floorReplacementCost +
      cabinetReplacementCost +
      trimReplacementCost;

    const tile = tileReplacementCost * 0.55;
    const floor = floorReplacementCost * 0.34;
    const cabinet = cabinetReplacementCost * 0.35;
    const trim = trimReplacementCost * 0.5;

    const total = tile + floor + cabinet + trim;

    setTileCost(tile);
    setFloorCost(floor);
    setCabinetCost(cabinet);
    setTrimCost(trim);
    setTotalCost(total);
    setFullReplacementCost(totalReplacementCost);
    setSavings(totalReplacementCost - total);
    setTileFullReplacement(tileReplacementCost);
    setFloorFullReplacement(floorReplacementCost);
    setCabinetFullReplacement(cabinetReplacementCost);
    setTrimFullReplacement(trimReplacementCost);
  };

  return (
    <>
      <Head>
        <title>Our Services - The Home GlowUp Co.</title>
        <meta
          name="description"
          content="Discover our comprehensive home services, from tile refresh to floor refurbish. Use our cost calculator to compare GlowUp and traditional renovation costs."
        />
        <meta
          name="keywords"
          content="home services, tile refresh, floor refurbish, home renovation, cost calculator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Our Services - The Home GlowUp Co." />
        <meta
          property="og:description"
          content="Discover our comprehensive home services, from tile refresh to floor refurbish. Use our cost calculator to compare GlowUp and traditional renovation costs."
        />
        <meta property="og:url" content="https://thehomeglowup.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - The Home GlowUp Co." />
        <meta
          name="twitter:description"
          content="Discover our comprehensive home services, from tile refresh to floor refurbish. Use our cost calculator to compare GlowUp and traditional renovation costs."
        />
      </Head>
      <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
        <HeroSection />
        <ServicesContent
          tileSquareFootage={tileSquareFootage}
          setTileSquareFootage={setTileSquareFootage}
          floorSquareFootage={floorSquareFootage}
          setFloorSquareFootage={setFloorSquareFootage}
          cabinetUnits={cabinetUnits}
          setCabinetUnits={setCabinetUnits}
          trimFeet={trimFeet}
          setTrimFeet={setTrimFeet}
          tileCost={tileCost}
          floorCost={floorCost}
          cabinetCost={cabinetCost}
          trimCost={trimCost}
          totalCost={totalCost}
          fullReplacementCost={fullReplacementCost}
          savings={savings}
          tileFullReplacement={tileFullReplacement}
          floorFullReplacement={floorFullReplacement}
          cabinetFullReplacement={cabinetFullReplacement}
          trimFullReplacement={trimFullReplacement}
          handleCalculate={handleCalculate}
        />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200">
      <Image
        src="/nice-kitchen-2.png"
        alt="Our Services Image"
        fill
        priority
        className="object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-4 sm:p-8 md:p-16 lg:p-24">
        <div className="bg-quart rounded-md bg-opacity-70 p-4 sm:p-8 md:p-12 lg:p-16 text-left w-full sm:w-3/4 md:w-2/3 lg:max-w-[50%]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tertiary montserrat-regular">
            Our Comprehensive Home Services
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesContent({
  tileSquareFootage,
  setTileSquareFootage,
  floorSquareFootage,
  setFloorSquareFootage,
  cabinetUnits,
  setCabinetUnits,
  trimFeet,
  setTrimFeet,
  tileCost,
  floorCost,
  cabinetCost,
  trimCost,
  totalCost,
  fullReplacementCost,
  savings,
  tileFullReplacement,
  floorFullReplacement,
  cabinetFullReplacement,
  trimFullReplacement,
  handleCalculate,
}: ServicesContentProps) {
  return (
    <section className="w-full bg-white text-tertiary py-12 sm:py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12 sm:space-y-16">
        <CalculatorSection
          tileSquareFootage={tileSquareFootage}
          setTileSquareFootage={setTileSquareFootage}
          floorSquareFootage={floorSquareFootage}
          setFloorSquareFootage={setFloorSquareFootage}
          cabinetUnits={cabinetUnits}
          setCabinetUnits={setCabinetUnits}
          trimFeet={trimFeet}
          setTrimFeet={setTrimFeet}
          tileCost={tileCost}
          floorCost={floorCost}
          cabinetCost={cabinetCost}
          trimCost={trimCost}
          totalCost={totalCost}
          fullReplacementCost={fullReplacementCost}
          savings={savings}
          tileFullReplacement={tileFullReplacement}
          floorFullReplacement={floorFullReplacement}
          cabinetFullReplacement={cabinetFullReplacement}
          trimFullReplacement={trimFullReplacement}
          handleCalculate={handleCalculate}
        />
        <ServiceCard
          title="Refresh"
          image="/tiled.jpg"
          description="Bring your old tiles back to life with our one-of-a-kind cleaning, resealing, and staining process. Our meticulous attention to detail ensures every tile looks brand new, giving your floors a fresh and vibrant appearance. This cost-effective solution revitalizes your space without the high expense of replacing all your tiles."
        />
        <ServiceCard
          title="Refurbish"
          image="/floor.jpg"
          description="Our floor refurbishing service revitalizes your flooring with expert sanding, staining, and sealing for a polished finish. Transform your worn-out floors into stunning surfaces that enhance the beauty of your home. Save significantly on costs by refurbishing instead of opting for a full floor replacement."
          reverse
        />
        <ServiceCard
          title="Repair"
          image="/trim.jpg"
          description="We repair and restore your cabinets and trim, ensuring they are free from damage and look as good as new. Our skilled craftsmen handle every repair with precision, preserving the integrity and beauty of your woodwork. This approach is far more economical than a complete cabinetry and trim overhaul."
        />
        <ServiceCard
          title="Renew"
          image="/paint.jpg"
          description="Our paint renewal service gives your walls a fresh, even coat of paint, enhancing the beauty and ambiance of your home. Choose from a variety of colors and finishes to create the perfect look for your living spaces. Renewing your paint is a budget-friendly way to achieve a transformative effect compared to extensive renovations."
          reverse
        />
      </div>
    </section>
  );
}

function CalculatorSection({
  tileSquareFootage,
  setTileSquareFootage,
  floorSquareFootage,
  setFloorSquareFootage,
  cabinetUnits,
  setCabinetUnits,
  trimFeet,
  setTrimFeet,
  tileCost,
  floorCost,
  cabinetCost,
  trimCost,
  totalCost,
  fullReplacementCost,
  savings,
  tileFullReplacement,
  floorFullReplacement,
  cabinetFullReplacement,
  trimFullReplacement,
  handleCalculate,
}: ServicesContentProps) {
  return (
    <div className="flex flex-col items-center bg-quart p-4 sm:p-8 rounded-md shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-tertiary montserrat-alternates-regular mb-4 text-center">
        GlowUp vs Traditional Renovation Cost Calculator
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <InputField
          label="Tile Square Footage"
          value={tileSquareFootage}
          setValue={setTileSquareFootage}
        />
        <InputField
          label="Floor Square Footage"
          value={floorSquareFootage}
          setValue={setFloorSquareFootage}
        />
        <InputField
          label="Cabinet Linear Footage"
          value={cabinetUnits}
          setValue={setCabinetUnits}
        />
        <InputField label="Trim Feet" value={trimFeet} setValue={setTrimFeet} />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-primary text-tertiary py-2 px-6 rounded-md hover:bg-tertiary hover:text-primary transition-colors w-full sm:w-auto"
      >
        Calculate
      </button>
      <CalculatorResults
        tileCost={tileCost}
        floorCost={floorCost}
        cabinetCost={cabinetCost}
        trimCost={trimCost}
        totalCost={totalCost}
        fullReplacementCost={fullReplacementCost}
        savings={savings}
        tileFullReplacement={tileFullReplacement}
        floorFullReplacement={floorFullReplacement}
        cabinetFullReplacement={cabinetFullReplacement}
        trimFullReplacement={trimFullReplacement}
      />
    </div>
  );
}

function InputField({ label, value, setValue }: InputFieldProps) {
  return (
    <div>
      <label className="block text-base sm:text-lg mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="p-2 mb-4 border rounded-md w-full"
      />
    </div>
  );
}

function CalculatorResults({
  tileCost,
  floorCost,
  cabinetCost,
  trimCost,
  totalCost,
  fullReplacementCost,
  savings,
  tileFullReplacement,
  floorFullReplacement,
  cabinetFullReplacement,
  trimFullReplacement,
}: CalculatorResultsProps) {
  return (
    <div className="mt-8 text-left w-full">
      <div className="flex flex-col sm:flex-row justify-between">
        <CostCard
          title="GlowUp Costs"
          costs={[
            { label: "Tile", value: tileCost },
            { label: "Floor", value: floorCost },
            { label: "Cabinet", value: cabinetCost },
            { label: "Trim", value: trimCost },
            { label: "Total", value: totalCost },
          ]}
        />
        <CostCard
          title="Full Replacement Costs"
          costs={[
            { label: "Tile", value: tileFullReplacement },
            { label: "Floor", value: floorFullReplacement },
            { label: "Cabinet", value: cabinetFullReplacement },
            { label: "Trim", value: trimFullReplacement },
            { label: "Total", value: fullReplacementCost },
          ]}
        />
      </div>
      <p className="text-xl sm:text-2xl text-center text-tertiary montserrat-bold mt-4">
        <strong>Total Savings:</strong> ${savings}
      </p>
    </div>
  );
}

function CostCard({ title, costs }: CostCardProps) {
  return (
    <div className="w-full sm:w-1/2 bg-secondary p-4 mb-4 sm:mb-0 sm:mr-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {costs.map((cost, index) => (
        <p
          key={index}
          className="text-base sm:text-lg text-tertiary montserrat-regular mb-2"
        >
          <strong>{cost.label}:</strong> ${cost.value}
        </p>
      ))}
    </div>
  );
}

function ServiceCard({ title, image, description, reverse }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-wrap items-center fade-in-section opacity-0 transition-opacity duration-1000 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <Image
          src={image}
          alt={`${title} Image`}
          width={500}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-tertiary montserrat-alternates-regular mb-4">
          {title}
        </h2>
        <p className="text-lg text-tertiary montserrat-regular">{description}</p>
      </div>
    </div>
  );
}
