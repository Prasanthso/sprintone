import React from 'react'
import hero from '../heroimg.jpg';
import '../index.css';

const Hero = () => {
  return (
    <div>
      <section class="bg-black h-screen dark:bg-gray-900">
    <div class="grid  px-8  mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 transition duration-300 ease-in-out">
        <div class="animate-slide-in-up mr-auto md:pt-44 md:ml-40 py-12 lg:col-span-6 ">
        <div class="flex items-center lg:mb-10">
  <div class=" lg:w-28 w-12 border-t mb-4 mr-2 border-gray-400"></div>
  <h4 class="max-w-2xl mb-4 text-xl text-white font-extrabold tracking-tight leading-none m dark:text-white tracking-wide leading-normal	lg:leading-loose
">WE ARE WEBSTUDIO</h4>
</div>

            <h1 class="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide leading-normal	lg:leading-loose
">We’re a web design agency from Los Angeles, CA</h1>
            <p class="max-w-2xl my-8 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8

">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor aliqua incididunt ut labore et dolore magna.</p>
            {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started 
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  */}
        </div>
        <div class="mt-10 md:mr-20 lg:col-span-6 lg:flex">
            <img class="animate-fade-out lg:mt-24" src={hero} alt='IntroImg' />
        </div>                
    </div>
</section>
    </div>
  )
}

export default Hero
