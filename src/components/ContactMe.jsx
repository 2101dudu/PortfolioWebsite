
function ContactMe() {
    return (
        <div class="bg-gradient-to-tr from-tempcyan via-tempblue to-tempdarkblue skew-y-3">
          <div class="h-100vh w-screen -skew-y-3">
            <div class="flex flex-col space-y-8 min-[320px]:pt-16 sm:pt-28 md:pt-32 max-w-screen-xl min-[320px]:px-8 md:px-12 mx-auto">
              <h1 class="font-lato text-tempwhite text-3xl min-[370px]:text-4xl sm:text-5xl md:text-6xl font-bold">Contact Me</h1>
              <h2 class="font-lato text-tempwhite text-lg min-[370px]:text-xl sm:text-2xl md:text-3xl min-[320px]:max-w-xs min-[540px]:max-w-sm md:max-w-lg lg:max-w-2xl">Ready to Connect? Feel free to drop me a message. I'm just a click away and always excited to chat.</h2>
              <div class="flex flex-col min-[470px]:flex-row pt-10 justify-between space-y-8 space-x-0 min-[470px]:space-y-0 min-[470px]:space-x-8 lg:space-x-20">
                <div class="flex flex-col space-y-8 w-full min-[470px]:w-2/5 lg:w-1/3">
                  <div class="min-[320px]:h-8 sm:h-12 shadow-4xl rounded-lg">
                    <input type="name"  name="floating_name"  id="floating_name"  class="h-full w-full z-10 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 min-[320px]:text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Name..."  required></input>
                  </div>
                  <div class="h-8 sm:h-12 shadow-4xl rounded-lg">
                    <input type="email" name="floating_email" id="floating_email" class="h-full w-full z-10 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 min-[320px]:text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Email..." required></input>
                  </div>
                </div>
                <textarea type="message" rows="4" name="floating_message" id="floating_message" class="w-full min-[470px]:w-3/5 lg:w-2/3 min-[320px]:h-24 sm:h-32 shadow-4xl max-h-64 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 min-[320px]:text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Message..." required></textarea>
              </div>
            </div>
          </div>  
          <div class="min-[320px]:h-48 min-[540px]:h-56 sm:h-64 md:h-96 w-screen -skew-y-3">
            <div class="max-w-screen-xl min-[320px]:px-8 md:px-12 pt-12 mx-auto">
              <a href="" class="duration-300 transition-transform hover:scale-105 shadow-4xl rounded-xl min-[320px]:w-36 sm:w-40 min-[320px]:h-12 sm:h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 bg-gradient-to-tr block from-tempdarkblue to-templightblue md:mr-32 lg:mr-72">
                <div class="text-lato font-bold text-tempwhite min-[320px]:text-lg sm:text-xl md:text-3xl lg:text-4xl text-center min-[320px]:pt-2.5 sm:pt-5 md:pt-6 lg:pt-7">Send</div>
              </a>
            </div>
          </div>
        </div>
    );
}

export default ContactMe;