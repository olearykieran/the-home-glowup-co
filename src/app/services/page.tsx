"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

    const totalReplacementCost = (
      tileReplacementCost +
      floorReplacementCost +
      cabinetReplacementCost +
      trimReplacementCost
    ).toFixed(2);

    const tile = (tileReplacementCost * 0.55).toFixed(2);
    const floor = (floorReplacementCost * 0.34).toFixed(2);
    const cabinet = (cabinetReplacementCost * 0.35).toFixed(2);
    const trim = (trimReplacementCost * 0.5).toFixed(2);

    const total = (
      parseFloat(tile) +
      parseFloat(floor) +
      parseFloat(cabinet) +
      parseFloat(trim)
    ).toFixed(2);

    setTileCost(parseFloat(tile));
    setFloorCost(parseFloat(floor));
    setCabinetCost(parseFloat(cabinet));
    setTrimCost(parseFloat(trim));
    setTotalCost(parseFloat(total));
    setFullReplacementCost(parseFloat(totalReplacementCost));
    setSavings(
      parseFloat((parseFloat(totalReplacementCost) - parseFloat(total)).toFixed(2))
    );
    setTileFullReplacement(parseFloat(tileReplacementCost.toFixed(2)));
    setFloorFullReplacement(parseFloat(floorReplacementCost.toFixed(2)));
    setCabinetFullReplacement(parseFloat(cabinetReplacementCost.toFixed(2)));
    setTrimFullReplacement(parseFloat(trimReplacementCost.toFixed(2)));
  };

  return (
    <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
      {/* Hero Section */}
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

      <section className="w-full bg-white text-tertiary py-12 sm:py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col space-y-12 sm:space-y-16">
          {/* Calculator Section */}
          <div className="flex flex-col items-center bg-quart p-4 sm:p-8 rounded-md shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-tertiary montserrat-alternates-regular mb-4 text-center">
              GlowUp vs Traditional Renovation Cost Calculator
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-base sm:text-lg mb-2">
                  Tile Square Footage
                </label>
                <input
                  type="number"
                  value={tileSquareFootage}
                  onChange={(e) => setTileSquareFootage(parseFloat(e.target.value))}
                  placeholder="Enter tile square footage"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg mb-2">
                  Floor Square Footage
                </label>
                <input
                  type="number"
                  value={floorSquareFootage}
                  onChange={(e) => setFloorSquareFootage(parseFloat(e.target.value))}
                  placeholder="Enter floor square footage"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg mb-2">
                  Cabinet Linear Footage
                </label>
                <input
                  type="number"
                  value={cabinetUnits}
                  onChange={(e) => setCabinetUnits(parseFloat(e.target.value))}
                  placeholder="Enter linear footage of cabinets"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg mb-2">Trim Feet</label>
                <input
                  type="number"
                  value={trimFeet}
                  onChange={(e) => setTrimFeet(parseFloat(e.target.value))}
                  placeholder="Enter trim feet"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
            </div>
            <button
              onClick={handleCalculate}
              className="bg-primary text-tertiary py-2 px-6 rounded-md hover:bg-tertiary hover:text-primary transition-colors w-full sm:w-auto"
            >
              Calculate
            </button>
            <div className="mt-8 text-left w-full">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-1/2 bg-secondary p-4 mb-4 sm:mb-0 sm:mr-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-2">GlowUp Costs</h3>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Tile:</strong> ${tileCost}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Floor:</strong> ${floorCost}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Cabinet:</strong> ${cabinetCost}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Trim:</strong> ${trimCost}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Total:</strong> ${totalCost}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 bg-secondary p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-2">Full Replacement Costs</h3>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Tile:</strong> ${tileFullReplacement}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Floor:</strong> ${floorFullReplacement}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Cabinet:</strong> ${cabinetFullReplacement}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Trim:</strong> ${trimFullReplacement}
                  </p>
                  <p className="text-base sm:text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Total:</strong> ${fullReplacementCost}
                  </p>
                </div>
              </div>
              <p className="text-xl sm:text-2xl text-center text-tertiary montserrat-bold mt-4">
                <strong>Total Savings:</strong> ${savings}
              </p>
            </div>
          </div>

          <ServiceCard
            title="Refresh"
            image="/tiled.jpg" // Replace with your image path
            description="Bring your old tiles back to life with our one-of-a-kind cleaning, resealing, and staining process. Our meticulous attention to detail ensures every tile looks brand new, giving your floors a fresh and vibrant appearance. This cost-effective solution revitalizes your space without the high expense of replacing all your tiles."
          />
          <ServiceCard
            title="Refurbish"
            image="/floor.jpg" // Replace with your image path
            description="Our floor refurbishing service revitalizes your flooring with expert sanding, staining, and sealing for a polished finish. Transform your worn-out floors into stunning surfaces that enhance the beauty of your home. Save significantly on costs by refurbishing instead of opting for a full floor replacement."
            reverse
          />
          <ServiceCard
            title="Repair"
            image="/trim.jpg" // Replace with your image path
            description="We repair and restore your cabinets and trim, ensuring they are free from damage and look as good as new. Our skilled craftsmen handle every repair with precision, preserving the integrity and beauty of your woodwork. This approach is far more economical than a complete cabinetry and trim overhaul."
          />
          <ServiceCard
            title="Renew"
            image="/paint.jpg" // Replace with your image path
            description="Our paint renewal service gives your walls a fresh, even coat of paint, enhancing the beauty and ambiance of your home. Choose from a variety of colors and finishes to create the perfect look for your living spaces. Renewing your paint is a budget-friendly way to achieve a transformative effect compared to extensive renovations."
            reverse
          />
        </div>
      </section>
    </main>
  );
}

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  reverse?: boolean;
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
