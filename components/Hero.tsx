"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: "https://www.foltonmarine.ng/img/img1.jpg",
      tag: "Operations",
      title: "Efficient service delivery",
      subtitle:
        "Professional marine solutions tailored to your operational needs",
    },
    {
      image: "https://www.foltonmarine.ng/img/img2.jpg",
      tag: "Experience",
      title: "Trusted maritime solutions",
      subtitle: "Decades of experience in offshore operations and logistics",
    },
    {
      image: "https://www.foltonmarine.ng/img/img5.jpg",
      tag: "Support",
      title: "24/7 marine support",
      subtitle: "Always ready to support your operations, any time, anywhere",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Full Cover */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          {/* Dark overlay for text contrast - adjustable */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              {/* Top Tag */}
              <div
                className={`mb-6 transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              ></div>

              {/* Category Tag */}
              <div
                className={`mb-6 transition-all duration-700 delay-100 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-bold uppercase tracking-wider">
                  {slides[currentSlide].tag}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-white font-black mb-6 transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
                  {slides[currentSlide].title}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-white/90 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-400 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="/services"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wide text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Get Quote
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-8 max-w-2xl transition-all duration-700 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                    50+
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                    Vessels
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                    25+
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                    Years
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                    10K+
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                    Operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-white/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
