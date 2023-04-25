import React, { useState, useEffect, useRef } from "react";
import { BiTime } from "react-icons/bi";
import { IoFingerPrintOutline } from "react-icons/io5";
import { BsClipboardCheckFill } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";
import { ImBlocked } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaShapes } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";

export default function Body() {
  return (
    <>
      <Header />
      <div className="lg:mx-[7%] lg:mt-0 mt-[15%]">
        <div className="lg:mt-[8%] mt-[16%] mb-[5%]">
          <h2 className="text-center lg:text-3xl text-lg px-3 text-white font-bold">True Adblocker removes all unwanted ads
and pop-ups. It is the best adblock for chrome where you
can enjoy all your videos without unnecessary ads.
</h2>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1  text-white gap-4 lg:mt-[8%] mt-[16%] mb-[5%] ">
          <div className="bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg p-2 py-7 lg:mx-0 mx-3">
            <div className="flex flex-col gap-5 items-center ">
              <div>
                <BiTime size={"2.5rem"} />
              </div>
              <div>
                <h1 className="text-xl text-center font-bold">Boost your speed with True Adblocker</h1>
              </div>
              <div>
                <p className="text-center">
                Experience a quicker Internet while improving page load times
                </p>
              </div>
              
            </div>
            <div className="text-center pt-10">
              <button className="text-[#FFAC2F]  font-bold text-lg  ">
              Learn More
            </button>
              </div>
           
          </div>
          <div className="bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg p-2 py-7 lg:mx-0 mx-3">
            <div className="flex flex-col gap-5 items-center ">
              <div>
                <IoFingerPrintOutline size={"2.5rem"} />
              </div>
              <div>
                <h1 className="text-xl text-center font-bold"> Maintain your privacy with True Adblocker
</h1>
              </div>
              <div>
                <p className="text-center">Avoid letting online ads follow you.</p>
              </div>
        
            </div>
            <div className="text-center pt-16">
              <button className="text-[#FFAC2F]  font-bold text-lg  ">
              Learn More
            </button>
              </div>
             
         
          </div>
          <div className="bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg p-2 py-7 lg:mx-0 mx-3">
            <div className="flex flex-col gap-5 items-center ">
              <div>
                <BsClipboardCheckFill size={"2.5rem"} />
              </div>
              <div>
                <h1 className="text-xl text-center font-bold">True Adblocker eliminate distractions</h1>
              </div>
              <div>
                <p className="text-center">
                Remove pop-ups, banners, and video advertising.
                </p>
              </div>
              <div>
            
              </div>
            </div>
            <div className="text-center pt-6">
              <button className="text-[#FFAC2F]  font-bold text-lg  ">
              Learn More
            </button>
              </div>
            
          </div>
          <div className="bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg p-2 py-7 lg:mx-0 mx-3">
            <div className="flex flex-col gap-5 items-center ">
              <div>
                <SiBlockchaindotcom size={"2.5rem"} />
              </div>
              <div>
                <h1 className="text-xl font-bold">  Assistance Websites</h1>
              </div>
              <div>
                <p className="text-center">
              By permitting Acceptable Ads, you may promote a robust online environment for
websites.
                </p>
              </div>
             
            </div>
            <div className="text-center pt-5">
              <button className="text-[#FFAC2F]  font-bold text-lg  ">
              Learn More
            </button>
              </div>
         
          </div>
        </div>

        <div className="pl-[7%] pr-[7%] lg:mt-[8%] mt-[16%] bg-[#3a3535] text-white shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg mb-0">
        <div className="grid lg:grid-cols-3 justify-items-center grid-cols-2 gap-6 pt-10 pb-10">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="lg:text-4xl text-2xl font-bold">Why True AdBlocker?</h1>
          </div>
          <div className="lg:flex lg:items-center hidden items-start gap-3 flex-col">
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            <h1 className="text-xl font-bold">True AdBlocker Extension</h1>
          </div>
          <div className="lg:flex lg:items-center hidden items-start gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-xl font-bold">Common Extension</h1>
          </div>
          <div className="col-span-2 text-center lg:text-left lg:col-span-1">
            <h1 className="lg:text-2xl text-lg font-bold">Stop online adverts</h1>
            <p>Today's best adblock for chrome are generally good
at what they do.
</p>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <div>
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            </div>
            <div>
            <h1 className="text-lg text-center font-semibold">True AdBlocker Extension</h1>
            </div>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-lg text-center font-semibold">Common Extension</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]" >Yes</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
       
          <div className="col-span-2  text-center lg:text-left lg:col-span-1">
            <h1 className="lg:text-2xl text-lg  font-bold">
            Fasten up page loading
            </h1>
            <p>
            True AdBlocker removes adverts before they are downloaded to your device by your
browser, as opposed to ad-blocking extensions.
            </p>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <div>
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            </div>
            <div>
            <h1 className="text-lg text-center font-semibold">True AdBlocker Extension</h1>
            </div>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-lg text-center font-semibold">Common Extension</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
          <div className="col-span-2  text-center lg:text-left lg:col-span-1">
            <h1 className="lg:text-2xl text-lg  font-bold">Eliminates Irritants</h1>
            <p>
            Filters in True AdBlocker can block obtrusive components.
            </p>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <div>
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            </div>
            <div>
            <h1 className="text-lg text-center font-semibold">True AdBlocker Extension</h1>
            </div>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-lg text-center font-semibold">Common Extension</h1>
          </div>
          <div> 
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#e0c18a]">Partly</h1>
          </div>
      
          <div className="col-span-2  text-center lg:text-left lg:col-span-1">
            <h1 className="lg:text-2xl text-lg font-bold">
            Keeps sites functional
            </h1>
            <p>
            After deleting ad sections, the
majority of best adblock for chrome keep their page
functionally
            </p>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <div>
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            </div>
            <div>
            <h1 className="text-lg text-center font-semibold">True AdBlocker Extension</h1>
            </div>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-lg text-center font-semibold">Common Extension</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-red-600">No</h1>
          </div>




          <div className="col-span-2 text-center lg:text-left lg:col-span-1">
            <h1 className="lg:text-2xl text-lg  font-bold">Technical assistance</h1>
            <p>
            This adblock chrome extension has best technical
assistance

            </p>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <div>
            <BiCheckShield size={"2rem"} className="text-[#FFAC2F]" />
            </div>
            <div>
            <h1 className="text-lg text-center font-semibold">True AdBlocker Extension</h1>
            </div>
          </div>
          <div className="flex lg:items-center lg:hidden items-center gap-3 flex-col">
            <FaShapes size={"2rem"} className="text-[#FFAC2F]"  />
            <h1 className="text-lg text-center font-semibold">Common Extension</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-[#FFAC2F]">Yes</h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center text-red-600">No</h1>
          </div>
        </div>
      </div>

      <div className="lg:mt-[8%] mt-[16%]">
          <div className="flex  gap-5 items-center justify-center lg:flex-row flex-col ">
            <div class=" flex flex-col flex-1 text-white items-center justify-center mb-[5%]">
              <div>
                <h1 className="text-center text-white lg:text-4xl text-2xl font-bold lg:pb-5 pb-5 ">
                  How to use True AdBlocker
                </h1>
              </div>
             
              
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl">
                ● Open the <a href="https://chrome.google.com/webstore/category/extensions" className="hover:underline hover:text-[#FFAC2F]"> Chrome Web Store.</a>
                </div>
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl m-5">
               ●  Search True AdBlocker and select the extension
                </div>
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl">
              ●   Click Add to Chrome.
                </div>
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl m-5">
               ●  Click the puzzle piece icon in Chrome.
                </div>
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl">
               ●  Click the pushpin icon to pin True AdBlocker extension.
                </div>
                <div class=" block w-full bg-[#3a3535] text-white p-4 shadow border-b-4 border-inherit rounded-t-xl m-5">
               ●  Enjoy Ad free browsing
                </div>
           
            </div>
            <div className="flex-1 mx-5 lg:flex items-center ">
              <img
                src="./1.png"
                alt="..."
                className="lg:ml-[5%] h-full w-full border border-[#505255]   rounded-lg  object-contain"
              />
            </div>
          </div>
        </div>
      
        <div className="text-white lg:mt-[8%] mt-[16%] p-[3%]">
          <div className=" lg:mb-[0%] mb-[10%]">
            <h1 className="lg:text-5xl text-2xl text-center font-bold my-[3%]">
              Features of True AdBlocker
            </h1>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1 text-white  gap-7 ">
            <div className="flex  gap-4 bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg  p-10 ">
              <div className="pt-2">
                <ImBlocked size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Blocks ads</h1>
                <p>
                Banner, pop-ups and video adverts are removed using
adblock chrome.
                </p>
              </div>
            </div>
            <div className="flex  gap-4 bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg  p-10 ">
              <div className="pt-2">
                <ImEyeBlocked size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Internet Security</h1>
                <p>
                This best adblock chrome extension offers defence
against dangerous websites
                </p>
              </div>
            </div>
            <div className="flex  gap-4 bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg  p-10 ">
              <div className="pt-2">
                <AiOutlinePieChart size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Protect privacy</h1>
                <p>
                Your data is protected from internet trackers by this
best adblock for chrome.

                </p>
              </div>
            </div>
            <div className="flex  gap-4 bg-[#3a3535] shadow-inner-2xl shadow-[#494646]  border border-[#505255] rounded-lg  p-10 ">
              <div className="pt-2">
                <BiCheckShield size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Parental authority</h1>
                <p>
                Children are protected from inappropriate content with
this adblock chrome extension.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[8%] mt-[16%]">
          <div className="flex  gap-5 items-center justify-center lg:flex-row flex-col ">
            <div class=" flex flex-col flex-1 text-white items-center justify-center mb-[5%]">
              <div>
                <h1 className="text-center text-white lg:text-4xl text-2xl font-bold lg:pb-5 pb-5 ">
                  Frequently Asked Questions
                </h1>
              </div>
              <div class=" ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-1"
                  class="hidden"
                />
                <label
                  id="pan"
                  for="panel-1"
                  class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl"
                >
                  How do I set up a True AdBlocker?.
                </label>
                <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
                  <p class="accordion__body p-4" id="panel1">
                    Installing True AdBlocker is as simple as visiting our
                    website from your favourite browser and clicking get True
                    AdBlocker now. You can also visit our help centre for more
                    information and browser specific installation instructions..
                  </p>
                </div>
              </div>
              <div class=" ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-2"
                  class="hidden"
                />
                <label
                  id="pan"
                  for="panel-2"
                  class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl"
                >
                  Do I have to pay for True AdBlocker?
                </label>
                <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
                  <p class="accordion__body p-4" id="panel1">
                    You may be surprised to know that True AdBlocker for chrome
                    is absolutely free but paying for True AdBlocker is
                    optional. If you wish to contribute to True AdBlocker, you
                    can do it by subscribing to the True AdBlocker premium. But
                    if you don’t want to pay it right now, that is completely
                    fine. Because at True AdBlocker, we want to make the
                    internet a happiest place without charging anything.
                  </p>
                </div>
              </div>
              <div class=" ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-3"
                  class="hidden"
                />
                <label
                  id="pan"
                  for="panel-3"
                  class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl"
                >
                  Why does True AdBlocker need permissions?
                </label>
                <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
                  <p class="accordion__body p-4" id="panel1">
                    When you install True AdBlocker for the first time, True
                    AdBlocker will request some permissions to operate within
                    your website. It may scare you with such warnings like True
                    AdBlocker can read, modify and transmit content from all web
                    pages that include some sensitive information like password,
                    phone numbers and credit card details. And this is why it is
                    important to be careful with your browser permissions.
                  </p>
                </div>
              </div>
              <div class=" ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-4"
                  class="hidden"
                />
                <label
                  id="pan"
                  for="panel-4"
                  class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl"
                >
                  {" "}
                  What does True AdBlocker do with my information?
                </label>
                <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
                  <p class="accordion__body p-4" id="panel1">
                    We routinely mask all personally identifiable data in our
                    logs to make all the information we have anonymous. And the
                    most important thing is that we do not collect or sell any
                    data that we have. For more information you may review our
                    privacy policy.
                  </p>
                </div>
              </div>
              <div class=" ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-5"
                  class="hidden"
                />
                <label
                  id="pan"
                  for="panel-5"
                  class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl"
                >
                  Which filter sheets should I use and what are they?
                </label>
                <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
                  <p class="accordion__body p-4" id="panel1">
                    The list of rules that True AdBlocker use called filter
                    sheets. When you install True AdBlocker, it blocks the
                    unnecessary ads and customises your filter list. Along with
                    that you can use filter sheets to block newsletter, pop-ups,
                    social media widgets and cookie warnings. And for technical
                    use you can customise your own filter list.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 mx-5 lg:flex items-center ">
              <img
                src="./6.png"
                alt="..."
                className="lg:ml-[5%] h-full w-full border border-[#505255]   rounded-lg  object-contain"
              />
            </div>
          </div>
        </div>
        <article className=" text-white lg:mt-[8%] mt-[16%] ">
          <h1 className="text-2xl lg:text-4xl text-center font-bold mb-6">
            Total Extension Rating <span className="text-[#FFAC2F]">4.7/5</span>
          </h1>
          <div className="grid  m-5 lg:grid-cols-3 items-stretch gap-5">
            <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-1.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Jese Leo</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
              Amazing work by this best adblock chrome,
guys! Now I can browse faster now that I'm
not receiving the obnoxious adverts and
pop-ups!

              </p>
            </div>
            <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-2.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Kurt Moore</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
              Highly recommended! As this amazing
adblock chrome extension prevents
interruptions while you are browsing the
internet, block adverts and run in the
background.

              </p>
            </div>
            <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-3.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Karen Jackson</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
              My favourite extension is the one that blocks
everything! Now I can shop online and avoid
having to look at the dress I didn't buy for the
rest of time on the side of my screen! This is
the best adblock for chrome.

              </p>
            </div>
            {/* <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-1.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Jese Leo</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
                Love it - not getting the annoying ads and pop-ups anymore and
                can get through my browsing quicker!! Great job guys!!
              </p>
            </div>
            <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-2.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Kurt Moore</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
                Great product that works as promised. Block ads and runs in the
                background so it doesn't interrupt when you are browsing the
                net. Highly recommend this product, and the price is right!
              </p>
            </div>
            <div className="bg-[#3a3535] rounded-lg  p-5 flex-1">
              <div class="flex items-center gap-4 pb-3 ">
                <img
                  class="w-14 h-14 object-cover border border-grey rounded-full"
                  src="./avatar-3.png"
                  alt="..."
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>Karen Jackson</p>
                </div>
              </div>
              <div class="flex items-center mb-3 ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2">
                The best extension I downloaded - blocks everything! I can shop
                online and don't have to be annoyed by seeing the dress I didn't
                buy on the side of my screen forever!
              </p>
            </div> */}
          </div>
        </article>

        <div className="text-white p-[3%]">
          <h1 className="lg:text-5xl text-3xl  font-bold my-[3%]">
            About True AdBlocker
          </h1>
          <p className="text-lg font-thin  ">
          True Adblocker is the adblock extension chrome browser addon that shields users
from third-party trackers and deletes adverts from chrome. True Adblocker is actually
the most popular adblock for chrome and it is used by millions of people to stop
unnecessary ads. True adblock chrome extension also supports privacy protection
and this adblock chrome is simple to use and completely customizable.
          </p>
        </div>
        
        <div className=" mt-[5%]  text-center">
          <button className="text-white text-xl font-semibold bg-[#FFAC2F] lg:px-12 px-6 py-2 lg:py-4  rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFAC2F] duration-300 ">
            <a
              href="https://chrome.google.com/webstore/detail/true-adblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
              target="_blank"
            >
              Get True AdBlocker Now
            </a>
          </button>
        </div>
        <div className="flex lg:gap-4  flex-col lg:flex-row text-white mt-[5%] mb-[10%] items-center">
          <div className="hidden lg:flex">
            <img alt="..." src="./right3.png" className="h-12 w-12 object-contain "/>
          </div>
          <div className="text-2xl lg:text-xl font-bold">
          Popular Searches
          </div>
          <div className="hidden lg:flex font-semibold">
          :
          </div>
          <div className="p-3 text-center lg:text-left ">
          free ad blocker, adblocker, adblocker chrome extension, best free ad blocker, best free ad blocker for chrome, free ad blocker chrome, ad blocker free, adblocker chrome, best adblocker, adblocker google chrome
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
