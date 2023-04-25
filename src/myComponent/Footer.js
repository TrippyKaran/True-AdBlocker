import React,{useState} from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="bg-[#505255] pt-[3%] pb-[3%] bottom-0">
      <div className="lg:mx-[7%]">
     <div className=" text-white  text-center ">
        <ul >
          <li  className="lg:inline-block ">
         <a href="/Privacy_Policy">Privacy Policy</a> 
          </li>
          <li className="hidden lg:inline-block pl-4">•</li>
          <li  className="lg:inline-block pl-4 pt-2">
         <a href="/About_us"> About Us</a>
            </li>
            <li className="hidden lg:inline-block pl-4 ">•</li>
            <li  className="lg:inline-block pl-4 pt-2">
            <a href="/Disclaimer">Disclaimer</a>
            </li>
            <li className="hidden lg:inline-block pl-4">•</li>
            <li  className="lg:inline-block pl-4 pt-2">
            <a href="/Blog">Blog </a>
            </li>
            <li className="hidden lg:inline-block pl-4">•</li>
            <li  className="lg:inline-block pl-4 pt-2">
            <a href="/TermsCondition">Terms & Condition </a>
            </li>
        </ul>
       </div>
       <div className=" text-white text-center lg:pt-[3%] pt-[5%] pb-[5%] lg:pb-[2%]">
        <ul >
          <li  className="inline-block pl-4">
         <a href="/"><BsFacebook size={"2rem"} className="hover:scale-110"/></a> 
          </li>
          <li  className="inline-block pl-6">
         <a href="/"> <AiFillTwitterCircle size={"2rem"} className="hover:scale-110"/></a>
            </li>
            <li  className="inline-block pl-6">
            <a href="/"><AiFillLinkedin size={"2rem"} className="hover:scale-110"/></a>
            </li>
        </ul>
       </div>
       <div className="border-t-2 border-gray-50">
            <h1 className="text-xl text-white text-center py-[3%] lg:pt-[1%]">© Copyright 2023, All Rights Reserved</h1>
       </div>
       </div>
     </div>
    </>
  )
}
