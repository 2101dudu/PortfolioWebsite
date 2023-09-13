function Footer() {
    return(
        <div class="bg-tempblack">
          <div class="-top-10 h-10 2xl:-top-40 2xl:h-40 -z-10 relative bg-tempblack"></div>
          <div class="max-w-screen-xl px-8 md:px-12 mx-auto md:h-28 flex flex-col min-[470px]:flex-row space-y-4 min-[470px]:space-y-0 justify-between pb-4 min-[470px]:pb-0 pt-3 md:pt-10">
            <div class="flex w-full min-[470px]:w-3/5 md:w-1/2 lg:w-1/3 pt-2.5 justify-between">
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">eduardo21faria@gmail.com</div>
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">|</div>
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">+351 918718340</div>
            </div>
            <div class="flex w-auto min-[470px]:w-1/6 space-x-2 justify-around min-[470px]:justify-between">
              <a class="duration-200 ease-in-out hover:scale-105" href="https://www.linkedin.com/in/FariaEduardo/" target="_blank">
                <img class="min-[320px]:w-8 sm:w-10" src="src/assets/LinkedIn_Logo.png" alt="LinkedIn Logo"></img>
              </a>
              <a class="duration-200 ease-in-out hover:scale-105" href="https://github.com/2101dudu" target="_blank">
                <img class="min-[320px]:w-8 sm:w-10" src="src/assets/GitHub_Logo.png" alt="GitHub Logo"></img>
              </a>
            </div>
          </div>
          <h2 class="min-[320px]:text-xs sm:text-base text-center font-lato text-tempgray duration-300 transition-transform hover:text-tempwhite pb-2">© 2023 Eduardo Faria</h2>
        </div>
    );
}

export default Footer;