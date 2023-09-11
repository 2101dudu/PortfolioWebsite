

function Projects () {
    return (
        <div class="px-8 pt-28 pb-40 md:py-40 bg-tempwhite">
          <div class="flex no-wrap flex-col items-center space-y-28">
            <h1 class="text-tempdarkblue font-lato font-bold min-[320px]:text-4xl sm:text-5xl md:text-6xl">Projects</h1>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="min-[320px]:w-1/2 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
              <div class="min-[320px]:w-1/2 md:w-80 lg:w-96 flex flex-col justify-between items-center">
                <h2 class="font-lato font-bold text-tempblack min-[320px]:text-xl sm:text-2xl lg:text-3xl min-[320px]:pt-4 sm:pt-5 md:pt-6">Portfolio Website</h2>
                <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 min-[320px]:mt-2 min-[540px]:mt-4 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl min-[320px]:py-1.5 min-[320px]:px-4 md:py-2 md:px-4">
                  <h2 class="text-tempwhite font-lato font-bold min-[320px]:text-sm sm:text-base md:text-lg">View Project</h2>
                </a>
                <div class="min-[320px]:pb-2 lg:pb-4 text-center">
                  <h3 class="font-lato min-[320px]:text-xs sm:text-sm md:text-md text-tempblack">Built with</h3>
                  <div class="flex space-x-4">
                      <img class="w-6 sm:w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                      <img class="w-6 sm:w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                  </div>
                </div>  
              </div>
            </div>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="min-[320px]:w-1/2 md:w-80 lg:w-96 flex flex-col justify-between items-center">
                <h2 class="font-lato font-bold text-tempblack min-[320px]:text-xl sm:text-2xl lg:text-3xl min-[320px]:pt-4 sm:pt-5 md:pt-6">Portfolio Website</h2>
                <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 min-[320px]:mt-2 min-[540px]:mt-4 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl min-[320px]:py-1.5 min-[320px]:px-4 md:py-2 md:px-4">
                  <h2 class="text-tempwhite font-lato font-bold min-[320px]:text-sm sm:text-base md:text-lg">View Project</h2>
                </a>
                <div class="min-[320px]:pb-2 lg:pb-4 text-center">
                  <h3 class="font-lato min-[320px]:text-xs sm:text-sm md:text-md text-tempblack">Built with</h3>
                  <div class="flex space-x-4">
                      <img class="w-6 sm:w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                      <img class="w-6 sm:w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                  </div>
                </div>  
              </div>
              <div class="min-[320px]:w-1/2 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
            </div>
          </div>
        </div>
    );

}
export default Projects;