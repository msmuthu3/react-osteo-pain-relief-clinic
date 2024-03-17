import React from "react";

// import social icons
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
import {contactInfo} from "../data";

const Contact = () => {
  return (
    <section style={{backgroundColor: "#C8DF52"}}
      id="contact"
      className="bg-primary text-black min-h-[932px] section"
    >
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
                <p className="text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]">
                  {position}
                </p>
                <p className="max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0">
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
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
          <BsPinterest />
        </div>
    </section>
  );
};

export default Contact;
