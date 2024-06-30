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
    // Check for empty or invalid values
    if (
      isNaN(tileSquareFootage) ||
      isNaN(floorSquareFootage) ||
      isNaN(cabinetUnits) ||
      isNaN(trimFeet)
    ) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const tileReplacementCost = tileSquareFootage * 35;
    const floorReplacementCost = floorSquareFootage * 35;
    const cabinetReplacementCost = cabinetUnits * 300; // assuming each cabinet unit is $500
    const trimReplacementCost = trimFeet * 15; // assuming each foot of trim is $10

    const totalReplacementCost = (
      tileReplacementCost +
      floorReplacementCost +
      cabinetReplacementCost +
      trimReplacementCost
    ).toFixed(2);

    const tile = (tileReplacementCost * 0.55).toFixed(2);
    const floor = (floorReplacementCost * 0.55).toFixed(2);
    const cabinet = (cabinetReplacementCost * 0.55).toFixed(2);
    const trim = (trimReplacementCost * 0.55).toFixed(2);

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
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/nice-kitchen-2.png" // Replace with your image path
          alt="Our Services Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-24">
          <div className="bg-quart rounded-md bg-opacity-70 p-16 text-left max-w-[50%]">
            <p className="text-5xl text-tertiary montserrat-regular">
              Our Comprehensive Home Services
            </p>
          </div>
        </div>
      </div>

      <section className="w-full bg-white text-tertiary py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col space-y-16">
          {/* Calculator Section */}
          <div className="flex flex-col items-center bg-quart p-8 rounded-md shadow-md">
            <h2 className="text-3xl font-bold text-tertiary montserrat-alternates-regular mb-4">
              GlowUp vs Traditional Renovation Cost Calculator
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-lg mb-2">Tile Square Footage</label>
                <input
                  type="number"
                  value={tileSquareFootage}
                  onChange={(e) => setTileSquareFootage(parseFloat(e.target.value))}
                  placeholder="Enter tile square footage"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Floor Square Footage</label>
                <input
                  type="number"
                  value={floorSquareFootage}
                  onChange={(e) => setFloorSquareFootage(parseFloat(e.target.value))}
                  placeholder="Enter floor square footage"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Cabinet Linear Footage</label>
                <input
                  type="number"
                  value={cabinetUnits}
                  onChange={(e) => setCabinetUnits(parseFloat(e.target.value))}
                  placeholder="Enter linear footage of cabinets"
                  className="p-2 mb-4 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Trim Feet</label>
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
              className="bg-primary text-tertiary py-2 px-6 rounded-md hover:bg-tertiary hover:text-primary transition-colors"
            >
              Calculate
            </button>
            <div className="mt-8 text-left w-full">
              <div className="flex justify-between">
                <div className="w-full md:w-1/2 bg-secondary p-4 m-8 rounded-md shadow-md">
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>GlowUp Tile Cost:</strong> ${tileCost}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>GlowUp Floor Cost:</strong> ${floorCost}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>GlowUp Cabinet Cost:</strong> ${cabinetCost}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>GlowUp Trim Cost:</strong> ${trimCost}
                  </p>

                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>GlowUp Total Cost:</strong> ${totalCost}
                  </p>
                </div>
                <div className="w-full md:w-1/2 bg-secondary p-4 m-8 rounded-md shadow-md">
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Tile Full Replacement:</strong> ${tileFullReplacement}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Floor Full Replacement:</strong> ${floorFullReplacement}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Cabinet Full Replacement:</strong> ${cabinetFullReplacement}
                  </p>
                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Trim Full Replacement:</strong> ${trimFullReplacement}
                  </p>

                  <p className="text-lg text-tertiary montserrat-regular mb-2">
                    <strong>Full Renovation Cost:</strong> ${fullReplacementCost}
                  </p>
                </div>
              </div>
              <p className="text-2xl text-center text-tertiary montserrat-bold mt-4">
                <strong>Total Savings:</strong> ${savings}
              </p>
            </div>
          </div>

          <ServiceCard
            title="Refresh"
            image="/tiled.jpg" // Replace with your image path
            description="Bring your old tiles back to life with our one-of-a-kind cleaning, resealing, and staining process. Our meticulous attention to detail ensures every tile looks brand new, giving your floors a fresh and vibrant appearance."
          />
          <ServiceCard
            title="Refurbish"
            image="/floor.jpg" // Replace with your image path
            description="Our floor refurbishing service revitalizes your flooring with expert sanding, staining, and sealing for a polished finish. Transform your worn-out floors into stunning surfaces that enhance the beauty of your home."
          />
          <ServiceCard
            title="Repair"
            image="/trim.jpg" // Replace with your image path
            description="We repair and restore your cabinets and trim, ensuring they are free from damage and look as good as new. Our skilled craftsmen handle every repair with precision, preserving the integrity and beauty of your woodwork."
          />
          <ServiceCard
            title="Renew"
            image="/paint.jpg" // Replace with your image path
            description="Our paint renewal service gives your walls a fresh, even coat of paint, enhancing the beauty and ambiance of your home. Choose from a variety of colors and finishes to create the perfect look for your living spaces."
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
}

function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className="flex flex-wrap items-center fade-in-section opacity-0 transition-opacity duration-1000">
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={`${title} Image`}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-tertiary montserrat-alternates-regular mb-4">
          {title}
        </h2>
        <p className="text-lg text-tertiary montserrat-regular">{description}</p>
      </div>
    </div>
  );
}
