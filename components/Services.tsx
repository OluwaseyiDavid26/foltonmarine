"use client";
import React, { useState, useEffect, useRef } from "react";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ModernServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Security & Patrol Vessels",
      image: "https://www.foltonmarine.ng/img/img6.jpg",
      description: "Advanced maritime security and patrol operations",
    },
    {
      id: 2,
      title: "Tugboats",
      image: "https://www.foltonmarine.ng/img/img4.jpg",
      description: "Professional vessel maneuvering and harbor assistance",
    },
    {
      id: 3,
      title: "Shuttle Tankers",
      image: "https://www.foltonmarine.ng/img/img5.jpg",
      description: "Efficient offshore oil and gas transportation",
    },
    {
      id: 4,
      title: "Terminal Services",
      image: "https://www.foltonmarine.ng/img/img2.jpg",
      description: "Comprehensive port and terminal operations",
    },
    {
      id: 5,
      title: "Ship-To-Ship Services",
      image: "https://www.foltonmarine.ng/img/img3.jpg",
      description: "Safe and efficient cargo transfer operations",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-card-id]");
            cards.forEach((card, index) => {
              setTimeout(() => {
                const cardId = parseInt(
                  card.getAttribute("data-card-id") || "0"
                );
                setVisibleCards((prev) => [...new Set([...prev, cardId])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: number) => visibleCards.includes(id);

  return (
    <div className="min-h-screen bg-slate-50" id="services">
      {/* Hero Section - Centered with Fade In Animation */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fadeInUp">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              At Folton Marine Services, we endeavour to provide unrivalled
              quality of service in the Marine Industry. Our services cover a
              broad spectrum.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid - Creative Layout with Scroll Animations */}
      <div className="max-w-7xl mx-auto px-6 py-20" ref={sectionRef}>
        {/* First Row - Large + Small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Large Featured Card */}
          <div
            data-card-id={services[0].id}
            className={`md:col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-96 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
              isVisible(services[0].id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setHoveredId(services[0].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={services[0].image}
              alt={services[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold mb-3">{services[0].title}</h3>
                <p
                  className={`text-lg transition-all duration-500 ${
                    hoveredId === services[0].id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {services[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Small Card */}
          <div
            data-card-id={services[1].id}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-96 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
              isVisible(services[1].id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setHoveredId(services[1].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={services[1].image}
              alt={services[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-2">{services[1].title}</h3>
                <p
                  className={`text-sm transition-all duration-500 ${
                    hoveredId === services[1].id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {services[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Small + Large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Small Card */}
          <div
            data-card-id={services[2].id}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-96 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
              isVisible(services[2].id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setHoveredId(services[2].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={services[2].image}
              alt={services[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-2">{services[2].title}</h3>
                <p
                  className={`text-sm transition-all duration-500 ${
                    hoveredId === services[2].id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {services[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Large Featured Card */}
          <div
            data-card-id={services[3].id}
            className={`md:col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-96 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
              isVisible(services[3].id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setHoveredId(services[3].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={services[3].image}
              alt={services[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold mb-3">{services[3].title}</h3>
                <p
                  className={`text-lg transition-all duration-500 ${
                    hoveredId === services[3].id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {services[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row - Full Width */}
        <div className="grid grid-cols-1 gap-6">
          <div
            data-card-id={services[4].id}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-80 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl ${
              isVisible(services[4].id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setHoveredId(services[4].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={services[4].image}
              alt={services[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex items-center">
              <div className="max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {services[4].title}
                </h3>
                <p
                  className={`text-xl text-white transition-all duration-500 ${
                    hoveredId === services[4].id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {services[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ModernServicesSection;
