import React, {useRef} from 'react';
import Title from '../layouts/Title';
// import { contact } from '../../assets';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ta9zxer' , 'template_dpxx7uu' , form.current, '2KWj4ddICD2IDawWe' )
    .then(() => { console.log('Success!'); },
    (error) => { console.log('Failed!',error.text); }
    );
  };


  return (
    <section _id="contacts" 
    className="w-full  py-20  border-b-[1px]  border-b-black">
       <div className='flex justify-center items-center text-center'>
          <Title title="Contact" des="Contact with me"/>
      </div>
      {/* <div className="w-1/2  flex justify-center items-center relative">
          <img 
            className="w-[300px] h-[300px] z-10"
            src={contact} 
            alt="contact"/>
              <div className="absolute bottom-0 w-[350px] h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] 
              shadow-shadowOne flex justify-center items-center">
              </div>
      </div> */}
      <div className='w-full px-12  py-10 rounded-lg shadow-shadowOne flex
    items-center bg-gradient'>
       <div className='h-full w-1/2 overflow-y-hidden'>
            {/* <div className='flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 
            transition-transform duration-500'>
                
              <div className='flex flex-col gap-6'>
                  <h4 className='text-2xl font-titleFont font-bold text-designColor'>
                      Sewwandi bandara
                  </h4>
                  <p className='base font-bold'>Phone No: 070-2017051</p>
                  <p className='base font-bold'>E-Mail: madushasewwandi29@gmail.com</p>
              </div>  
            </div>  */}
            <div className='max-w-md w-full mx-auto p-6 bg-gray-800
             rounded-lg shadow-md'>
                <form ref={form} onSubmit={sendEmail} >
                  <div className='mb-4'>
                    <label className='block text-sm forn-semibold mb-2' htmlFor=''>Your name</label>
                    <input placeholder='enter name' className='w-full px-3 py-2 border rounded-lg
                     bg-gray-800  focus-border-blue-500' required type='text' name='name'/>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm forn-semibold mb-2' htmlFor=''>Your Email</label>
                    <input  placeholder='abcd@gmail.com' className='w-full px-3 py-2 border rounded-lg
                     bg-gray-800 focus-border-blue-500' required type='text' name='from_email'/>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm forn-semibold mb-2' htmlFor=''>Your message</label>
                    <textarea rows='7' cols='10' placeholder='Type your message here...' className='w-full px-3 py-2 border rounded-lg
                     bg-gray-800 focus-border-blue-500' required type='text' name='message'/>
                  </div>
                  <div>
                    <button type='submit' className='bg-gray-600 text-white font-semibold
                     px-4 py-2 border rounded-lg hover:bg-designColor focus:outline-white' name='submit'>
                        Send message
                    </button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact