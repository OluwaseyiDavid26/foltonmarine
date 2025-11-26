import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Anchor } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=80"
          alt="Ocean"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Anchor className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss how Folton Marine Services can support your operations
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Phone Card */}
          <a
            href="tel:09068445165"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300 mb-1">Call Us</p>
                <p className="text-lg font-semibold">09068445165</p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@foltonmarine.ng"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300 mb-1">Email Us</p>
                <p className="text-lg font-semibold">info@foltonmarine.ng</p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
