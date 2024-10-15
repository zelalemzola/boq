import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="md:px-4">

      <div className="hero relative h-[55vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-end p-6 md:p-10 ">
         
         <div className="hero-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-2xl md:text-4xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Calculate your Bill Of Quantities with confidence."
      />
             <FadeText
        className="text-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ"
      />
            {/* <h1 className="text-2xl md:text-4xl font-bold">Calculate your Bill Of Quantities with confidence.</h1> */}
            {/* <p className="text-md "> Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ.</p> */}
            <Button className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Button>
         </div>
         
         
      </div>
       
       <div className="flex flex-col gap-5 my-[6%] md:my-[5%]">
        <h1 className="text-2xl md:text-4xl text-primary font-bold">Why choose Quantify?</h1>
            <FadeText
            
        className="text-md md:text-lg  md:w-[80%] text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Quantify is an online platform that helps you get professional Bill of Quantities (BOQ) calculation. Whether you are a builder, developer or contractor, you can easily upload your construction plan, and get a detailed and accurate BOQ report in minutes"
      />
        {/* <p className="text-md md:text-lg w-[95%] md:w-[80%] text-gray-500">BOQ Pro is an online platform that helps you get professional Bill of Quantities (BOQ) calculation. Whether you are a builder, developer or contractor, you can easily upload your construction plan,/ and get a detailed and accurate BOQ report in minutes.</p> */}
        <Link href='' className='p-2  text-white rounded-xl shadow-md hover:shadow-2xl bg-primary  w-fit  hover:bg-[#73b7c2]'>Get Started</Link>
        
        <div className="flex flex-col md:flex-row  gap-6 md:gap-6 mt-[2%]">
        <div className="flex flex-col gap-4 md:w-[30%]">
          <BlurFade delay={0.85} inView='true'>
          <Image src='/1.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl"/>
          </BlurFade>
          <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
          
        }}
        text="Easy to Use"
      />
        
            <FadeText
            
        className="text-md text-gray-500 "
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.85 } },
          
        }}
        text="Quantify  makes it easy to get started by providing professionals,that will guide you throughout the process with hospitality."
      />
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
               <BlurFade delay={0.95} inView='true'>
          <Image src='/2.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl"/>
          </BlurFade>
          <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Professional Service"
      />
    
          <FadeText
            
        className="text-md text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
          
        }}
        text="Experienced Engineers will review your plan."
      />
      
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
               <BlurFade delay={1} inView='true'>
          <Image src='/3.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl"/>
          </BlurFade>
           <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.1 } },
          
        }}
        text="Save Your Time"
      />

           <FadeText
            
        className="text-md text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Get your detailed plan within a few hours"
      />
          
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
               <BlurFade delay={1.1} inView='true'>
          <Image src='/4.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl"/>
          </BlurFade>
            <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.2 } },
          
        }}
        text="Accurate"
      />
          
          <FadeText
            
        className="text-md text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.1 } },
          
        }}
        text="Detailed & Accurate BOQ reports"
      />
         
        </div>
       </div>
       </div>
       <div className="flex flex-col gap-5 mt-[2%] mb-[5%] ">
        <h1 className="text-2xl md:text-4xl font-bold text-primary">How it Works</h1>
         <Accordion type="single" collapsible>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Upload your plan</AccordionTrigger>
             <AccordionContent>
               Easily upload your construction plan via  our Telegram handle. You can also provide additional project details and requirements.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Review by Our Experts</AccordionTrigger>
             <AccordionContent>
               Our experts will review your plan and provide guidance throughout the process. They will also review your project details and requirements.
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Get Detailed BOQ Report</AccordionTrigger>
             <AccordionContent>
               We will provide you with a detailed and accurate Bill of Quantities(BOQ) report, including cost estimates, material requirements, labor costs, and other relevant information.
             </AccordionContent>
           </AccordionItem>
         </Accordion>
          <Link href='' className='p-2  text-white rounded-xl shadow-md hover:shadow-2xl bg-primary  w-fit  hover:bg-[#73b7c2] self-end'>Get Started</Link>
       </div>
       

       <div className="footer relative h-[45vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-end p-6 md:p-10 my-[5%] ">
         
         <div className="footer-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-3xl md:text-5xl font-bold text-center"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Join the thousands of builders who trust Quantify"
      />
            <Button className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Button>
         </div>
         
         
      </div>
    </div>
  );
}
