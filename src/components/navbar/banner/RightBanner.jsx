import React from 'react'
import {coverImg1} from "../../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2  flex justify-center items-center relative">
          <img 
            className="w-[300px] h-[300px] z-10"
            src={coverImg1} 
            alt="coverImg1"/>
              <div className="absolute bottom-0 w-[350px] h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] 
              shadow-shadowOne flex justify-center items-center">

              </div>
        </div>
  )
}

export default RightBanner