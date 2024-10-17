import React from 'react';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <div
        className="py-12 font-titleFont flex gap-20"
    >
        <div>
            <div>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2023</p>
                    <h3 className='text-4xl font-bold'>Trainer Experience</h3>
                </div>
                    <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black
                    border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            title="Computer Hardware Intern"
                            subTitle="Sri Lnaka Telecom (2023/Feb - 2023/Aug)"
                            result="Kurunegala"
                            des="The training of 6 months is provided to capture
                            knowledge and experience of working in the relevent field."
                        />
                        
                    </div>
            </div>
        </div>
   
    </div>
  )
}

export default Experience