import React ,{useState}  from 'react'
import { AiFillChrome } from "react-icons/ai";
import { ImBlocked } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiBackwardTime } from "react-icons/gi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
             <nav className="flex items-center justify-between flex-wrap lg:p-6 pt-[2%] ">
     <div className="flex items-center flex-shrink-0 text-white mr-0 pl-[10%]  lg:mr-[10%]">
     <a href='/'><img src="./TrueAdBlocker128x128.png" className="w-100 h-16 mr-2" alt="Logo" /></a>  
     </div>
     <div className="block pr-[10%] lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-[#FFAC2F]  hover:text-black-400"
       >
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block bg-[#66656565] shadow-inner-2xl shadow-[#494646]  lg:bg-inherit mt-2 rounded-lg  pb-5 pl-8 z-10 flex-grow lg:flex lg:items-center lg:justify-start lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow font-semibold">
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-14 text-lg lg:hover:text-[#FFAC2F]">
           Home
         </a>
         <a href="/Blog" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-14 text-lg hover:text-[#FFAC2F]">
          Blogs
         </a>
         <a href="/Contact_us" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-14 text-lg hover:text-[#FFAC2F]">
           Contact Us
         </a>
         <a href="/About_us" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-14 text-lg hover:text-[#FFAC2F]">
           About Us
         </a>
       </div>
       <div className='lg:mr-[10%]'>
       <button className="text-white lg:text-xl text-sm p-3 mt-4  font-semibold bg-[#FFAC2F] lg:px-10 lg:py-2 rounded-tr-2xl rounded-bl-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFAC2F] duration-300 ">
            <a href='https://chrome.google.com/webstore/detail/true-adblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm' target="_blank">
                <div className='flex items-center gap-2 '>
                  <div>
                <AiFillChrome />
              </div>{" "}
              Add To Chorme
              </div>
              </a>
            </button>
       </div>
     </div>
   </nav>

    <div className="lg:mx-[7%] lg:mt-0 mt-[10%] ">
    <div className="flex items-center gap-4 bg-[#505255]  p-[5%] justify-items-center lg:flex-row flex-col-reverse  rounded-xl mb-[2%]">
      <div className=' flex-1 '>
     
        <div className='mb-10'>
           <h1 className='lg:text-5xl text-4xl text-center font-bold text-white'>True AdBlocker</h1>
        
        </div>
     
    <div  className='flex gap-4 mt-3'>
      <div className='flex flex-col flex-1 gap-4'>
            <div className="flex items-center gap-4">
              <div>
                <ImBlocked size={"1.5rem"} style={{color:"#FFAC2F"}}  />
              </div>
              <div>
                <h1 className="text-xl text-white font-bold">Blocks Ads</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div >
                <ImEyeBlocked size={"1.5rem"} style={{color:"#FFAC2F"}} />
              </div>
              <div>
                <h1 className="text-xl text-white font-bold">Protect Privacy</h1>
            
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="">
                <AiOutlinePieChart size={"1.5rem"} style={{color:"#FFAC2F"}} />
              </div>
              <div>
                <h1 className="text-xl text-white font-bold ">Browsing Security</h1>
             
              </div>
            </div>
         

      </div>
      <div className="flex flex-col flex-1 gap-4">
            <div className="flex  text-[#b6b6b6] items-center gap-4">
              <div>
                <AiOutlineCheckCircle size={"1.5rem"} style={{color:"#FFAC2F"}}  />
              </div>
              <div className="text-lg text-white  font-bold">Blocks unknown mischievous websites
</div>
            </div>
            <div className="flex  text-[#b6b6b6] items-center gap-4">
              <div className="flex  items-center gap-4">
                <div>
                  <BiCheckShield size={"1.5rem"} style={{color:"#FFAC2F"}}  />
                </div>
                <div className="text-lg  text-white font-bold">
                Fasten up page loading
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <GiBackwardTime size={"1.5rem"} style={{color:"#FFAC2F"}} />
              </div>
              <div>
                <h1 className="text-xl text-white font-bold ">Parenting monitoring</h1>
             
              </div>
            </div>
          
          </div>
    </div>
      <div className="text-center pt-10 mb-10">
              <button className="text-white text-xl font-semibold bg-[#FFAC2F] lg:px-10 px-5 py-2  rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFAC2F] duration-300 ">
              <a href='https://chrome.google.com/webstore/detail/true-adblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm' target="_blank">
                Get True AdBlocker Now
              </a>
              </button>
            </div>
      
        </div>
        <div className="  ">
            <img
              src="./Tiny_people_standing_near_stop_sign_flat_vector_illustration-removebg-preview.png"
              alt="...."
              className="lg:w-[100%] w-[100%] pl-0 lg:ml-[15%]"
            />
          </div>
      </div>
          </div>
    </>
  )
}
