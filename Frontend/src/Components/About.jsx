import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    {
      number: "7+",
      title: "Years Crafting Brands",
      description: "Experience across multiple industries delivering design & marketing solutions.",
    },
    {
      number: "100+",
      title: "Projects Delivered",
      description: "From startups to established businesses, we've helped brands grow and shine.",
    },
    {
      number: "50+",
      title: "Creative Experts",
      description: "A skilled team of designers, marketers, and strategists under one roof.",
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-24 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About BrandCraft
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            We craft brands that not only look stunning but connect with audiences, drive results, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-slate-800 rounded-2xl p-8 text-center relative overflow-hidden border border-slate-700 hover:border-amber-400 shadow-lg hover:shadow-2xl cursor-default"
            >
              {/* Glow Animation */}
              <motion.div
                className="absolute -top-16 -left-16 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"
                animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />

              <div className="text-5xl font-bold text-amber-400 mb-4">{stat.number}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{stat.title}</h3>
              <p className="text-slate-300 text-sm md:text-base">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
