"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling 100vh (hero section)
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Webmail", href: "https://outlook.office365.com", external: true },
    { name: "Contact Us", href: "/contact", highlighted: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-slate-900" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Company Logo */}
            <a
              href="/"
              className="relative group flex-shrink-0 z-10"
              aria-label="Folton Marine Services Home"
            >
              <Image
                src="/folton.png"
                alt="Folton Marine Services Logo"
                width={150}
                height={60}
                priority
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    link.highlighted
                      ? "px-6 py-2.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 border border-slate-700"
                      : activeLink === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: "fadeIn 0.5s ease-out forwards",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 text-white hover:text-white/80 transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-20 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Mobile Menu Panel */}
          <div
            className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-slate-900 shadow-2xl transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Nav Links */}
              <nav className="flex-1 p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`block px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                      link.highlighted
                        ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 text-center"
                        : activeLink === link.href
                        ? "bg-white/10 text-white"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      opacity: isMobileMenuOpen ? 1 : 0,
                      animation: isMobileMenuOpen
                        ? "slideIn 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-white/10">
                <p className="text-white/60 text-sm text-center">
                  © 2025 Folton Marine Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
