import React from "react";
import blogimg1 from "../blogimg1.jpg";
import blogimg2 from "../blogimg2.jpg";



const Blog = () => {
  return (
    <div>
      <section id="blog" class="space-grotesk text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex items-center mx-5  mb-5 pt-10">
            <div class="animate-fade-out lg:w-24 w-12 border-t mb-2 mr-4 border-black"></div>
            <h4 class="max-w-2xl mb-2 text-xl text-black font-extrabold tracking-tight leading-none m dark:text-white">
              BLOG
            </h4>
          </div>
          <div class="py-12 flex flex-wrap md:flex-nowrap">
            <div class="flex-grow">
              <h1
                class="animate-fade-out lg:ml-16 ml-8 md:ml-8 max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide leading-normal	lg:leading-loose
"
              >
                Articles & resources
              </h1>
            </div>
            <div class="animate-fade-out md:mr-8 md:mb-0 mb-6 mx-auto flex-shrink-0 flex flex-col">
              <button class=" px-8 hover:bg-violet hover:text-black text-black font-semibold py-4 rounded-full border-black border">
                Browse all articles
              </button>
            </div>
          </div>
          <div class="flex flex-wrap mx-auto -mx-4 -mb-10" data-aos="fade-up">
            <div class="sm:w-1/2 mb-10 md:px-6">
              <img
                alt="ecommerce"
                class="w-full h-96 object-cover object-center rounded"
                src={blogimg1}
              />
              <h2 class="title-font text-4xl font-medium text-gray-900 mt-6 mb-3 hover:text-violet-500">
                The difference between UX & UI: A simple guide for beginners
              </h2>
              <p class="leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit
                sed do eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <div class="animate-fade-out w-full border-t mt-8 mt-6 border-black"></div>
              <div class="container  py-10 mx-auto flex flex-wrap">
                <button class="mt-3 px-6 text-black font-semibold  rounded-full border-black border">
                  UI/UX
                </button>
                {/* <button class=" text-black  border   focus:outline-none border-black rounded">
                  Branding
                </button> */}
                <h2 class="title-font text-lg font-medium text-gray-900 ml-2 mr-2 mt-6">
                  Jan 10, 2023
                </h2>
                <div class="flex ml-auto ">
                  <button class="border border-2 hover:text-white  text-black border-gray-600 font-bold p-4 rounded-full border hover:border-0  hover:bg-violet-500 font-bold  rounded-full">
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
              </div>
            </div>
            <div class="sm:w-1/2 mb-10 md:px-6">
              <div class="rounded-lg overflow-hidden">
                <img
                  alt="ecommerce"
                  class="w-full h-96 object-cover object-center rounded"
                  src={blogimg2}
                />
              </div>
              <h2 class="title-font text-4xl font-medium text-gray-900 mt-6 mb-3 hover:text-violet-500">
                Font sizes in web design: The complete guide to follow
              </h2>
              <p class="leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit
                sed do eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <div class="animate-fade-out w-full border-t mt-8 mt-6 border-black"></div>
              <div class="container py-10 mx-auto flex flex-wrap">
                <button class="mt-3 px-6 text-black font-semibold  rounded-full border-black border">
                  Branding
                </button>
                {/* <button class=" text-black  border   focus:outline-none border-black rounded">
                  Branding
                </button> */}
                <h2 class="title-font text-lg font-medium text-gray-900 ml-2 mt-6">
                  Jan 10, 2023
                </h2>
                <div class="flex ml-auto ">
                  <button class="border border-2 hover:text-white  text-black border-gray-600 font-bold p-4 rounded-full border hover:border-0  hover:bg-violet-500 font-bold  rounded-full">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
