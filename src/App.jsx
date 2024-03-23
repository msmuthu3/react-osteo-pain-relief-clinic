import React from "react";

// import components
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Massages from "./components/Massages";
import SpecialTreatments from "./components/SpecialTreatments";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
      <div>
        <Banner />
        <Testimonials />
        <Massages/>
        <SpecialTreatments />
        <Pricing />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
  );
};

export default App;
