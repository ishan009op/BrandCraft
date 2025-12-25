import React from 'react'

const Contact = () => {
  return (
    <>
     <section id="contact" className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let's discuss how BrandCraft can help grow your business
          </p>
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
    </>
  )
}

export default Contact