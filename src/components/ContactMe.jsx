import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(null);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xccbbq6', 'template_rzzj6r7', form.current, 'C5J-WLgsGkjlAAe-x')
        .then((result) => {
            setIsSuccess(true);
            form.current.reset();
        }, (error) => {
            setIsSuccess(false);
        });
    };

    useEffect(() => {
      let timer;
      if (isSuccess !== null) {
          timer = setTimeout(() => {
              setIsSuccess(null);
          }, 5000); 
      }

      return () => clearTimeout(timer);
    }, [isSuccess]);

    return (
      <>
        <form ref={form} onSubmit={sendEmail} class="bg-gradient-to-tr from-tempcyan via-tempblue to-tempdarkblue skew-y-3">
          <div class="h-100vh w-screen -skew-y-3">
            <div class="flex flex-col space-y-8 pt-16 sm:pt-28 md:pt-32 max-w-screen-xl px-3 min-[320px]:px-8 md:px-12 mx-auto">
              <h1 class="font-lato text-tempwhite text-3xl min-[370px]:text-4xl sm:text-5xl md:text-6xl font-bold">Contact Me</h1>
              <h2 class="font-lato text-tempwhite text-lg min-[370px]:text-xl sm:text-2xl md:text-3xl max-w-xs min-[540px]:max-w-sm md:max-w-lg lg:max-w-2xl">Ready to Connect? Feel free to drop me a message. I'm just a click away and always excited to chat.</h2>
              <div class="flex flex-col min-[470px]:flex-row pt-10 justify-between space-y-8 space-x-0 min-[470px]:space-y-0 min-[470px]:space-x-8 lg:space-x-20">
                <div class="flex flex-col space-y-8 w-full min-[470px]:w-2/5 lg:w-1/3">
                  <div class="h-8 sm:h-12 shadow-4xl rounded-lg">
                    <input type="name" name="from_name" class="h-full w-full z-10 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Name..."  required/>
                  </div>
                  <div class="h-8 sm:h-12 shadow-4xl rounded-lg">
                    <input type="email" name="from_email"class="h-full w-full z-10 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Email..." required/>
                  </div>
                </div>
                <textarea type="message" rows="4" name="message"class="w-full min-[470px]:w-3/5 lg:w-2/3 h-24 sm:h-32 shadow-4xl max-h-64 bg-transparent border-0 rounded-lg bg-gradient-to-tr from-transparentwhite sm:focus:ring-2 md:focus:ring-4 focus:ring-tempwhite p-2.5 text-sm sm:text-base md:text-lg lg:text-xl font-lato text-tempwhite placeholder:font-lato placeholder:text-tempwhite" placeholder="Message..." required></textarea>
              </div>
            </div>
          </div>  
          <div class="h-48 min-[540px]:h-56 sm:h-64 md:h-96 w-screen -skew-y-3">
            <div class="items-center">
              <div class="w-36 min-[320px]:w-full min-[320px]:max-w-screen-xl items-center px-0 min-[320px]:px-8 md:px-12 pt-12 mx-auto">
                <input type="submit" value="Send" class="duration-300 transition-transform hover:scale-105 shadow-4xl rounded-xl w-36 sm:w-40 h-12 sm:h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 bg-gradient-to-tr block from-tempdarkblue to-templightblue md:mr-32 lg:mr-72 text-lato font-bold text-tempwhite text-lg sm:text-xl md:text-3xl lg:text-4xl text-center"/>
              </div>
            </div>
          </div>
        </form>
        {isSuccess === true && (
        <div className="w-full fixed top-32">
          <div className="max-w-screen-xl mx-auto flex justify-end px-3 min-[320px]:px-8 md:px-12">
            <div className="bg-successgreen flex justify-around space-x-5 px-3 py-2 rounded-lg">
              <div className="text-tempdarkgreen font-lato text-2xl mt-1">Message sent successfuly</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#009657" class="w-10 h-10"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
          )} 
        {isSuccess === false && (
        <div className="w-full fixed top-32">
          <div className="max-w-screen-xl mx-auto flex justify-end px-3 min-[320px]:px-8 md:px-12">
            <div className="bg-lightfailred flex justify-around space-x-5 px-3 py-2 rounded-lg">
              <div className="text-failred font-lato text-2xl mt-1">Message not sent</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" class="w-10 h-10"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
          )}
      </>
    );
}

export default ContactMe;