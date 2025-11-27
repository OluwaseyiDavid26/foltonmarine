// import Next from "next/link";
// import Navbar from "@/components/Navbar";
// import {
//   Target,
//   Compass,
//   TrendingUp,
//   Award,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   Anchor,
//   Ship,
// } from "lucide-react";

// const AboutPage = () => {
//   const strategyPoints = [
//     "Operate with the highest quality standards to our clients.",
//     "Build a diverse, inclusive and highly skilled workforce.",
//     "Conduct business in an open, honest and professional manner.",
//     "Manage and maintain mutually beneficial long-term partnerships.",
//   ];

//   const coreValues = [
//     {
//       title: "Performance Driven",
//       description:
//         "We strive to perform optimally in all our operations. This is the bedrock of our existence.",
//       icon: TrendingUp,
//     },
//     {
//       title: "People Oriented",
//       description:
//         "Our people are our greatest assets and that is why we extend that to all of our partners, community members, suppliers and vendors.",
//       icon: Users,
//     },
//     {
//       title: "Process Efficient",
//       description:
//         "Our processes are streamlined and efficient. Reliability is at the core of our operations. This enables us with on time delivery to all our clients.",
//       icon: Sparkles,
//     },
//   ];

//   const teamMembers = [
//     {
//       name: "Kunle Bolodeoku",
//       position: "MD/CEO",
//       bio: "Kunle is the Chief Executive Officer/ Managing Director of the company. He is charged with the overall responsibility of strategy formulation, performance monitoring and improvement for the company.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       name: "Esther Ogbole",
//       position: "Executive Director, Community Relations and Marketing",
//       bio: "Ms Ogbole has been Executive Director at FMSL, Nigeria, since its inception in 2016. She graduated with a Bachelor's degree in Social Work and a master's degree in Social Work from Marshall University, WV, USA.",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       name: "Samuel Oluwatimilehin",
//       position: "Executive Director, Finance and Administration",
//       bio: "Samuel oversees the finance and administrative affairs at FMSL. He is a management graduate from the prestigious Warwick Business School, Coventry, UK.",
//       image:
//         "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       name: "Olusegun Adegbulugbe",
//       position: "Executive Director, Engineering and Operations",
//       bio: "Olusegun is a geology professional with over 10 years of experience. He holds an MSc in Oil and Gas Management from Regents University UK.",
//       image:
//         "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       name: "Admiral Afolabi Macaulay",
//       position: "Non-Executive Director",
//       bio: "He holds a B.Sc. Hons. in Economics and M.Sc. Hons. in Strategic Studies. He started his career with the Nigerian Navy and retired as a Rear Admiral.",
//       image:
//         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-slate-900 text-white py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 bg-blue-600/20 px-6 py-3 rounded-lg mb-8 border border-blue-500/30">
//               <Ship className="w-5 h-5 text-blue-400" />
//               <span className="text-blue-200 font-medium text-sm uppercase tracking-wider">
//                 Marine Services Excellence
//               </span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               About Folton Marine
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Navigating excellence in Nigeria's marine services industry
//               through innovation, expertise, and unwavering commitment to
//               quality.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-10">
//             <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <Target className="w-7 h-7 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 To be the preferred partner for reputable oil and gas firms'
//                 maritime and offshore security operations in Nigeria.
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <Compass className="w-7 h-7 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Our mission is to maximize value and deliver impeccable delivery
//                 processes across Nigeria's marine and energy industries.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Strategy Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
//               <TrendingUp className="w-5 h-5 text-blue-600" />
//               <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
//                 Strategic Direction
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Strategy
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Four pillars guiding our path to excellence
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {strategyPoints.map((point, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
//                   <CheckCircle2 className="w-5 h-5 text-white" />
//                 </div>
//                 <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
//               <Award className="w-5 h-5 text-blue-600" />
//               <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
//                 What Drives Us
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Core Values
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               The principles that guide everything we do
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {coreValues.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
//                 >
//                   <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
//                     <Icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Our Team */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
//               <Users className="w-5 h-5 text-blue-600" />
//               <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
//                 Leadership
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Experienced professionals driving excellence in marine services
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
//               >
//                 <div className="relative aspect-square overflow-hidden bg-gray-100">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 font-semibold mb-4 text-sm">
//                     {member.position}
//                   </p>
//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {member.bio}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - NEW FOOTER STYLE */}
//       <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <img
//             src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=1600&q=80"
//             alt="Ocean"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-4xl mx-auto px-6 text-center">
//           <Ship className="w-16 h-16 text-blue-400 mx-auto mb-8" />
//           <h2 className="text-4xl lg:text-5xl font-black mb-6">
//             Ready to Partner with Excellence?
//           </h2>
//           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
//             Let's discuss how Folton Marine Services can support your
//             operations.
//           </p>
//           <button className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 font-bold hover:bg-blue-600 hover:text-white transition-colors">
//             Get in Touch
//             <Anchor className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  Target,
  Compass,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  Anchor,
  Ship,
} from "lucide-react";

const AboutPage = () => {
  const strategyPoints = [
    "Operate with the highest quality standards to our clients.",
    "Build a diverse, inclusive and highly skilled workforce.",
    "Conduct business in an open, honest and professional manner.",
    "Manage and maintain mutually beneficial long-term partnerships.",
  ];

  const coreValues = [
    {
      title: "Performance Driven",
      description:
        "We strive to perform optimally in all our operations. This is the bedrock of our existence.",
      icon: TrendingUp,
    },
    {
      title: "People Oriented",
      description:
        "Our people are our greatest assets and that is why we extend that to all of our partners, community members, suppliers and vendors.",
      icon: Users,
    },
    {
      title: "Process Efficient",
      description:
        "Our processes are streamlined and efficient. Reliability is at the core of our operations. This enables us with on time delivery to all our clients.",
      icon: Sparkles,
    },
  ];

  const teamMembers = [
    {
      name: "Kunle Bolodeoku",
      position: "MD/CEO",
      bio: "Kunle is the Chief Executive Officer/ Managing Director of the company. He is charged with the overall responsibility of strategy formulation, performance monitoring and improvement for the company.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Esther Ogbole",
      position: "Executive Director, Community Relations and Marketing",
      bio: "Ms Ogbole has been Executive Director at FMSL, Nigeria, since its inception in 2016. She graduated with a Bachelor's degree in Social Work and a master's degree in Social Work from Marshall University, WV, USA.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Samuel Oluwatimilehin",
      position: "Executive Director, Finance and Administration",
      bio: "Samuel oversees the finance and administrative affairs at FMSL. He is a management graduate from the prestigious Warwick Business School, Coventry, UK.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Olusegun Adegbulugbe",
      position: "Executive Director, Engineering and Operations",
      bio: "Olusegun is a geology professional with over 10 years of experience. He holds an MSc in Oil and Gas Management from Regents University UK.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Admiral Afolabi Macaulay",
      position: "Non-Executive Director",
      bio: "He holds a B.Sc. Hons. in Economics and M.Sc. Hons. in Strategic Studies. He started his career with the Nigerian Navy and retired as a Rear Admiral.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-blue-600/20 px-6 py-3 rounded-lg mb-8 border border-blue-500/30">
              <Ship className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium text-sm uppercase tracking-wider">
                Marine Services Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Folton Marine
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Navigating excellence in Nigeria's marine services industry
              through innovation, expertise, and unwavering commitment to
              quality.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the preferred partner for reputable oil and gas firms'
                maritime and offshore security operations in Nigeria.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to maximize value and deliver impeccable delivery
                processes across Nigeria's marine and energy industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
                Strategic Direction
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars guiding our path to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-lg mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving excellence in marine services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4 text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
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
