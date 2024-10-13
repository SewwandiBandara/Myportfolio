import React from 'react'
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <div className='w-full flex gap-20'>
    <div>
    <div>
          <div className='py-12 font-titleFont'>
              <p className='text-sm text-designColor tracking-[4px]'>2022 - Present</p>
              <h3 className='text-4xl font-bold'>Education Quality</h3>
          </div>
              <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black
              border-opacity-30 flex flex-col gap-10'>
                  <ResumeCard
                      title="HND in Information Technology"
                      subTitle="SLIATE (2023 - 2025)"
                      result="3.90"
                      des="The training of 6 months is provided to capture
                      knowledge and experience of working in the relevent field."
                  />
                  <ResumeCard
                      title="Dimploma in Information Technology"
                      subTitle="ESOFT Metro Campus (2022 - 2023)"
                      result="A"
                      des="The training is provided inorder to get experience
                      and the knowledge given from here is something good."
                  />
                  <ResumeCard
                      title="Certificate in Java"
                      subTitle="IDET (5 day)"
                      result="Completed"
                      des="The knowledge of making a billing system from java and
                      how to use java methods, constructors etc are taught from here."
                  />
              </div>
    </div>
    </div>
    
    <div>
          <div className='py-12 font-titleFont'>
              <p className='text-sm text-designColor tracking-[4px]'>2023</p>
              <h3 className='text-4xl font-bold'>Job Experience</h3>
          </div>
              <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black
              border-opacity-30 flex flex-col gap-10'>
                  <ResumeCard
                      title="Computer Hardware"
                      subTitle="Sri Lnaka Telecom (2023/Feb - 2023/Aug)"
                      result="Kurunegala"
                      des="The training of 6 months is provided to capture
                      knowledge and experience of working in the relevent field."
                  />
                 
              </div>
    </div>
    
 </div>
  );
}

export default Education