"use client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState, useEffect } from "react";
import {
  Target,
  Compass,
  TrendingUp,
  Award,
  Users,
  Ship,
  ArrowRight,
  Anchor,
  MapPin,
  Calendar,
  Shield,
  BarChart3,
} from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const strategyPillars = [
    {
      number: "01",
      title: "Quality Standards",
      description: "Operate with the highest quality standards to our clients.",
    },
    {
      number: "02",
      title: "Workforce Development",
      description: "Build a diverse, inclusive and highly skilled workforce.",
    },
    {
      number: "03",
      title: "Business Conduct",
      description:
        "Conduct business in an open, honest and professional manner.",
    },
    {
      number: "04",
      title: "Partnership Management",
      description:
        "Manage and maintain mutually beneficial long-term partnerships.",
    },
  ];

  const coreValues = [
    {
      title: "Performance Driven",
      description:
        "We strive to perform optimally in all our operations. This is the bedrock of our existence.",
      icon: TrendingUp,
      stat: "100%",
      label: "On-Time Delivery",
    },
    {
      title: "People Oriented",
      description:
        "Our people are our greatest assets and that is why we extend that to all of our partners, community members, suppliers and vendors.",
      icon: Users,
      stat: "24/7",
      label: "Support Available",
    },
    {
      title: "Process Efficient",
      description:
        "Our processes are streamlined and efficient. Reliability is at the core of our operations. This enables us with on time delivery to all our clients.",
      icon: Shield,
      stat: "ISO",
      label: "Certified Operations",
    },
  ];

  const teamMembers = [
    {
      name: "Kunle Bolodeoku",
      position: "MD/CEO",
      bio: "Kunle is the Chief Executive Officer/ Managing Director of the company. He is charged with the overall responsibility of strategy formulation, performance monitoring and improvement for the company.",
      image: "https://www.foltonmarine.ng/img/kunle.jpg",
      // expertise: ["Strategic Planning", "Operations", "Leadership"],
    },
    {
      name: "Esther Ogbole",
      position: "Executive Director, Community Relations and Marketing",
      bio: "Ms Ogbole has been Executive Director at FMSL, Nigeria, since its inception in 2016. She graduated with a Bachelor's degree in Social Work and a master's degree in Social Work from Marshall University, WV, USA.",
      image: "https://www.foltonmarine.ng/img/esther.jpg",
      // expertise: ["Community Relations", "Marketing", "Stakeholder Management"],
    },
    {
      name: "Samuel Oluwatimilehin",
      position: "Executive Director, Finance and Administration",
      bio: "Samuel oversees the finance and administrative affairs at FMSL. He is a management graduate from the prestigious Warwick Business School, Coventry, UK.",
      image: "https://www.foltonmarine.ng/img/samuel.jpg",
      // expertise: ["Financial Planning", "Administration", "Risk Management"],
    },
    {
      name: "Olusegun Adegbulugbe",
      position: "Executive Director, Engineering and Operations",
      bio: "Olusegun is a geology professional with over 10 years of experience. He holds an MSc in Oil and Gas Management from Regents University UK.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      // expertise: ["Engineering", "Operations", "Oil & Gas"],
    },
    {
      name: "Admiral Afolabi Macaulay",
      position: "Non-Executive Director",
      bio: "He holds a B.Sc. Hons. in Economics and M.Sc. Hons. in Strategic Studies. He started his career with the Nigerian Navy and retired as a Rear Admiral.",
      image: "https://www.foltonmarine.ng/img/admiral.jpg",
      // expertise: [
      //   "Maritime Security",
      //   "Strategic Advisory",
      //   "Naval Operations",
      // ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Minimal Hero */}
      <section className="relative bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm text-slate-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Abuja, Nigeria</span>
                <span className="text-slate-600">|</span>
                <Calendar className="w-4 h-4" />
                <span>Est. 2016</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Folton Marine
                <span className="block text-blue-500 font-normal">
                  Services Limited
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Nigeria's premier maritime and offshore security operations
                partner, delivering excellence through innovation and strategic
                precision.
              </p>

              <div className="flex items-center gap-8 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-bold text-white">8+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-500">
                    Operations Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-slate-500">
                    Industry Partners
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://www.foltonmarine.ng/img/img4.jpg"
                  alt="Maritime Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-slate-50 p-10 border border-slate-200 hover:border-blue-600 transition-colors">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    OUR VISION
                  </div>
                  <h3 className="text-3xl font-light text-slate-900">
                    Looking Forward
                  </h3>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the preferred partner for reputable oil and gas firms'
                maritime and offshore security operations in Nigeria, setting
                industry benchmarks for reliability, safety, and operational
                excellence.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-slate-50 p-10 border border-slate-200 hover:border-blue-600 transition-colors">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    OUR MISSION
                  </div>
                  <h3 className="text-3xl font-light text-slate-900">
                    Our Commitment
                  </h3>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To maximize value and deliver impeccable processes across
                Nigeria's marine and energy industries through innovative
                solutions, strategic partnerships, and an unwavering commitment
                to quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy - Grid Layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm text-blue-600 font-medium mb-3">
              STRATEGIC FRAMEWORK
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Our strategic approach is built on foundational principles that
              drive sustainable growth and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategyPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-slate-200 hover:border-blue-600 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-light text-slate-200 group-hover:text-blue-100 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="text-sm font-medium text-blue-600">
                    {pillar.number}
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Sophisticated Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm text-blue-600 font-medium mb-3">
              CORE VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-slate-50 p-8 border border-slate-200 hover:border-slate-300 transition-all h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                      <div className="text-right">
                        <div className="text-3xl font-bold text-slate-900">
                          {value.stat}
                        </div>
                        <div className="text-xs text-slate-500">
                          {value.label}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-slate-900 mb-3">
                      {value.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - Professional Grid */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm text-blue-400 font-medium mb-3">
              LEADERSHIP
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our Executive Team
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Seasoned professionals with deep industry expertise and a proven
              track record of excellence in maritime operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden group"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="aspect-square relative overflow-hidden bg-slate-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-400 mb-4">
                    {member.position}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
