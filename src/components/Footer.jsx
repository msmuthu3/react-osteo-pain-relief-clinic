import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-darker py-[24px] text-white text-sm text-center">
        <div className="container mx-auto">Copyright &copy; {(new Date().getFullYear())},  Miracle Osteo Pain Relief Clinic</div>
         <div className="container mx-auto">All rights Reserved</div>
    </footer>
  );
};

export default Footer;
