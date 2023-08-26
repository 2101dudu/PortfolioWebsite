import React from 'react';



function Navbar() {
    return (
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center pl-4">
                <span class="self-center text-4xl font-black font-lato whitespace-nowrap text-tempblack dark:text-tempwhite">Eduardo Faria</span>
            </a>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pr-4" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li class="pt-2">
                  <a href="#" class="text-xl block py-2 font-lato font-bold pl-3 pr-4 text-tempblack md:pt-2">About me</a>
                </li>
                <li class="p-1 px-4 rounded-xl bg-gradient-to-l from-tempblue to-tempdarkblue">
                  <a href="#" class="text-xl block py-2 font-lato font-bold pl-3 pr-4 text-tempwhite md:pt-3">Projects</a>
                </li>
                <li class="p-1 px-4 rounded-xl bg-gradient-to-l from-templightgreen to-tempdarkgreen">
                  <a href="#" class="text-xl block py-2 font-lato font-bold pl-3 pr-4 text-tempwhite md:pt-3">Contact Me</a>
                </li>
              </ul>
             </div>
          </div>
        </nav>
    );
}


export default Navbar;

