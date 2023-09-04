import React from 'react'
import aboutimg from '../aboutimg.jpg';
import '../index.css';

function About() {
  return (
    <div>
        <section class="bg-white lg:h-screen dark:bg-gray-900">
    <div class="grid  lg:px-8  mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 transition duration-300 ease-in-out">
    <div class="mt-10 lg:mr-20 lg:ml-36 px-10 lg:col-span-7 ">
    <div class="animate-fade-out flex items-center lg:mb-10">
  <div class=" lg:w-28 w-12 border-t mb-2 mr-2 border-gray-800"></div>
  <h4 class="max-w-2xl mb-2 text-xl text-gray-800 font-extrabold tracking-tight leading-none m dark:text-white tracking-wide leading-normal	lg:leading-loose
">ABOUT US</h4>
</div>
<h1 class="animate-fade-out max-w-2xl mb-4 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide leading-normal	lg:leading-loose
">Our agency started back in 2002</h1>
            <img class="animate-fade-out lg:mt-5" src={aboutimg} alt='IntroImg' />
        </div> 
        <div class="animate-slide-in-up ml-16 mx-auto lg:pt-44 lg:mr-36 py-12 lg:col-span-5 ">
            <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            <p class="max-w-2xl my-8 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide leading-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4">
        <h2 class="title-font font-medium sm:text-5xl text-3xl text-gray-900">12+</h2>
        <p class="leading-relaxed">YEARS EXPERIENCE</p>
      </div>
      <div class="p-4">
        <h2 class="title-font font-medium sm:text-5xl text-3xl text-gray-900">70K</h2>
        <p class="leading-relaxed">PROJECTS DONE</p>
      </div>
      <div class="p-4">
        <h2 class="title-font font-medium sm:text-5xl text-3xl text-gray-900">500+</h2>
        <p class="leading-relaxed">SATISFIED CLIENTS</p>
      </div>
      <div class="p-4">
        <h2 class="title-font font-medium sm:text-5xl text-3xl text-gray-900">48+</h2>
        <p class="leading-relaxed">TEAM MEMBERS</p>
      </div>
    </div>
  </div>
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
