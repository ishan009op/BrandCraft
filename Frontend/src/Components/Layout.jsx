import React, { useState } from 'react';

import Services from './Services';
import About from './About';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';

 function Layout() {
  
  

  

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
     <Header/>

      {/* Hero Section */}
      <Home/>
      {/* Services Section */}
     <Services/>

      {/* Why Choose Us Section */}
    <About/>

      {/* CTA Section */}
     <Contact/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default Layout