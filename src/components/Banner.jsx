import React from "react";

// import image
import {Fade} from "react-awesome-reveal";
import Image1 from "../assets/img/doctor1.jpeg";

// import components
import Header from "./Header";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-200 bg-gradient-to-t from-[#C8DF52] to-[#acd8e0]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-20">
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
        <Fade>
          <h1 className="font-primary font-black text-4xl lg:text-6xl text-primary pd-10  mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
           Miracle Osteo Pain Relief Clinic
          </h1>
          <span className="text-accent justify-end font-extrabold text-2xl">We care for you.</span>
        </Fade>
          <p className="max-w-sm mx-auto mb-[30px] lg:mx-0 lg:max-w-[540px]">
            Embark on a holistic wellness journey with us! Dive into tailored sessions for physiotherapy, soothing ayurvedic massage, rejuvenating osteopathy, and invigorating stretch therapy.
          </p>
          {/* Appointment */}
          <div  className="lg:absolute  max-w-[500px] h-[445px] lg:mx-0">
            <img src={Image1}  alt="" />
            <h4 className="text-2xl text-center mb-1 font-primary font-bold">Dr. Susanna Paul</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
