import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, MessageSquare, TrendingUp, Target, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design & Visual Branding",
      tagline: "We design visuals that make brands look professional & trustworthy",
      items: [
        "Social Media Post Design (Instagram, Facebook, LinkedIn)",
        "Catalogue Design (Product / Corporate / Retail)",
        "Flyer & Poster Design",
        "Brochure Design (Digital & Print)",
        "Menu Card Design (Restaurant / Cafe / Hotel)",
        "Banner, Standee & Hoarding Design",
        "Business Card & Stationery Design",
        "Brand Identity Design (Logo, Color Palette, Fonts)",
      ],
      bestFor: "Shops, startups, restaurants, manufacturers, service businesses",
    },
    {
      id: 2,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Content Creation",
      tagline: "We create content that connects with your audience",
      items: [
        "Social Media Content Creatives",
        "Marketing Captions & Copywriting",
        "Promotional Visual Content",
        "Reels / Post Content Planning",
        "Brand Messaging & Tone Setup",
      ],
      bestFor: "Businesses looking to strengthen their brand voice",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Management",
      tagline: "We manage your social presence so you can focus on business",
      items: [
        "Account Setup & Optimization",
        "Monthly Content Calendar",
        "Post Scheduling & Publishing",
        "Audience Engagement (Comments / DM strategy)",
        "Performance Tracking & Reporting",
      ],
      bestFor: "Busy entrepreneurs who need consistent online presence",
    },
    {
      id: 4,
      icon: <Target className="w-8 h-8" />,
      title: "Paid Marketing & Ads Management",
      tagline: "We help you reach the right audience with paid campaigns",
      items: [
        "Facebook & Instagram Ads",
        "Google Ads (Search / Display – Basic)",
        "Campaign Strategy & Setup",
        "Creative Ad Design & Copy",
        "Budget Planning & Performance Review",
      ],
      bestFor: "Businesses ready to scale with targeted advertising",
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "ATL & BTL Marketing Activities",
      tagline: "Offline & on-ground marketing execution with real experience",
      items: [
        "BTL Activities (Promotions, Branding, Sampling)",
        "ATL Campaign Planning",
        "Shop Branding & Visibility Activities",
        "Market Research & Field Execution",
        "Promotional Strategy & Reporting",
      ],
      bestFor: "Brands needing physical market presence and activation",
    },
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Account & Brand Management",
      tagline: "Complete marketing & communication handled under one roof",
      items: [
        "Client Coordination & Requirement Handling",
        "Campaign Planning & Execution",
        "Brand Communication Management",
        "Monthly Performance Review",
        "Long-term Growth Strategy",
      ],
      bestFor: "Growing businesses needing a dedicated marketing partner",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">What We Do at BrandCraft</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Creativity + Strategy + Execution — building premium brands with measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.id * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#0F172A]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-2xl cursor-pointer overflow-hidden group"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Floating Animated Shapes */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/30 to-green-400/30 rounded-full blur-2xl opacity-60 pointer-events-none"
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-cyan-400/30 to-indigo-400/30 rounded-full blur-2xl opacity-50 pointer-events-none"
                animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-amber-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.tagline}</p>
                <button className="text-amber-400 font-semibold flex items-center gap-2 group-hover:text-amber-500 transition">
                  {activeService === service.id ? "Hide Details" : "View Details"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Expanded content */}
                {activeService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 pt-4 border-t border-slate-700"
                  >
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-800 border border-amber-500 rounded-lg p-3">
                      <p className="text-sm text-slate-300">
                        <span className="font-semibold text-amber-400">Best for:</span> {service.bestFor}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Gradient border animation */}
              {/* <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-amber-400 via-green-400 to-cyan-400 pointer-events-none"
                style={{
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderImageSource: "linear-gradient(45deg, #FBBF24, #22D3EE, #10B981)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
