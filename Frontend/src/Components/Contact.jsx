import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

// Set your admin email here
const ADMIN_EMAIL = "brandcraftduo@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  // Load token and email from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    const savedEmail = localStorage.getItem("adminEmail");
    if (savedToken && savedEmail) {
      setToken(savedToken);
      setEmail(savedEmail);
    }
  }, []);

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

      const res = await axios.post(
        "https://brandcraft-6yvg.onrender.com/api/user",
        {
          name: formData.name,
          email: formData.email,
        }
      );

      // Only set token if the email is admin
      if (res.data.token && formData.email === ADMIN_EMAIL) {
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("adminEmail", formData.email);
        setToken(res.data.token);
        setEmail(formData.email);
      }

      setMessage({
        text: "Thanks! We’ll contact you shortly.",
        type: "success",
      });
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      setMessage({ text: "Something went wrong. Try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // QR value only if admin token & email exist
  const qrValue =
    token && email === ADMIN_EMAIL
      ? `https://brand-craft-omega.vercel.app/admin/users?token=${token}&email=${email}`
      : null;

  // Function to download QR as PNG
  const downloadQR = () => {
    const canvas = document.getElementById("adminQR");
    if (!canvas) return;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "adminQR.png";
    link.click();
  };

  const showAdminQR = !!qrValue;

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
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

        {/* Admin QR */}
        {showAdminQR && (
          <>
            <QRCodeCanvas
              id="adminQR"
              value={qrValue}
              size={300}
              level="H"
              bgColor="#ffffff"
              fgColor="#000000"
            />
            <button
              onClick={downloadQR}
              className="mt-4 px-6 py-2 bg-amber-400 rounded-full font-semibold hover:bg-amber-500 text-slate-900"
            >
              Download QR
            </button>
          </>
        )}

        {/* Email & Call Buttons */}
<div className="flex justify-center gap-4 mt-6">
<a
  href="https://mail.google.com/mail/?view=cm&to=brandcraftduo@gmail.com&su=Inquiry%20from%20Website&body=Hi%20BrandCraft%2C%0A%0AI%20would%20like%20to%20discuss..."
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-200 text-blue-950 transition"
>
  Email Us
</a>

  <a
    href="tel:+911234567890" // replace with your phone number
    className="px-6 py-3 bg-amber-400 rounded-full font-semibold hover:bg-amber-500 text-white transition"
  >
    Call Now
  </a>
</div>

      </div>
    </section>
  );
};

export default Contact;
