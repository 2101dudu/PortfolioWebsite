function Footer() {
    return(
        <div class="bg-tempblack">
          <div class="-top-10 h-10 2xl:-top-40 2xl:h-40 -z-10 relative bg-tempblack"></div>
          <div class="max-w-screen-xl md:px-12 lg:px-4 mx-auto h-28 flex justify-between pt-10">
            <div class="flex md:w-1/2 lg:w-1/3 justify-between">
              <div class="text-tempwhite font-lato font-normal">eduardo21faria@gmail.com</div>
              <div class="text-tempwhite font-lato font-normal">|</div>
              <div class="text-tempwhite font-lato font-normal">+351 918718340</div>
            </div>
            <div class="flex w-28 justify-between">
              <a class="duration-200 ease-in-out hover:scale-105" href="https://www.linkedin.com/in/eduardo-faria-692736275" target="_blank">
                <img class="w-10 h-10" src="src/assets/LinkedIn_Logo.png" alt="LinkedIn Logo"></img>
              </a>
              <a class="duration-200 ease-in-out hover:scale-105" href="https://github.com/2101dudu" target="_blank">
                <img class="w-10 h-10" src="src/assets/GitHub_Logo.png" alt="GitHub Logo"></img>
              </a>
            </div>
          </div>
          <h2 class="text-center font-lato text-tempwhite pb-2">© 2023 Eduardo Faria</h2>
        </div>
    );
}

export default Footer;