

function Projects () {
    return (
        <div class="px-8 pt-28 pb-40 md:py-40 bg-tempwhite">
          <div class="flex no-wrap flex-col items-center space-y-20 min-[470px]:space-y-28">
            <h1 class="text-tempdarkblue font-lato font-bold text-4xl sm:text-5xl md:text-6xl">Projects</h1>
            <div class="flex flex-col min-[420px]:flex-row bg-tempwhite shadow-6xl m-auto">
              <div class="w-full min-[420px]:w-1/2 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
              <div class="w-full min-[420px]:w-1/2 md:w-80 lg:w-96 flex flex-col space-y-4 min-[320px]:space-y-6 min-[420px]:space-y-0 justify-around items-center">
                <h2 class="font-lato font-bold text-tempblack text-lg min-[320px]:text-xl min-[420px]:text-base min-[470px]:text-xl sm:text-2xl lg:text-3xl pt-2 min-[470px]:pt-3 sm:pt-5 md:pt-6">Portfolio Website</h2>
                <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 min-[540px]:mt-4 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl py-1.5 px-4 min-[320px]:py-2">
                  <h3 class="text-tempwhite font-lato font-bold text-sm sm:text-base md:text-lg">View Project</h3>
                </a>
                <div class="flex flex-row space-x-2 min-[470px]:space-x-0 min-[470px]:flex-col pb-2 lg:pb-4 text-center">
                  <h3 class="font-lato mt-0.5 min-[420px]:mt-0 text-[10px] min-[320px]:text-sm min-[420px]:text-[10px] sm:text-sm md:text-md text-tempblack">Built with</h3>
                  <div class="flex space-x-2 min-[470px]:space-x-4">
                      <img class="w-6 min-[420px]:w-5 min-[490px]:w-6 sm:w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                      <img class="w-6 min-[420px]:w-5 min-[490px]:w-6 sm:w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                  </div>
                </div>  
              </div>
            </div>
            <div class="flex flex-col min-[420px]:flex-row bg-tempwhite shadow-6xl m-auto">
              <div class="visible h-auto min-[420px]:invisible min-[420px]:h-0 min-[420px]:w-0 w-full">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
              <div class="w-full min-[420px]:w-1/2 md:w-80 lg:w-96 flex flex-col space-y-4 min-[320px]:space-y-6 min-[420px]:space-y-0 justify-around items-center">
                <h2 class="font-lato font-bold text-tempblack text-lg min-[320px]:text-xl min-[420px]:text-base min-[470px]:text-xl sm:text-2xl lg:text-3xl pt-2 min-[470px]:pt-3 sm:pt-5 md:pt-6">Portfolio Website</h2>
                <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 min-[540px]:mt-4 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl py-1.5 px-4 min-[320px]:py-2">
                  <h3 class="text-tempwhite font-lato font-bold text-sm sm:text-base md:text-lg">View Project</h3>
                </a>
                <div class="flex flex-row space-x-2 min-[470px]:space-x-0 min-[470px]:flex-col pb-2 lg:pb-4 text-center">
                  <h3 class="font-lato mt-0.5 min-[420px]:mt-0 text-[10px] min-[320px]:text-sm min-[420px]:text-[10px] sm:text-sm md:text-md text-tempblack">Built with</h3>
                  <div class="flex space-x-2 min-[470px]:space-x-4">
                      <img class="w-6 min-[420px]:w-5 min-[490px]:w-6 sm:w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                      <img class="w-6 min-[420px]:w-5 min-[490px]:w-6 sm:w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                  </div>
                </div>  
              </div>
              <div class="invisible h-0 min-[420px]:visible min-[420px]:h-auto w-full min-[420px]:w-1/2 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
            </div>
          </div>
        </div>
    );

}
export default Projects;