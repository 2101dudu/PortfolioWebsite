

function Projects () {
    return (
        <div class="py-40 bg-tempwhite">
          <div class="flex flex-col items-center space-y-28">
            <h1 class="text-tempdarkblue font-lato font-bold text-6xl">Projects</h1>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
              <div class="md:w-80 lg:w-96">
                <div class="flex flex-col items-center">
                  <h2 class="font-lato font-bold text-tempblack md:text-2xl lg:text-3xl pt-6">Portfolio Website</h2>
                  <a href="https://github.com/2101dudu/PortfolioWebsite" target="_blank" class="md:duration-300 md:hover:scale-105 md:mt-6 lg:mt-10 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl py-2 px-4">
                    <h2 class="text-tempwhite font-lato font-bold text-lg">View Project</h2>
                  </a>
                  <div class="md:mt-3 lg:mt-5 text-center">
                      <h3 class="font-lato text-tempblack">Built with</h3>
                      <div class="flex space-x-4">
                          <img class="w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                          <img class="w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex bg-tempwhite shadow-6xl m-auto">
              <div class="md:w-80 lg:w-96">
                <div class="flex flex-col items-center">
                  <h2 class="font-lato font-bold text-tempblack md:text-2xl lg:text-3xl pt-6">Portfolio Website</h2>
                  <a href="" class="md:duration-300 md:hover:scale-105 md:mt-6 lg:mt-10 bg-gradient-to-tr block from-tempdarkgreen to-templightgreen rounded-2xl py-2 px-4">
                    <h2 class="text-tempwhite font-lato font-bold text-lg">View Project</h2>
                  </a>
                  <div class="md:mt-3 lg:mt-5 text-center">
                      <h3 class="font-lato text-tempblack">Built with</h3>
                      <div class="flex space-x-4">
                          <img class="w-8" src="src/assets/React_Logo.png" alt="React Logo"></img>
                          <img class="w-8" src="src/assets/Figma_Logo.png" alt="Figma Logo"></img>
                      </div>
                  </div>
                </div>
              </div>
              <div class="md:w-80 lg:w-96">
                <img class="w-full h-auto" src="src/assets/Wbsite_screenshot.png" alt="Website Screenshot"></img>
              </div>
            </div>
          </div>
        </div>
    );

}
export default Projects;