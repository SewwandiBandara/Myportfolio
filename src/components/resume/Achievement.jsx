import React from 'react';
import ResumeCard from './ResumeCard';

const Achievement = () => {
  return (
    <div
       
        className="py-12 font-titleFont flex gap-20"
    >
        <div>
    
        <div>
          <div className='py-12 font-titleFont'>
              <p className='text-sm text-designColor tracking-[4px]'>2024</p>
              <h3 className='text-4xl font-bold'>Achievements</h3>
          </div>
              <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black
              border-opacity-30 flex flex-col gap-10'>
                  <ResumeCard
                      title="Java 5 Day Workshop"
                      subTitle="IDET Institute"
                      result="Completed"
                      des="The knowledge of making a billing system from java and
                      how to use java methods, constructors etc are taught from here."
                  />
                 
              </div>
             </div>
        </div>
   
  </div>
  )
}

export default Achievement