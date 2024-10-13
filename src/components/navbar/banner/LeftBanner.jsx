import React from 'react'
import {useTypewriter} from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiReact } from 'react-icons/si';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["HNDIT Student.", "Front-end Developer."],
        Loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD!</h4>
      <h1 className="text-6xl font-bold text-white">
        Hi, I'm {""}
          <span className="text-designColor capitalize">Sewwandi Bandara</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span>{text}</span>
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">I'm a HNDIT student in SLIATE who is interesting in take over challenges 
      of making new projects related to IT field and like to do experiments on the programming 
      languages I am still not known well. 
      </p>
    </div>
      <div className="flex justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebook/>
              </span>
              <span className="bannerIcon">
                <FaGithub/>
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn/>
              </span>
            </div>
        </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best skill on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiTailwindcss/>
              </span>
              <span className="bannerIcon">
                <SiNextdotjs/>
              </span>
              <span className="bannerIcon">
                < SiReact/>
              </span>
            </div>
        </div>
      </div>
</div>
  )
}

export default LeftBanner