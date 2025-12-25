import React from 'react'
import { ArrowRight } from 'lucide-react'
const Home = () => {
  return (
    <>
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creative Design & Marketing Solutions for Growing Businesses
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              From visual branding to digital & on-ground marketing — we help brands stand out and grow
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-amber-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home