import React from 'react'

const About = () => {
  return (
    <>
      <section id="why-us" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BrandCraft?</h2>
            <p className="text-xl text-slate-300">
              Real experience. Real results. Real partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">7+</div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p className="text-slate-400">Real-world sales & marketing experience across industries</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Point of Contact</h3>
              <p className="text-slate-400">Complete design & marketing under one roof</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-slate-400">Clear pricing & realistic timelines, no surprises</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About