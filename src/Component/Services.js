import React, { useState } from 'react';
import { useEffect } from 'react';

import { Parallax } from 'react-scroll-parallax';
import servicesimg1 from '../servicesimg1.png';
import servicesimg2 from '../servicesimg2.png';
import servicesimg3 from '../servicesimg3.png';
import servicesimg4 from '../servicesimg4.png';


const Services = () => {
    const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);

  const toggleSection1 = () => setSection1Visible(!section1Visible);
  const toggleSection2 = () => setSection2Visible(!section2Visible);
  const toggleSection3 = () => setSection3Visible(!section3Visible);
  const toggleSection4 = () => setSection4Visible(!section4Visible);
    return (
     
            <section id="services" class="space-grotesk text-gray-600 bg-gray-100  body-font overflow-hidden">
            <div class="container px-5 py-32 md:py-40 mx-auto">
            <div class="lg:w-1/2 w-full mb-20 ">
            <div class="animate-fade-out flex items-center lg:mb-10">
          <div class=" lg:w-24  w-12 border mb-4 mr-4 border-gray-600"></div>
          <h4 class="max-w-2xl mb-4 text-xl  text-gray-800 font-extrabold tracking-tight leading-none m dark:text-white tracking-wide leading-normal	lg:leading-loose
        ">OUR SERVICES</h4>
        </div>
                <h1 class="animate-fade-out text-4xl lg:text-7xl font-medium title-font mb-2 text-gray-900">We can help you</h1>
              </div>
              <div class="animate-slide-in-up -my-8 divide-y-2 divide-gray-400">
                <div class="py-10 flex flex-wrap md:flex-nowrap">
                <div class="flex-grow">
                    <h2 class="md:text-4xl text-2xl font-medium text-gray-900 title-font mb-2"><span class="mr-8">01</span> Web design</h2>
                  </div>
                  <div class=" md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <button onClick={toggleSection1} class="border border-black text-black font-extrabold  p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 305 305">
                <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z"/>
              </svg>
                </button>
                  </div>
                </div>
                {section1Visible && <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
              </div>
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={servicesimg1}/>
            </div>
          </div>
        </section>}
        <div class="py-10 flex flex-wrap md:flex-nowrap">
                <div class="flex-grow">
                    <h2 class="md:text-4xl text-2xl font-medium text-gray-900 title-font mb-2"><span class="mr-8">02</span>Web development</h2>
                  </div>
                  <div class=" md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <button onClick={toggleSection2} class="border border-black text-black font-semibold p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 305 305">
                <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z"/>
              </svg> 
                </button>
                  </div>
                </div>
                {section2Visible && <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
              </div> 
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={servicesimg2}/>
            </div>
          </div>
        </section>}
        <div class="py-10 flex flex-wrap md:flex-nowrap text-black">
                <div class="flex-grow">
                    <h2 class="md:text-4xl text-2xl font-medium text-gray-900 title-font mb-2"><span class="mr-8">03</span> UI/UX design</h2>
                  </div>
                  <div class=" md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <button onClick={toggleSection3} class="border border-black text-black font-semibold p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 305 305">
                <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z"/>
              </svg>
                </button>
                  </div>
                </div>
                {section3Visible && <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
              </div>
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={servicesimg3}/>
            </div>
          </div>
        </section>}
        <div class="py-10 flex flex-wrap md:flex-nowrap">
                <div class="flex-grow">
                    <h2 class="lg:text-4xl text-2xl font-medium text-gray-900 title-font mb-2"><span class="mr-8">04</span> Brand design</h2>
                  </div>
                  <div class=" md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <button onClick={toggleSection4} class="border border-black text-black font-extrabold  p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-7 h-7" viewBox="0 0 305 305">
                <path d="M235.12 150.69l-71.06-71.06a7.5 7.5 0 0110.61-10.61l83.18 83.18a7.5 7.5 0 010 10.61l-83.18 83.18a7.5 7.5 0 01-10.61-10.61l71.06-71.06H7.5a7.5 7.5 0 010-15h227.62z"/>
              </svg>
                </button>
                  </div>
                </div>
                {section4Visible && <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
              </div>
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={servicesimg4}/>
            </div>
          </div>
        </section>}
                
              </div>
            </div>
      </section>
        )
}


export default Services
