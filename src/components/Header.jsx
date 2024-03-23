import React, { useEffect, useState } from "react";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import "../index.css"
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header
      className={`${
        bg && "bg-white shadow-md py-6"
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#">
          {/*<img src={Logo} alt='logo image' />*/}
          <h1 className=" text-1xs uppercase font-bold ">
            <span className="text-1xs text-wrap text-green-700 font-extrabold">Miracle</span>  <span className="text-2xs text-wrap">Osteo Pain Relief
            Clinic</span>
          </h1>
        </a>
        <span className={"text-1xs p-2"} ><PhoneInTalkIcon /> +1-(437)-326-7273</span>
          {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
