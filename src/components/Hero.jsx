
function Hero() {
    return (
        <div class="bg-tempwhite">
          <div class="bg-tempwhite min-[320px]:px-8 min-[320px]:pt-16 sm:pt-24 visible md:m-0 md:h-0 md:invisible w-full md:p-0">
            <h1 class="text-lato font-bold min-[320px]:text-4xl min-[470px]:text-5xl min-[540px]:text-6xl sm:text-7xl tracking-normal text-transparent bg-clip-text bg-gradient-to-bl from-tempdarkblue to-templightblue">Eduardo Faria</h1>
          </div>
          <div class="bg-tempwhite max-w-screen-xl flex justify-between mx-auto min-[320px]:space-x-2 sm:pt-8 md:pb-32 md:py-40 min-[320px]:px-8 md:px-12">
            <div class="max-w-md lg:max-w-xl pt-8">
              <div class="w-full m-0 pb-8">
                <h1 class="text-lato text-tempblack font-bold min-[320px]:text-2xl min-[470px]:text-3xl sm:text-5xl md:text-6xl tracking-normal">Front-end <span class="text-transparent bg-clip-text bg-gradient-to-l from-tempdarkgreen to-templightgreen md:from-tempdarkblue md:to-templightblue">Software Engineer</span>👨‍💻</h1>
              </div>
              <h2 class="text-lato text-tempblack font-medium min-[320px]:text-base min-[470px]:text-xl min-[540px]:text-2xl sm:text-3xl md:text-4xl pb-8">Based in Braga, student at the University of Minho.</h2>
              <ul class="invisible h-0 md:visible md:h-auto flex justify-between min-[320px]:space-x-3 min-[470px]:space-x-5 min-[540px]:space-x-8 sm:space-x-10 lg:space-x-24">
                <li class="duration-300 transition-transform ease-in-out hover:scale-105 min-[320px]:w-6 min-[470px]:w-8 sm:w-10 md:w-14">
                  <img src="src/assets/Html_Logo.png" alt="Html Logo"></img>
                </li>
                <li class="duration-300 transition-transform ease-in-out hover:scale-105 min-[320px]:w-6 min-[470px]:w-8 sm:w-10 md:w-14">
                  <img src="src/assets/Css_Logo.png" alt="Css Logo"></img>
                </li>
                <li class="duration-300 transition-transform ease-in-out hover:scale-105 min-[320px]:w-6 min-[470px]:w-8 sm:w-10 md:w-14">
                  <img src="src/assets/JavaScript_Logo.png" alt="JavaScript Logo"></img>
                </li>
                <li class="duration-300 transition-transform ease-in-out hover:scale-105 min-[320px]:w-6 min-[470px]:w-8 sm:w-10 md:w-14">
                  <img src="src/assets/React_Logo.png" alt="React Logo"></img>
                </li>
              </ul>
            </div>
            <div class="min-[320px]:max-w-4xs min-[390px]:max-w-3xs min-[470px]:max-w-xxs sm:max-w-xs md:max-w-sm lg:max-w-md mt-10 md:mt-0">
              <img class="shadow-xl rounded-full w-full h-auto" src="src/assets/Foto_Perfil_Quadrado.png" alt="Profile Photo"></img>
            </div>
          </div>
          <div class="bg-tempwhite min-[320px]:px-8 min-[320px]:pt-10 pb-32 visible md:m-0 md:h-0 md:invisible w-full md:p-0">
            <ul class="flex space-x-8 justify-between"> 
              <li class="duration-300 transition-transform ease-in-out hover:scale-105 w-10 min-[470px]:w-12 min-[540px]:w-14">
                <img src="src/assets/Html_Logo.png" alt="Html Logo"></img>
              </li>
              <li class="duration-300 transition-transform ease-in-out hover:scale-105 w-10 min-[470px]:w-12 min-[540px]:w-14">
                <img src="src/assets/Css_Logo.png" alt="Css Logo"></img>
              </li>
              <li class="duration-300 transition-transform ease-in-out hover:scale-105 w-10 min-[470px]:w-12 min-[540px]:w-14">
                <img src="src/assets/JavaScript_Logo.png" alt="JavaScript Logo"></img>
              </li>
              <li class="duration-300 transition-transform ease-in-out hover:scale-105 w-10 min-[470px]:w-12 min-[540px]:w-14">
                <img src="src/assets/React_Logo.png" alt="React Logo"></img>
              </li>
            </ul>
          </div>
        </div>
    );
}
export default Hero;

