
function ContactMe() {
    return (
        <div class="bg-gradient-to-tr from-tempcyan via-tempblue to-tempdarkblue skew-y-3">
          <div class="h-100vh w-screen -skew-y-3">
            <div class="flex flex-col space-y-8 pt-28 max-w-screen-xl md:px-12 lg:px-4 mx-auto">
              <h1 class="font-lato text-tempwhite text-6xl font-bold">Contact Me</h1>
              <h2 class="font-lato text-tempwhite text-3xl md:max-w-lg lg:max-w-2xl">Ready to Connect? Feel free to drop me a message. I'm just a click away and always excited to chat.</h2>
              <div class="flex pt-10 justify-between space-x-20">
                <div class="flex flex-col space-y-8 w-1/2">
                  <div class="h-12 shadow-4xl rounded-lg">
                    <input type="name"  name="floating_name"  id="floating_name"  class="h-full w-full z-10 peer bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite focus:ring-4 focus:ring-tempwhite p-2.5 text-xl font-lato text-tempwhite placeholder:text-xl placeholder:font-lato placeholder:text-tempwhite" placeholder="Name..."  required></input>
                  </div>
                  <div class="h-12 shadow-4xl rounded-lg">
                    <input type="email" name="floating_email" id="floating_email" class="h-full w-full z-10 peer bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite focus:ring-4 focus:ring-tempwhite p-2.5 text-xl font-lato text-tempwhite placeholder:text-xl placeholder:font-lato placeholder:text-tempwhite" placeholder="Email..." required></input>
                  </div>
                </div>
                <textarea type="message" rows="4" name="floating_message" id="floating_message" class="h-32 shadow-4xl max-h-64 w-full bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite focus:ring-4 focus:ring-tempwhite p-2.5 text-xl font-lato text-tempwhite placeholder:text-xl placeholder:font-lato placeholder:text-tempwhite" placeholder="Message..." required></textarea>
              </div>
            </div>
          </div>
          <div class="h-96 w-screen -skew-y-3">
            <div class="max-w-screen-xl md:px-12 lg:px-4 pt-12 mx-auto">
              <a href="" class="shadow-4xl rounded-xl w-48 h-20 lg:w-56 lg:h-24 bg-gradient-to-tr block from-tempdarkblue to-templightblue md:mr-32 lg:mr-72">
                <div class="text-lato font-bold text-tempwhite text-2xl lg:text-4xl text-center pt-6 lg:pt-7">Send</div>
              </a>
            </div>
          </div>
        </div>
    );
}

export default ContactMe;