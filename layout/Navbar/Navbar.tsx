import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b-2 bg-black-100 border-black-200 py-6 lg:py-8 fixed top-0 z-50  w-full">
      <div className="text-white justify-between px-6 mx-auto items-center max-w-screen-2xl flex    ">
        <Image alt="logo" width={55} height={49} src="/jsm-logo.svg" />
        <Image
          alt="logo"
          className="lg:hidden"
          width={40}
          height={40}
          src="/hamburger-menu.svg"
        />
        <div className="flex max-lg:gap-3 max-lg:hidden lg:gap-8">
          <p className="font-bold text-gradient_blue-purple">
            Next.js 13.4 Course
          </p>
          <p>Masterclass</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
