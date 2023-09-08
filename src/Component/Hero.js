import React from 'react'
import hero from '../heroimg.jpg';
import '../index.css';

const Hero = () => {
  return (
    <div>
      <section class="space-grotesk bg-black h-screen px-5 dark:bg-gray-900">
    <div class="grid  lg:px-8  mx-auto  xl:gap-0 lg:py-8 lg:grid-cols-12 transition duration-300 ease-in-out">
        <div class="animate-slide-in-up mr-auto lg:pt-36 pt-12 md:ml-10 lg:ml-20  lg:col-span-8 ">
        <div class="flex items-center lg:mb-2">
  <div class=" lg:w-24 w-8 border-t mb-8 mr-4 border-gray-400"></div>
  <h4 class="space-grotesk mb-7 text-lg text-white font-extrabold tracking-tight leading-none m dark:text-white tracking-wide
">WE ARE WEBSTUDIO</h4>
</div>

            <h1 class="mb-4 lg:text-7xl md:text-6xl sm:text-4xl text-4xl lg:w-11/12 md:w-5/6 sm:w-2/4 text-white font-extrabold tracking-tight leading-none  dark:text-white tracking-wide relative  z-20 lg:leading-tight" >We’re a web design agency from Los Angeles, CA</h1>
            <p class="space-grotesk my-8 lg:w-2/4  md:w-3/4 text-white lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400 tracking-wide">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor aliqua incididunt ut labore et dolore magna.</p>
        </div>
        <div class=" lg:absolute  lg:right-28  sm:flex">
            <img class="animate-fade-out sm:mx-auto sm:h-5/6 sm:w-3/4 sm:mx-auto sm:mt-5 md:h-3/5 md:w-4/5 md:ml-10 lg:h-4/4 md:w-11/12 lg:mt-20" src={hero} alt='IntroImg' />
        </div>           
    </div>
</section>
    </div>
  )
}

export default Hero
