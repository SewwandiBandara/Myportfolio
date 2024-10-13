import React from 'react'



const Skills = () => {
  return (
    <div className='w-full flex gap-20'>
      <div className='w-1/2'>
            <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                <h3 className='text-4xl font-bold'>Development Skill</h3>
            </div>
                <div className='className="mt-14 w-full flex flex-col gap-6'>
                    <div>
                      <p className='text-sm uppercase font-medium'>php</p>
                      <span className='w-full h-2 bgopacity inline-flex rounded-md mt-2'>
                        <span className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                         to-red-500 rounded-md relative'>
                          <span className='absolute -top-7 right-0'>90%</span>
                         </span>
                      </span>
                      <p className='text-sm uppercase font-medium'>java</p>
                      <span className='w-full h-2 bgopacity inline-flex rounded-md mt-2'>
                        <span className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                         to-red-500 rounded-md relative'>
                          <span className='absolute -top-7 right-0'>75%</span>
                         </span>
                      </span>
                      <p className='text-sm uppercase font-medium'>react</p>
                      <span className='w-full h-2 bgopacity inline-flex rounded-md mt-2'>
                        <span className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                         to-red-500 rounded-md relative'>
                          <span className='absolute -top-7 right-0'>50%</span>
                         </span>
                      </span>
                      <p className='text-sm uppercase font-medium'>css</p>
                      <span className='w-full h-2 bgopacity inline-flex rounded-md mt-2'>
                        <span className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                         to-red-500 rounded-md relative'>
                          <span className='absolute -top-7 right-0'>90%</span>
                         </span>
                      </span>
                      <p className='text-sm uppercase font-medium'>javascript</p>
                      <span className='w-full h-2 bgopacity inline-flex rounded-md mt-2'>
                        <span className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
                         to-red-500 rounded-md relative'>
                          <span className='absolute -top-7 right-0'>780%</span>
                         </span>
                      </span>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Skills