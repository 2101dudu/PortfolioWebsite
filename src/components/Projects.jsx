

function Projects () {
    return (
        <div class="sm:pt-28 sm:pb-40 md:py-40 bg-tempwhite">
          <div class="flex flex-col items-center space-y-28">
            <h1 class="text-tempdarkblue font-lato font-bold sm:text-5xl md:text-6xl">Projects</h1>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="sm:w-64 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
              <div class="sm:w-64 md:w-80 lg:w-96">
                <div class="flex flex-col items-center">
                  <h2 class="font-lato font-bold text-tempblack sm:text-xl md:text-2xl lg:text-3xl sm:pt-3 md:pt-6">Portfolio Website</h2>
                  <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 sm:mt-4 md:mt-6 lg:mt-10 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl sm:py-1 sm:px-3 md:py-2 md:px-4">
                    <h2 class="text-tempwhite font-lato font-bold sm:text-md md:text-lg">View Project</h2>
                  </a>
                  <div class="mt-3 lg:mt-5 text-center">
                      <h3 class="font-lato sm:text-sm md:text-md text-tempblack">Built with</h3>
                      <div class="flex space-x-4">
                          <img class="w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                          <img class="w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="sm:w-64 md:w-80 lg:w-96">
                <div class="flex flex-col items-center">
                  <h2 class="font-lato font-bold text-tempblack sm:text-xl md:text-2xl lg:text-3xl sm:pt-3 md:pt-6">Portfolio Website</h2>
                  <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="duration-300 hover:scale-105 sm:mt-4 md:mt-6 lg:mt-10 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl sm:py-1 sm:px-3 md:py-2 md:px-4">
                    <h2 class="text-tempwhite font-lato font-bold sm:text-md md:text-lg">View Project</h2>
                  </a>
                  <div class="mt-3 lg:mt-5 text-center">
                      <h3 class="font-lato sm:text-sm md:text-md text-tempblack">Built with</h3>
                      <div class="flex space-x-4">
                          <img class="w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                          <img class="w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                      </div>
                  </div>
                </div>
              </div>
              <div class="sm:w-64 md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
            </div>
          </div>
        </div>
    );

}
export default Projects;