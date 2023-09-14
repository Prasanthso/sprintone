import React from "react";
import hero from "../heroimg.jpg";
import topcir from "../topleftcir.png";
import bottomcir from "../bottomrightcir.png";

import "../index.css";

const Hero = () => {
  return (
    <div>
      <section
        id="#"
        class="relative space-grotesk bg-black  px-5 dark:bg-gray-900"
      >
        <img
          src={topcir}
          alt="Top Left Image"
          className="animate-fade-out absolute top-0 -left-3 lg:w-40 lg:h-40 xl:w-52 xl:h-48 lg:block hidden"
        />
        <div class="grid  xl:px-8  xl:gap-0  lg:grid-cols-12 transition duration-300 ease-in-out">
          <div class="animate-slide-in-up mr-auto xl:pt-36 lg:pt-40 pt-12 md:ml-10 lg:ml-2 xl:ml-20  lg:col-span-10 xl:col-span-8 ">
            <div class="flex items-center lg:mb-2">
              <div class="relative lg:w-24 w-8 border-t mb-4 mr-4 border-gray-400"></div>
              <h4
                class="space-grotesk mb-4 text-lg text-white font-extrabold tracking-tight leading-none m dark:text-white tracking-wide
"
              >
                WE ARE WEBSTUDIO
              </h4>
            </div>

            <h1 class="mb-8 lg:text-7xl md:text-6xl sm:text-4xl text-4xl lg:w-11/12 md:w-5/6 sm:w-2/4 text-white font-extrabold tracking-tight leading-none  dark:text-white tracking-wide relative  z-20 lg:leading-tight">
              We’re a web design agency from Los Angeles, CA
            </h1>
            <p class="space-grotesk text-white relative z-20 my-12 lg:w-3/5  lg:mb-16 xl:w-1/2  xl:mb-28 md:text-lg lg:text-lg dark:text-gray-400 tracking-wide">
              Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit,
              sed do eiusmod tempor aliqua incididunt ut labore et dolore magna.
            </p>
          </div>

          <img
            class="absolute animate-fade-out lg:w-7/12 lg:mt-20 lg:right-8 xl:mt-10 xl:w-6/12 xl:right-28 z-10"
            src={hero}
            alt="IntroImg"
          />

          <img
            src={bottomcir}
            alt="Top Left Image"
            className="animate-fade-out absolute right-0 bottom-0  w-40 h-40 lg:block hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
