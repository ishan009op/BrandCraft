import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-500">Brand</span>Craft
              </h3>
              <p className="text-slate-400">
                Creative design & marketing solutions for growing businesses
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-400 hover:text-amber-500">Services</a>
                <a href="#why-us" className="block text-slate-400 hover:text-amber-500">Why Us</a>
                <a href="#contact" className="block text-slate-400 hover:text-amber-500">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>Email: hello@brandcraft.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p className="mb-2">
              © 2025 BrandCraft. All rights reserved.
            </p>
            <p className="text-sm">
              7+ years of real-world sales & marketing experience | One-point contact for design & marketing | Transparent pricing & clear timelines
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer