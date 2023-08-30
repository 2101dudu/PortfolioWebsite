import React from 'react';



function Navbar() {
    return (
        <nav class="bg-tempwhite fixed w-full z-20 top-0 left-0 border-b border-gray-200">
          <div class="max-w-screen-xl flex justify-between mx-auto md:pl-12 lg:pl-4">
            <a href="" class="flex items-center">
                <span class="self-center text-4xl font-black font-lato whitespace-nowrap text-tempblack dark:text-tempwhite">Eduardo Faria</span>
            </a>
            <div class="items-center justify-end hidden w-full md:flex md:max-w-md lg:max-w-xl md:order-1 md:pr-12 lg:pr-4" id="navbar-sticky">
              <ul class="flex flex-row md:m-2 lg:mt-4 space-x-2 lg:space-x-10">
                <li class="pt-2">
                  <a href="#" class="md:text-l lg:text-xl block py-2 font-lato font-bold pl-3 pr-4 text-tempblack md:pt-2">About me</a>
                </li>
                <li>
                  <a href="#" class="shadow-xl p-1 px-4 rounded-xl block bg-gradient-to-tr from-tempdarkblue to-templightblue">
                    <div class="md:text-l lg:text-xl py-2 font-lato font-bold pl-3 pr-4 text-tempwhite md:pt-3">Projects</div>
                  </a>
                </li>
                <li>
                  <a href="#" class="shadow-xl p-1 px-3 lg:px-4 rounded-xl block bg-gradient-to-tr from-tempdarkgreen to-templightgreen">
                    <div class="md:text-l lg:text-xl py-2 font-lato font-bold pl-3 pr-4 text-tempwhite md:pt-3">Contact Me</div>
                  </a>
                </li>
              </ul>
             </div>
          </div>
        </nav>
    );
}


export default Navbar;

