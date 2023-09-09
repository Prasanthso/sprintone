import React from "react";
import "../index.css";
import portfolioimg1 from "../portfolioimg1.png";
import portfolioimg2 from "../portfolioimg2.png";
import portfolioimg3 from "../portfolioimg3.png";
import topcir from "../topleftcir.png";
import bottomcir from "../bottomrightcir.png";

const Portfolio = () => {
  return (
    <div>
      <section
        id="portfolio"
        class="relative space-grotesk text-gray-600 py-20 bg-black body-font lg:px-32"
      >
        <img
          src={topcir}
          alt="Top Left Image"
          className="animate-fade-out absolute top-20 -left-4 w-52 h-52 lg:block hidden"
        />
        <div class="flex items-center mx-5  mb-5 pt-10 lg:pt-96">
          <div class="animate-fade-out lg:w-24 w-12 border-t mb-2 mr-4 border-white"></div>
          <h4
            class="max-w-2xl mb-2 text-xl text-white font-extrabold tracking-tight leading-none m dark:text-white  
"
          >
            PORTFOLIO
          </h4>
        </div>
        {/* <h1 class="animate-fade-out lg:ml-16 md:ml-28 max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide leading-normal	lg:leading-loose
">Our recent clients</h1> */}
        <div class="pb-8 flex flex-wrap md:flex-nowrap">
          <div class="flex-grow">
            <h1
              class="animate-fade-out lg:ml-16 ml-8 md:ml-8 max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide leading-normal	lg:leading-loose
"
            >
              Our recent clients
            </h1>
          </div>
          <div class="md:mr-8 md:mb-0 mb-6 mx-auto flex-shrink-0 flex flex-col">
            <button class=" px-8 hover:bg-white hover:text-black text-white font-semibold py-4 rounded-full border-white border">
              Browse portfolio
            </button>
          </div>
        </div>
        <div class="animate-slide-in-up container mx-auto flex px-5 py-10 md:py-24 lg:flex-row flex-col items-center ">
          <div class="lg:max-w-lg lg:w-full md:w-full w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center hover:scale-110 rounded"
              alt="hero"
              src={portfolioimg1}
            />
          </div>
          <div class="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-5 md:mt-10 flex flex-col md:items-start md:text-left items-center text-center">
            <a href="https://www.mdorthosystems.com/" aria-current="page">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:text-violet-500">
                MD Ortho
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum.Lorem ipsum dolor sit amet consectetur reprehe
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum.
              </p>
              <div class="flex flex-row ">
                <h1 class="title-font sm:text-2xl text-xl mb-4 mt-2 font-medium text-white hover:text-violet-500">
                  WEB DESIGN
                </h1>
                <button class="border hover:border-0  hover:bg-violet-500 text-white font-bold  md:ml-60 sm:ml-48 ml-20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-7 h-7"
                    viewBox="0 0 305 305"
                  >
                    <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z" />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>

        <div class="animate-slide-in-up container mx-auto flex px-5 py-10 md:py-24 lg:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-full  w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center hover:scale-110 rounded"
              alt="hero"
              src={portfolioimg2}
            />
          </div>
          <div class="lg:flex-grow lg:w-1/2  lg:px-24 md:pl-5 md:mt-10 flex flex-col md:items-start md:text-left items-center text-center">
            <a href="https://charismaq.com/" aria-current="page">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:text-violet-500">
                CharismaQ
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum.Lorem ipsum dolor sit amet consectetur reprehe
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum.
              </p>
              <div class="flex flex-row ">
                <h1 class="title-font sm:text-2xl text-xl mb-4 mt-2 font-medium text-white hover:text-violet-500">
                  WEB DESIGN
                </h1>
                <button class="border hover:border-0 hover:bg-violet-500 text-white font-bold md:ml-60 sm:ml-48 ml-20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-7 h-7"
                    viewBox="0 0 305 305"
                  >
                    <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z" />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div class="animate-slide-in-up container mx-auto flex px-5 py-10 md:py-24 lg:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center hover:scale-110 rounded"
              alt="hero"
              src={portfolioimg3}
            />
          </div>
          <div class="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-5 md:mt-10 flex flex-col md:items-start md:text-left items-center text-center">
            <a href="https://evergreenairconditioning.com/" aria-current="page">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:text-violet-500">
                Evergreen
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum.Lorem ipsum dolor sit amet consectetur reprehe
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum.
              </p>
              <div class="flex flex-row ">
                <h1 class="title-font sm:text-2xl text-xl mb-4 mt-2 font-medium text-white hover:text-violet-500">
                  UI/UX DESIGN
                </h1>
                <button class="border hover:border-0 hover:bg-violet-500 text-white font-bold md:ml-60 sm:ml-48 ml-20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-7 h-7"
                    viewBox="0 0 305 305"
                  >
                    <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z" />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
        <img
          src={bottomcir}
          alt="Top Left Image"
          className="animate-fade-out absolute right-0 bottom-0  w-40 h-40  lg:block hidden"
        />
      </section>
    </div>
  );
};

export default Portfolio;
