import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Folton Marine Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Folton Marine Services - Tanker vessel at port"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Folton Marine Services Limited (FMSL) is an indigenous marine
              services provider incorporated under Nigerian laws in December
              2016. We provide a broad spectrum of services in the marine
              sector, including Security and Patrol Vessels, Shuttle Tankers,
              and Ship-to-Ship services.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Folton Marine Services, we endeavor to provide an unrivalled
              quality of service in the Marine Industry. Our services cover a
              broad spectrum.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Folton boasts of its security vessels (Fast Intervention and
              Surveillance Vessels-FSIV), and plans are underway to expand its
              operations in providing marine solutions and expertise to the
              offshore oil and gas industry. The team comprises highly skilled
              and experienced members.
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
