import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden pt-24 pb-12">
      {/* Subtle Solid Animations */}
      <motion.div
        className="absolute top-10 left-10 w-6 h-6 bg-amber-500 rounded-sm opacity-60"
        animate={{ x: [0, 20, 0], y: [0, 10, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-12 w-8 h-8 bg-green-500 rounded-sm opacity-50"
        animate={{ x: [0, -20, 0], y: [0, -10, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-24 w-4 h-4 bg-cyan-400 rounded-sm opacity-40"
        animate={{ x: [0, 10, 0], y: [0, 5, 0], rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 left-24 w-5 h-5 bg-amber-400 rounded-sm opacity-50"
        animate={{ x: [0, -10, 0], y: [0, -5, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-500">Brand</span>Craft
            </h3>
            <p className="text-slate-400">
              Creative design & marketing solutions for growing businesses
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-amber-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#services"
                className="block text-slate-400 hover:text-amber-500 transition"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block text-slate-400 hover:text-amber-500 transition"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-slate-400 hover:text-amber-500 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" /> brandcraftduo@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" /> +91 95923-97086
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="mb-2">© 2025 BrandCraft. All rights reserved.</p>
          <p className="text-sm">
            7+ years of real-world sales & marketing experience | One-point contact for design & marketing | Transparent pricing & clear timelines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
