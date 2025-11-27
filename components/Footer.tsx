// "use client";
// import React from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const services = [
//     "Security & Patrol Vessels",
//     "Tugboats",
//     "Shuttle Tankers",
//     "Terminal Services",
//     "Ship-To-Ship Services",
//   ];

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Our Services", href: "/services" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <footer className="bg-slate-900 text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold mb-2">
//                 Folton Marine Services
//               </h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 Providing unrivalled quality of service in the Marine Industry
//                 with comprehensive solutions for all your maritime needs.
//               </p>
//             </div>
//             {/* Social Media */}
//             <div>
//               <h4 className="text-sm font-semibold mb-4 text-slate-300">
//                 Follow Us
//               </h4>
//               <div className="flex gap-3">
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
//                   aria-label="Facebook"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-all duration-300"
//                   aria-label="Twitter"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-all duration-300"
//                   aria-label="Instagram"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <a
//                     href="/services"
//                     className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
//                 <div className="text-slate-400 text-sm leading-relaxed">
//                   <p>No. 39, B39 Close, Citec Estate,</p>
//                   <p>Mbora District, Abuja, FCT</p>
//                 </div>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
//                 <a
//                   href="tel:09068445165"
//                   className="text-slate-400 hover:text-white transition-colors duration-300"
//                 >
//                   09068445165
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
//                 <a
//                   href="mailto:info@foltonmarine.ng"
//                   className="text-slate-400 hover:text-white transition-colors duration-300"
//                 >
//                   info@foltonmarine.ng
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
//                 <div className="text-slate-400 text-sm">
//                   <p>Monday - Friday</p>
//                   <p>9:00 AM to 5:00 PM</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-slate-400 text-sm text-center md:text-left">
//               © {currentYear} Folton Marine Services Ltd. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <a
//                 href="#"
//                 className="text-slate-400 hover:text-white transition-colors duration-300"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-slate-400 hover:text-white transition-colors duration-300"
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Copy,
  Check,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@foltonmarine.ng");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left - Social Links */}
          <div className="flex md:justify-start justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Center - Email with Copy */}
          <div className="text-center">
            <button
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Copy
                className={`w-5 h-5 transition-all duration-300 ${
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <Check
                className={`w-5 h-5 absolute left-8 transition-all duration-300 ${
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
              <span className="font-semibold">info@foltonmarine.ng</span>
            </button>
            <p className="text-sm text-slate-400 mt-3">
              {copied ? "Email copied! ✓" : "Click to copy"}
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-slate-300 font-medium mb-2">Lagos, Nigeria</p>
            <a
              href="tel:+2349068445165"
              className="text-slate-400 hover:text-white transition-colors"
            >
              +234 906 844 5165
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm mb-2">
            Folton Marine Services © {currentYear}
          </p>
          <p className="text-slate-600 text-xs">
            Professional Marine Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
