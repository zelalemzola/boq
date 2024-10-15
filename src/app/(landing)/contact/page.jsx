import { FadeText } from '@/components/ui/fade-text'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="md:px-4">
        <div className="aboutHero relative h-[45vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-center justify-center p-6 md:p-10 ">
         
         <div className="aboutHero-content flex flex-col gap-5 text-white z-40 text-center">
             <FadeText
        className="text-3xl md:text-7xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Contact Us "
      />
             <FadeText
        className="text-lg text-center"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="A member of our team will reach out to you as soon as possible"
      />
          </div>
        
      </div>
      <div className="my-[5%] flex flex-col gap-5">
        <h1 className="text-2xl md:text-3xl text-primary font-bold">Or reach out to us directly via:</h1>
        <div className='flex items-center gap-5'>
           <div className='bg-gray-200 rounded-full p-2'>
            <Mail className='text-gray-500'/>
            </div>
            <div className="flex flex-col ">
                <p className='text-lg font-bold'>Email</p>
                <p className='text-md text-gray-500'>quantify@gmail.com</p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
           <div className='bg-gray-200 rounded-full p-2'>
            <Phone className='text-gray-500'/>
            </div>
            <div className="flex flex-col ">
                <p className='text-lg font-bold'>Phone</p>
                <p className='text-md text-gray-500'>+251111111111</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-[5%]">
        <h2 className="font-bold text-2xl md:text-3xl text-primary">
            Upload your project Via Our Telegram Handle so that we can Get to work
        </h2>
        <div className="flex flex-col items-center">
        <p className='text-2xl text-gray-500 font-semibold animate-bounce text-center'>@Quantify</p>
        <div className="w-[12%] bg-primary rounded-2xl p-1"></div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage