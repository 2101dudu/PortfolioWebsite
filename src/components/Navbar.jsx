import React from 'react';



function Navbar() {
  return (
    <nav class="invisible md:visible bg-tempwhite fixed w-full z-20 top-0 left-0 border-b border-gray-200">
          <div class="max-w-screen-xl flex justify-between mx-auto md:pl-12 lg:pl-4">
            <button id="backToTopButton" class="flex items-center">
                <span class="self-center text-4xl font-black font-lato whitespace-nowrap text-tempblack dark:text-tempwhite">Eduardo Faria</span>
            </button>
            <div class="items-center justify-end hidden w-full md:flex md:max-w-md lg:max-w-xl md:order-1 md:pr-12 lg:pr-4" id="navbar-sticky">
              <ul class="flex flex-row md:my-2 lg:my-4 space-x-5 lg:space-x-10">
                <li class="pt-2 pr-1">
                  <button id="backToAboutMeButton" class="w-full text-right md:duration-300 md:hover:scale-105 md:text-l lg:text-xl block pt-1 font-lato font-bold text-tempblack">About me</button>
                </li>
                <li>
                  <button id="backToProjectsButton" class="md:duration-300 md:hover:scale-105 shadow-xl p-1 px-5 rounded-xl items-center block bg-gradient-to-tr from-tempdarkblue to-templightblue">
                    <div class="md:text-l lg:text-xl p-2 font-lato font-bold text-tempwhite">Projects</div>
                  </button>
                </li>
                <li>
                  <button id="backToContactMeButton" class="md:duration-300 md:hover:scale-105 shadow-xl p-1 px-3 lg:px-5 rounded-xl block bg-gradient-to-tr from-tempdarkgreen to-templightgreen">
                    <div class="md:text-l lg:text-xl p-2 font-lato font-bold text-tempwhite">Contact Me</div>
                  </button>
                </li>
              </ul>
             </div>
          </div>
        </nav>
    );
  }
  
  
export default Navbar;