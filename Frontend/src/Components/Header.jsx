import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal.jsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [source, setSource] = useState("");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const openModal = () => {
    setSource("get-started");
    setOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        
        {/* OUTER FULL-WIDTH PADDING */}
        <div className="w-full px-3 sm:px-6">
          
          {/* INNER CONTAINER */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold cursor-pointer"
              >
                <span className="text-amber-500">Brand</span>Craft
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    className="relative group text-slate-200 hover:text-amber-400 font-medium transition"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full" />
                  </motion.a>
                ))}

                {/* CTA */}
                <button
                  onClick={openModal}
                  className="ml-4 bg-amber-400 text-slate-900 px-5 py-2 rounded-xl font-semibold hover:bg-amber-500 transition"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-200 hover:text-amber-400 font-medium"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <button
                  onClick={openModal}
                  className="w-full mt-4 bg-amber-400 text-slate-900 py-3 rounded-xl font-semibold"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
      />
    </>
  );
};

export default Header;
