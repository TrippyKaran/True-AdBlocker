import React, {useState, useEffect, useRef} from 'react'
import "./Faq.css"


export default function Accordion() {

    return (
        <div class=" flex flex-col items-center justify-center ">
      
        <div class="lg:w-1/2 m-[5%]">
          <input type="checkbox" name="panel" id="panel-1" class="hidden"/>
          <label for="panel-1" class="relative block bg-[#3a3535] text-white p-4 shadow border-b border-inherit rounded-t-xl">Panel 1</label>
          <div class="accordion__content overflow-hidden bg-[#505255] border-inherit rounded-b-xl ">
            <p class="accordion__body p-4" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    )
}