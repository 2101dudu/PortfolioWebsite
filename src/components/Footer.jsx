function Footer() {
    return(
        <div class="bg-tempblack">
          <div class="-top-10 h-10 2xl:-top-20 2xl:h-20 n-[2560px]:-top-40 min-[2560px]:h-40 -z-10 relative bg-tempblack"></div>
          <div class="max-w-screen-xl px-8 md:px-12 mx-auto md:h-28 flex flex-col min-[470px]:flex-row space-y-4 min-[470px]:space-y-0 justify-between pb-4 min-[470px]:pb-0 pt-3 2xl:pt-0 md:pt-10">
            <div class="flex w-full min-[470px]:w-3/5 md:w-1/2 lg:w-1/3 pt-2.5 justify-between">
              <div class="text-tempwhite text-[10px] min-[320px]:text-xs sm:text-sm md:text-base font-lato font-normal">eduardo21faria@gmail.com</div>
              <div class="text-tempwhite text-[10px] min-[320px]:text-xs sm:text-sm md:text-base font-lato font-normal">|</div>
              <div class="text-tempwhite text-[10px] min-[320px]:text-xs sm:text-sm md:text-base font-lato font-normal">+351 918718340</div>
            </div>
            <div class="flex w-auto min-[470px]:w-1/6 space-x-2 justify-around min-[470px]:justify-between">
              <a class="duration-200 ease-in-out hover:scale-105" href="https://www.linkedin.com/in/FariaEduardo/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 sm:w-10 fill-[#71717a] hover:fill-tempwhite duration-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a class="duration-200 ease-in-out hover:scale-105" href="https://github.com/2101dudu" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 sm:w-10 fill-[#71717a] hover:fill-tempwhite duration-300" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>              </a>
            </div>
          </div>
          <h2 class="text-xs sm:text-base text-center font-lato text-tempgray duration-300 hover:text-tempwhite pb-2">© 2023 Eduardo Faria</h2>
        </div>
    );
}

export default Footer;