import React from "react";
import FlipcardAyur from "./FlipcardAyur";
import { ayushItems } from "../data";

// import skills data
import {Fade, Bounce} from "react-awesome-reveal";
import {Link} from "react-scroll";

const SpecialTreatments = () => {
  return (
    <section id="specialTreatments" style={{backgroundColor: "#C8DF52", paddingTop: 2}} className="section bg-[#b4f9fda1] pb-32 ">
      <div className="container mx-auto text-center">
          <Fade cascade damping={0.3}>
          <h2 className="text-5xl font-primary font-extrabold mb-4 mt-[5rem]">
            Specialized Treatments{" "}
          </h2>

          <p className=" text-2xl max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
        We also offer specialized treatments for all the below issues. Click each image to know more.
          </p>
          </Fade>
        <Bounce delay={1500} >
          <Link
              to={"contact"}
              smooth={true}
              offset={-120}
              activeClass="active"
              spy={true}
              className="font-bold hover:text-red-600 transition-all duration-300"
              href="#"
          >
            <span className="text-3xl  max-w-[240px] mx-auto px-6 lg:px-0 mb-[20px]"> Contact us for more info or to book an appointment today !</span>
          </Link>
        </Bounce>

          <div className="lg:grid lg:grid-cols-4 gap-20">
            {ayushItems.map((ayur, index) => (
                <FlipcardAyur
                    key={index}
                    imageUrl={ayur.imageUrl}
                    name={ayur.name}
                    description={ayur.description}
                />
            ))}
          </div>
      </div>
    </section>
  );
};

export default SpecialTreatments;
