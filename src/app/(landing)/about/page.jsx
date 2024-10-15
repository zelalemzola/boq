import BlurFade from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { FadeText } from '@/components/ui/fade-text'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="md:px-4">
        <div className="aboutHero relative h-[55vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-end p-6 md:p-10 ">
         
         <div className="abouHero-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-3xl md:text-5xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Bill Of Quantities (BOQ) Professionals Den"
      />
             <FadeText
        className="text-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="We provide BOQ services,software and training for construction professionals worldwide"
      />
            {/* <h1 className="text-2xl md:text-4xl font-bold">Calculate your Bill Of Quantities with confidence.</h1> */}
            {/* <p className="text-md "> Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ.</p> */}
            <Button className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Button>
         </div>
      </div>


     <div className="flex flex-col gap-5 my-[6%] md:my-[5%]">
  <h1 className="text-2xl md:text-4xl text-primary font-bold">BOQ Outsourcing</h1>
  <FadeText
    className="text-md md:text-lg md:w-[80%] text-gray-500"
    direction="left"
    framerProps={{
      show: { transition: { delay: 1 } },
    }}
    text="Focus on your core business let our experienced team of quantity surveyors handle your BOQ"
  />

  <div className="flex flex-col md:flex-row gap-6 md:gap-6 mt-[2%]">
    {/* First item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={0.85} inView="true">
        <Image
          src="/1.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
        }}
        text="Dedicated Project Manager"
      />
    </div>

    {/* Second item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={0.95} inView="true">
        <Image
          src="/2.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="Global Team"
      />
    </div>

    {/* Third item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={1} inView="true">
        <Image
          src="/3.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.1 } },
        }}
        text="Quality assurance"
      />
    </div>

    {/* Fourth item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={1.1} inView="true">
        <Image
          src="/4.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.2 } },
        }}
        text="Reasonable Pricing"
      />
    </div>
  </div>
</div>
     <div className="flex flex-col gap-5 my-[6%] md:my-[5%]">
  <h1 className="text-2xl md:text-4xl text-primary font-bold">BOQ Training and Certification</h1>
  <FadeText
    className="text-md md:text-lg md:w-[80%] text-gray-500"
    direction="left"
    framerProps={{
      show: { transition: { delay: 1 } },
    }}
    text="Develop your carrier with our accredited online courses for quantity surveyors,estimators and cost engineers"
  />

  <div className="flex flex-col md:flex-row gap-6 md:gap-6 mt-[2%]">
    {/* First item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={0.85} inView="true">
        <Image
          src="/1.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
        }}
        text="Dedicated Project Manager"
      />
    </div>

    {/* Second item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={0.95} inView="true">
        <Image
          src="/2.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="Global Team"
      />
    </div>

    {/* Third item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={1} inView="true">
        <Image
          src="/3.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.1 } },
        }}
        text="Quality assurance"
      />
    </div>

    {/* Fourth item */}
    <div className="flex flex-col gap-4 md:w-[30%]">
      <BlurFade delay={1.1} inView="true">
        <Image
          src="/4.jpg"
          alt=""
          width={100}
          height={100}
          className="w-[95%] h-[200px] object-cover rounded-xl shadow-xl"
        />
      </BlurFade>
      <FadeText
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.2 } },
        }}
        text="Reasonable Pricing"
      />
    </div>
  </div>
</div>

      
    </div>
  )
}

export default AboutPage