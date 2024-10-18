import React, {useRef} from 'react';
import Title from '../layouts/Title';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ta9zxer' , 'template_dpxx7uu' , form.current, '2KWj4ddICD2IDawWe' )
    .then(() => { 
      alert('Success! Your message has been sent.'); 
    },
    (error) => { 
      alert('Failed to send message. Please try again.');
      console.log('Failed!',error.text); 
    }
    );
  };


  return (
    <section _id="contacts" 
    className="w-full  py-20  border-b-[1px]  border-b-black">
       <div className='flex justify-center items-center text-center'>
          <Title title="Contact" des="Contact with me"/>
      </div>
      <div className='w-full px-12  py-10 rounded-lg shadow-shadowOne flex
    items-center bg-gradient'>
        <div className='grid grid-cols-2 gap-20'>
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
              <div className='flex h-full flex-col '>
                  
                <div className='flex flex-col gap-6'>
                    <h4 className='text-2xl font-titleFont font-bold'>
                        Sewwandi bandara
                    </h4>
                    <p>Phone No: 070-2017051</p>
                    <p>E-Mail: madushasewwandi29@gmail.com</p>
                    <p><a href="https://www.linkedin.com/in/sewwandi-bandara-589aab288/" className='hover:bg-designColor'>LinkedIn</a></p>
                    <p><a href="https://www.facebook.com/shanu.shanuki.351?mibextid=ZbWKwL" className='hover:bg-designColor'>Facebook</a></p>
                    <p><a href="https://github.com/SewwandiBandara" className='hover:bg-designColor'>Github </a></p>
                </div>  
              </div> 
          </div>
      </div>
    </section>
  );
}

export default Contact