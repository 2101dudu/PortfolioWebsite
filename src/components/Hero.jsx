
function Hero() {
    return (
        <div class="bg-tempwhite max-w-screen-xl flex justify-between mx-auto py-40 md:px-12 lg:px-4">
          <div class="max-w-md lg:max-w-xl pt-8">
            <div class="w-full m-0 pb-8">
              <h1 class="text-lato text-tempblack font-bold text-6xl">Front-end <span class="text-transparent bg-clip-text bg-gradient-to-l from-tempdarkblue to-templightblue">Software Engineer</span>👨‍💻</h1>
            </div>
            <h2 class="text-lato text-tempblack font-medium text-4xl pb-8">Based in Braga, student at the University of Minho.</h2>
            <ul class="flex">
              <li class="pr-10 lg:pr-24">
                <img class="w-14 h-14" src="src/assets/Html_Logo.png" alt="Html Logo"></img>
              </li>
              <li class="pr-10 lg:pr-24">
                <img class="w-14 h-14" src="src/assets/Css_Logo.png" alt="Css Logo"></img>
              </li>
              <li class="pr-10 lg:pr-24">
                <img class="w-14 h-14" src="src/assets/JavaScript_Logo.png" alt="JavaScript Logo"></img>
              </li>
              <li>
                <img class="w-14 h-14" src="src/assets/React_Logo.png" alt="React Logo"></img>
              </li>
            </ul>
          </div>
          <div class="max-w-sm lg:max-w-md">
            <img class="shadow-xl rounded-full w-full h-auto" src="src/assets/ProfilePhoto.png" alt="Profile Photo"></img>
          </div>
        </div>

        
    );
}
export default Hero;

