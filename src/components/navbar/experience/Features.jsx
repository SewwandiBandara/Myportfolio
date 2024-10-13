import React from 'react'
import { AiFillAppstore } from 'react-icons/ai';
import {SiProgress} from "react-icons/si";
import Title from '../../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" 
    className="w-full  py-20  border-b-[1px] border-b-black">
     <Title title="Features" des="What I do"/>
     <div className='grid grid-cols-2 gap-20'>
        <Card
            title="Front-End Development"
            des="I usually code for the projects to get their front
             end using different programming languages like reactjs, 
             tailwindcss and so on."
             icon={<AiFillAppstore/>}
        />
        <Card
            title="Application Development"
            des="I use C#, Java, PHP, Reactjs to develop stand-alone
            applications and websites and still I am learning to do those projects."
            icon={<SiProgress/>}
        />
     </div>
    </section>
  );
}

export default Features