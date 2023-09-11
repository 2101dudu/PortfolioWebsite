function Footer() {
    return(
        <div class="bg-tempblack">
          <div class="-top-10 h-10 2xl:-top-40 2xl:h-40 -z-10 relative bg-tempblack"></div>
          <div class="max-w-screen-xl px-8 md:px-12 lg:px-4 mx-auto h-20 md:h-28 flex justify-between pt-3 md:pt-10">
            <div class="flex min-[540px]:w-1/2 lg:w-1/3 pt-2.5 justify-between">
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">eduardo21faria@gmail.com</div>
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">|</div>
              <div class="text-tempwhite text-xs sm:text-sm md:text-base font-lato font-normal">+351 918718340</div>
            </div>
            <div class="flex w-1/6 justify-between">
              <a class="duration-200 ease-in-out hover:scale-105" href="https://www.linkedin.com/in/FariaEduardo/" target="_blank">
                <img class="min-[540px]:w-8 sm:w-10" src="src/assets/LinkedIn_Logo.png" alt="LinkedIn Logo"></img>
              </a>
              <a class="duration-200 ease-in-out hover:scale-105" href="https://github.com/2101dudu" target="_blank">
                <img class="min-[540px]:w-8 sm:w-10" src="src/assets/GitHub_Logo.png" alt="GitHub Logo"></img>
              </a>
            </div>
          </div>
          <h2 class="min-[540px]:text-xs sm:text-base text-center font-lato text-tempgray duration-300 hover:text-tempwhite pb-2">© 2023 Eduardo Faria</h2>
        </div>
    );
}

export default Footer;