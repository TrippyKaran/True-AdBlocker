import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

export default function Contact_us() {



  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_je4cpqa",
        "template_ie50gdm",
        e.target,
        "e6VEQ3Kk59d-W-GoJ"
      )
      .then(
        (result) => {
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <>
      <div className="  w-full flex items-center justify-center bg-[#3a3535]  bg-cover bg-center">

        <form className="z-10 p-10" onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Enter Your Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                required
                placeholder="Enter your email"
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
                name="message"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow bg-[#FFAC2F] text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
