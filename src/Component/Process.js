import React from "react";
import "../index.css";
import portfolioimg1 from "../processimg1.png";
import portfolioimg2 from "../processimg2.png";
import portfolioimg3 from "../processimg3.png";
import portfolioimg4 from "../processimg4.png";


const Process = () => {
  return (
    <div>
      <section id="process" class="space-grotesk text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="mb-20">
            <div class="flex items-center mx-5  mb-10 pt-10 ">
              <div class="animate-fade-out lg:w-24 w-12 border-t mb-2 mr-4 border-black"></div>
              <h4 class="max-w-2xl mb-2 text-xl text-black font-extrabold tracking-tight leading-none m dark:text-white ">
                PROCESS
              </h4>
            </div>
            <h1 class="animate-fade-out  mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-7xl xl:text-6xl dark:text-white">
              See how we works
            </h1>
          </div>
          <div class="animate-fade-out flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex border-2 border-black  p-4 md:p-8 sm:flex-row flex-col py-12 md:px-12">
                <div class="flex-grow">
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">01</h2>
                  <img class="h-36 w-36 my-16" alt="hero" src={portfolioimg1} />
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">
                    Concept
                  </h2>
                  <p class="leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    enim ad minim veniam, quis nostrud exercitati.
                  </p>
                </div>
              </div>
            </div>
            <div class="animate-fade-out p-4 lg:w-1/2 md:w-full ">
              <div class="flex border-2 border-black  p-4 md:p-8 sm:flex-row flex-col py-12 md:px-12">
                <div class="flex-grow">
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">02</h2>
                  <img class="h-36 w-36 my-16" alt="hero" src={portfolioimg2} />
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">Design</h2>
                  <p class="leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    enim ad minim veniam, quis nostrud exercitati.
                  </p>
                </div>
              </div>
            </div>
            <div class="animate-fade-out p-4 lg:w-1/2 md:w-full ">
              <div class="flex border-2 border-black  p-4 md:p-8 sm:flex-row flex-col py-12 md:px-12">
                <div class="flex-grow">
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">03</h2>
                  <img class="h-36 w-36 my-16" alt="hero" src={portfolioimg3} />
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">
                    Development
                  </h2>
                  <p class="leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    enim ad minim veniam, quis nostrud exercitati.
                  </p>
                </div>
              </div>
            </div>
            <div class="animate-fade-out p-4 lg:w-1/2 md:w-full ">
              <div class="flex border-2 border-black  p-4 md:p-8 sm:flex-row flex-col py-12 md:px-12">
                <div class="flex-grow">
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">04</h2>
                  <img class="h-36 w-36 my-16" alt="hero" src={portfolioimg4} />
                  <h2 class="text-gray-900  mb-3 text-5xl font-bold">Launch</h2>
                  <p class="leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    enim ad minim veniam, quis nostrud exercitati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
