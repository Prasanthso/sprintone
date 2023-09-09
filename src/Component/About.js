import aboutimg from '../aboutimg.jpg';
import '../index.css';
import React, { useState } from 'react';


function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <section id="about" class="space-grotesk bg-white py-20 md:h-screen  dark:bg-gray-900">
    <div class="grid  lg:mx-20  lg:py-8 lg:grid-cols-12  transition duration-300 ease-in-out">
    <div class="mt-10  lg:col-span-6 mx-5 ">
    <div class="animate-fade-out flex items-center lg:mb-10">
  <div class=" lg:w-24 w-16 border-t mb-1 mr-2 border-gray-800"></div>
  <h4 class="  text-xl text-gray-800 font-extrabold tracking-tight leading-none m dark:text-white tracking-wide leading-normal	lg:leading-loose
">ABOUT US</h4>
</div>
<h1 class="animate-fade-out mb-4 text-4xl lg:text-7xl text-gray-800 font-extrabold tracking-tight  dark:text-white tracking-wide 	
">Our agency started back in 2002</h1>
            <img class="animate-fade-out h-3/3 z-40 w-2/5 absolute lg:block hidden" src={aboutimg} alt='IntroImg' />
        </div> 
        <div class="animate-slide-in-up  lg:col-span-6 mx-5 ">
            <p class="my-8 font-light text-gray-800 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-6">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            <p class="mt-8 font-light text-gray-800 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
            <section class="text-gray-600 body-font">
  <div class="container ">
    <div class="flex flex-wrap md:flex-wrap  text-center  mb-5">
      <div class="p-6">
        <h2 class="title-font font-medium  lg:text-7xl text-5xl text-gray-900">12<span class="text-violet-500">+</span></h2>
        <p class="leading-relaxed text-lg">YEARS EXPERIENCE</p>
      </div>
      <div class="p-6">
        <h2 class="title-font font-medium lg:text-7xl text-5xl text-gray-900">70<span class="text-violet-500">K</span></h2>
        <p class="leading-relaxed text-lg">PROJECTS DONE</p>
      </div>
      <div class="p-6">
        <h2 class="title-font font-medium lg:text-7xl text-5xl text-gray-900">500<span class="text-violet-500">+</span></h2>
        <p class="leading-relaxed text-lg">SATISFIED CLIENTS</p>
      </div>
      <div class="p-6">
        <h2 class="title-font font-medium lg:text-7xl text-5xl text-gray-900">48<span class="text-violet-500">+</span></h2>
        <p class="leading-relaxed text-lg">TEAM MEMBERS</p>
      </div>
    </div>
              </div>
              <img class="animate-fade-out md:h-2/3 md:w-3/6 lg:hidden block" src={aboutimg} alt='IntroImg' />
</section>
            {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started 
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  */}
        </div>               
    </div>
</section>
    </div>
  )
}

export default About
