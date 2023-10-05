import React from "react";
import { footerConstants } from "./constants/constants";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black-200">
      <div className="max-w-screen-2xl flex max-lg:flex-col gap-6  justify-between py-8 px-6 text-white-800 mx-auto ">
        <span>Copyright © 2023 JS Mastery Pro | All Rights Reserved</span>
        <div className="flex gap-x-4">
          {footerConstants.map((item, i) => (
            <span key={i} className="">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
