import React from "react";

// import image
import Image from "../assets/img/osteopathy-consultation.jpg";
import Image1 from "../assets/img/physiotherapy-clinic3.jpg";

// import components
import Header from "./Header";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#C8DF52] to-[#acd8e0]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-20">
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary -mt-1 mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
           Miracle Osteo Pain Relief Clinic <br />{" "}
            <span className="text-accent">We care for you.</span>
          </h1>
          <p className="max-w-sm mx-auto mb-[30px] lg:mx-0 lg:max-w-[540px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            architecto corrupti! Dolores rem dicta officia nam unde modi ad
            omnis.
          </p>
          {/* Appointment */}
          <div  className="lg:absolute mx-auto max-w-[475px] lg:mx-0">
            <img src={Image1}  alt="" />
          </div>
        </div>
        {/* Banner Image */}
       {/* <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={Image}  alt="" />
        </div>*/}
      </div>
    </section>
  );
};

export default Banner;
