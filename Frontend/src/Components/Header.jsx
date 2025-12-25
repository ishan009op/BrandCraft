import React,{useState} from 'react'
import { Menu, X } from 'lucide-react';
const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
     <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-amber-500">Brand</span>Craft
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-amber-500 transition">Services</a>
              <a href="#why-us" className="hover:text-amber-500 transition">Why Us</a>
              <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3">
            <a href="#services" className="block hover:text-amber-500">Services</a>
            <a href="#why-us" className="block hover:text-amber-500">Why Us</a>
            <a href="#contact" className="block hover:text-amber-500">Contact</a>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header