import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await axios.post("https://brandcraft-6yvg.onrender.com/api/user", {
        name: formData.name,
        email: formData.email,
      });

      setSuccess("Thanks! We’ll contact you shortly.");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-amber-500 to-amber-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Ready to Build Your Brand?
        </h2>

        <p className="text-xl text-slate-800 mb-8">
          Let's discuss how BrandCraft can help grow your business
        </p>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            {loading ? "Sending..." : "Get in Touch"}
          </button>

          {success && (
            <p className="mt-4 text-sm text-slate-700">{success}</p>
          )}
        </form>

        {/* QUICK CONTACT BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishanzcreativity@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition shadow-lg"
          >
            Email Us
          </a>

          <a
            href="tel:+919592397086"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
