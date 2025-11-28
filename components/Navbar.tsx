// "use client";
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled(window.scrollY > 20);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Our Services", href: "/services" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Webmail", href: "https://outlook.office365.com", external: true },
//   ];

//   return (
//     <>
//       <nav
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-slate-800 shadow-lg"
//             : "bg-slate-800/95 backdrop-blur-sm"
//         }`}
//         role="navigation"
//         aria-label="Main navigation"
//       >
//         <div className="container mx-auto px-8 lg:px-12">
//           <div className="flex items-center justify-between h-16">
//             {/* Company Name Logo */}
//             <a
//               href="/"
//               className="text-white font-bold text-xl lg:text-2xl tracking-wide hover:text-gray-200 transition-colors"
//               aria-label="Folton Marine Services Home"
//             >
//               Folton Marine Services
//             </a>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   target={link.external ? "_blank" : undefined}
//                   rel={link.external ? "noopener noreferrer" : undefined}
//                   className="text-white font-medium hover:text-gray-300 transition-colors text-base"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-white hover:bg-slate-700 rounded-lg transition-colors"
//               aria-label="Toggle mobile menu"
//               aria-expanded={isMobileMenuOpen}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden fixed inset-0 top-16 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${
//             isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <div
//             className={`bg-slate-800 h-full overflow-y-auto shadow-2xl transition-transform duration-300 ${
//               isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="container mx-auto px-6 py-6 space-y-2">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   target={link.external ? "_blank" : undefined}
//                   rel={link.external ? "noopener noreferrer" : undefined}
//                   className="block px-4 py-3 text-white hover:bg-slate-700 rounded-lg font-medium transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
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
    { name: "Our Services", href: "#services" },
    { name: "Webmail", href: "https://outlook.office365.com", external: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
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
              <h1 className="text-slate-900 font-bold text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                Folton Marine Services
              </h1>
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
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    activeLink === link.href
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: "fadeIn 0.5s ease-out forwards",
                  }}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 text-slate-700 hover:text-slate-900 transition-colors duration-300"
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Mobile Menu Panel */}
          <div
            className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Nav Links */}
              <nav className="flex-1 p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium hover:bg-slate-50 rounded-lg transition-all duration-200 ${
                      activeLink === link.href ? "bg-blue-50 text-blue-600" : ""
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
              <div className="p-6 border-t border-slate-200">
                <p className="text-slate-500 text-sm text-center">
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
