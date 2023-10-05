import React from "react";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <section className="nav-padding w-full">
      <div className="relative rounded-2xl flex-center bg-center bg-banner bg-cover items-center justify-center w-full min-h-[274px] flex-col">
        <h1 className="sm:heading1 text-center text-white heading2">
          JavaScript Mastery Resources
        </h1>
      </div>
      <SearchForm />
    </section>
  );
};

export default Hero;
