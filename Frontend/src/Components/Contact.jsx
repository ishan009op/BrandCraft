import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    try {
      setLoading(true);
      setMessage({ text: "", type: "" });

      await axios.post("https://brandcraft-6yvg.onrender.com/api/user", {
        name: formData.name,
        email: formData.email,
      });

      setMessage({ text: "Thanks! We’ll contact you shortly.", type: "success" });
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      setMessage({ text: "Something went wrong. Try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Solid Background Shapes */}
      <motion.div
        className="absolute top-10 left-[-50px] w-28 h-28 bg-amber-500 rounded-xl"
        animate={{ y: [0, 40, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[-60px] w-32 h-32 bg-green-500 rounded-2xl"
        animate={{ y: [0, -50, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-10 w-20 h-20 bg-cyan-500 rounded-full"
        animate={{ x: [0, 30, 0], y: [0, -30, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-20 w-24 h-24 bg-indigo-500 rounded-lg"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: [0, -180, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Ready to Build Your Brand?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-slate-300 mb-12"
        >
          Let's discuss how BrandCraft can help grow your business.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0F172A]/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8 overflow-hidden"
        >
          {/* Inline Message */}
          <AnimatePresence>
            {message.text && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`p-3 rounded-md text-sm font-medium mb-4 ${
                  message.type === "error"
                    ? "bg-red-600/70 text-white"
                    : "bg-emerald-500/70 text-white"
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-slate-900 py-3 rounded-full font-semibold hover:bg-amber-500 transition flex justify-center items-center gap-2"
          >
            {loading && (
              <motion.span
                className="w-5 h-5 border-2 border-t-slate-900 border-slate-900 rounded-full animate-spin"
              />
            )}
            {loading ? "Sending..." : "Get in Touch"}
          </button>
        </motion.form>

        {/* Quick Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center z-10 relative">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishanzcreativity@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition shadow-lg"
          >
            Email Us
          </motion.a>

          <motion.a
            href="tel:+919592397086"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Call Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
