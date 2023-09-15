import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with Webstudio has been an amazing experience for our team at Facebook",
      author: "John Carter",
      position: "VP of Marketing at Facebook",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    },
    {
      id: 2,
      text: "What an excellent work! I highly recommend Webstudio for Design & Development services.",
      author: "Sophie Moore",
      position: "VP of Design at Pinterest",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    },
    // Add more testimonials as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonial = testimonials[activeIndex];
  return (
    <div>
      <section
        id="testmonials"
        class="space-grotesk bg-gray-100 dark:bg-gray-900"
      >
        <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
          <div class="w-full mb-20 ">
            <div class="animate-fade-out flex items-center lg:mb-10">
              <div class=" lg:w-24  w-12 border mb-4 mr-4 border-gray-600"></div>
              <h4
                class="max-w-2xl mb-4 text-xl  text-gray-800 font-extrabold tracking-tight leading-none m dark:text-white tracking-wide leading-normal	lg:leading-loose
        "
              >
                TESTIMONIALS
              </h4>
            </div>
            <h1 class="animate-fade-out text-4xl lg:text-7xl font-medium title-font mb-2 text-gray-900">
              What our client say
            </h1>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-1" data-aos="zoom-in">
            <figure class="flex flex-col  p-8  bg-black border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mb-8 text-3xl md:text-5xl md:ml-4 font-bold dark:text-gray-400">
                <p class="my-4 md:pr-40 text-white md:leading-snug leading-10 text-center">
                  “{testimonial.text}”
                </p>
              </blockquote>
              <figcaption class="container px-5 py-10 mx-auto flex flex-wrap">
                <img
                  class="h-20 w-20 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div class="space-y-0.5 ml-4  font-medium dark:text-white text-left">
                  <div class="text-2xl text-white">{testimonial.author}</div>
                  <div class="text-sm text-xl font-normal text-white dark:text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
                <div class="flex md:ml-auto md:mt-4 mt-6">
                  <button
                    onClick={handlePrev}
                    class="border border-2 mr-4 hover:text-white hover:border-white text-gray-600 border-gray-600   p-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-7 h-7"
                      viewBox="0 0 305 305"
                    >
                      <path d="M69.88 154.31l71.06 71.06a7.5 7.5 0 01-10.61 10.61l-83.18-83.18a7.5 7.5 0 010-10.61l83.18-83.18a7.5 7.5 0 0110.61 10.61l-71.06 71.06H297.5a7.5 7.5 0 010 15H69.88z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    class="border border-2 hover:text-white hover:border-white text-gray-600 border-gray-600 font-bold p-4 rounded-full"
                  >
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
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
