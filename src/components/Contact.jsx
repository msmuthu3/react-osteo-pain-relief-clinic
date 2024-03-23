import React from "react";

// import social icons
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import {contactInfo} from "../data";
import {Fade} from "react-awesome-reveal";
import {Divider} from "@mui/material";

const Contact = () => {
  return (
    <section style={{backgroundColor: "#C8DF52"}}
      id="contact"
      className="bg-primary text-black min-h-[500px] section"
    >
      <Fade cascade damping={0.3}>
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold">
          Contact Us
        </h2>

      <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">

      </p>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-[200px] ">
        {contactInfo.map((item, index) => {
          const {  name, position, description } = item;
          return (
              <div className="text-center lg:text-left mb-12" key={index}>
                <h4 className="text-2xl mb-2 font-primary font-bold">{name}</h4>
                <Divider/>
                <p className="text-2xl text-success max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0">
                  {description}
                </p>
              </div>
          );
        })}
      </div>
      </div>

        {/* social */}
        <div className="flex items-center justify-between mx-auto max-w-[205px]">
          <FiFacebook />
          <FiInstagram />
          <FiYoutube />
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
