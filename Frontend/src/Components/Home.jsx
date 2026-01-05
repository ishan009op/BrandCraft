import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const { scrollY } = useScroll();
  const cardY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">

      {/* Animated grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating light panels */}
      <motion.div
        className="absolute top-[-20%] left-[10%] w-[280px] h-[500px] bg-white/5 rotate-12 rounded-xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-30%] right-[15%] w-[220px] h-[420px] bg-amber-400/10 -rotate-6 rounded-xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.8 }}
            className="w-[3px] bg-amber-400 mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Design & Marketing
            <br />
            <span className="text-slate-300 font-medium">
              Built for Brands That Want Authority
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-slate-400 max-w-xl mb-10"
          >
            We partner with ambitious businesses to craft powerful
            visual identities and marketing systems that feel premium,
            intentional, and built to last.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-3 text-amber-400 font-semibold text-lg group"
          >
            Start a Project
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* RIGHT CARD (parallax) */}
        {/* RIGHT CARD (Animated Focus Panel) */}
<motion.div
  style={{ y: cardY }}
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ rotateX: 2, rotateY: -2 }}
  className="relative bg-slate-800 rounded-2xl p-10 shadow-2xl overflow-hidden"
>

  {/* Subtle animated border sweep */}
  <motion.div
    aria-hidden
    className="absolute inset-0 rounded-2xl"
    style={{
      background:
        "linear-gradient(120deg, transparent 30%, rgba(251,191,36,0.15), transparent 70%)",
    }}
    animate={{ x: ["-100%", "100%"] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  />

  {/* Content */}
  <div className="relative z-10">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-sm text-slate-400 mb-4"
    >
      What we focus on
    </motion.p>

    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.18 },
        },
      }}
      className="space-y-4 text-lg font-medium"
    >
      {[
        "Brand Identity & Visual Design",
        "Marketing Campaigns & Strategy",
        "Creative Direction & Content",
      ].map((item, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <motion.span
            className="w-2 h-2 bg-amber-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Home;
