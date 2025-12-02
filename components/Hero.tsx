"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: "https://www.foltonmarine.ng/img/img1.jpg",
      title: "Efficient service delivery",
      subtitle:
        "Professional marine solutions tailored to your operational needs",
    },
    {
      image: "https://www.foltonmarine.ng/img/img2.jpg",
      title: "Trusted maritime solutions",
      subtitle: "Decades of experience in offshore operations and logistics",
    },
    {
      image: "https://www.foltonmarine.ng/img/img5.jpg",
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
      {/* Background Images with Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[6000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
            }}
          />
          {/* Darker gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
      ))}

      {/* Content Overlay - Matching navbar padding */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
            <div className="max-w-4xl">
              {/* Main Heading with animations */}
              <h1
                className={`text-white font-black mb-6 transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 drop-shadow-2xl animate-fadeInUp">
                  {slides[currentSlide].title}
                </span>
              </h1>

              {/* Subtitle with animations */}
              <p
                className={`text-white text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mb-10 leading-relaxed drop-shadow-lg transition-all duration-1000 delay-200 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons with staggered animations */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-400 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-slideInLeft"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 animate-slideInRight"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Stats with staggered fade-in animations */}
              <div
                className={`grid grid-cols-3 gap-6 lg:gap-10 max-w-3xl transition-all duration-1000 delay-600 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="group animate-fadeInUp"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="transform transition-all duration-300 hover:scale-110">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 drop-shadow-lg">
                      50+
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 uppercase tracking-wider font-semibold">
                      Vessels
                    </div>
                  </div>
                </div>
                <div
                  className="group animate-fadeInUp"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="transform transition-all duration-300 hover:scale-110">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 drop-shadow-lg">
                      25+
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 uppercase tracking-wider font-semibold">
                      Years
                    </div>
                  </div>
                </div>
                <div
                  className="group animate-fadeInUp"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="transform transition-all duration-300 hover:scale-110">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 drop-shadow-lg">
                      10K+
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 uppercase tracking-wider font-semibold">
                      Operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
