
function AboutMe() {
    return (
          <div class="bg-gradient-to-tr from-tempdarkblue via-tempdarkgreen to-templightgreen -skew-y-3">
            <div class="h-100vh skew-y-3 w-screen">
              <div class="max-w-screen-xl px-3 min-[320px]:px-8 md:px-12 mx-auto">
                <h1 class="text-lato text-center min-[320px]:text-left font-bold text-tempwhite text-3xl min-[420px]:text-4xl sm:text-5xl md:text-6xl pt-20 sm:pt-28 md:pt-40">About me</h1>
                <div class="max-w-7xl flex flex-col min-[420px]:flex-row space-x-0 space-y-10 min-[420px]:space-y-0 min-[420px]:space-x-8 justify-between pt-12">
                  <div class="min-[420px]:w-1/2 lg:max-w-lg">
                    <h2 class="text-lato text-tempwhite text-base min-[540px]:text-xl max-w-lg">👋 Hi, I'm Eduardo Faria, an 18-year-old software enthusiast from Portugal, currently in my second year of studies.</h2>
                    <h2 class="text-lato text-tempwhite text-base min-[540px]:text-xl pt-10 max-w-lg">I'm building this portfolio site, and I've got exciting projects in progress. 🚀</h2>
                  </div>
                  <div class="min-[420px]:w-1/2 lg:max-w-lg">
                    <h2 class="text-lato text-tempwhite text-base min-[540px]:text-xl max-w-lg">📷 I'm also a passionate photographer, a piano player, and I love connecting with people. Let's chat about tech, creativity, or anything else!</h2>
                  </div>
                </div>
                <div class="pt-0 invisible min-[420px]:visible min-[420px]:pt-12 w-1/2 lg:max-w-lg">
                  <div class="bg-tempwhite h-0.5"></div>
                </div>
                <div class="max-w-7xl flex flex-col min-[420px]:flex-row space-x-0 space-y-20 items-center min-[420px]:space-y-0 min-[420px]:space-x-8 justify-between pt-12">
                  <div class="min-[420px]:w-1/2 lg:max-w-lg">
                    <h2 class="text-lato text-tempwhite text-base min-[540px]:text-xl max-w-lg">💬 Fluent in English and a native Portuguese speaker.</h2>
                  </div>
                  <div class="w-32 min-[420px]:w-1/2 lg:max-w-lg">
                    <a href="#" class="shadow-4xl rounded-xl w-32 min-[420px]:w-40 h-12 min-[420px]:h-16 min-[540px]:w-48 min-[540px]:h-20 block duration-300 hover:scale-105 bg-gradient-to-tr from-tempdarkblue to-templightblue">
                      <div class="text-lato font-bold text-tempwhite min-[420px]:text-xl min-[540px]:text-2xl text-center pt-3 min-[420px]:pt-5 min-[540px]:pt-6">Resume</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-40 skew-y-3 w-screen"></div>
          </div>
    );
}
export default AboutMe;

