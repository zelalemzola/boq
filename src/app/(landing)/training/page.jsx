
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";

export default function TrainingPage() {
  return (
    <div className="md:px-4">

      <div className="training relative h-[55vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-end p-6 md:p-10 ">
         
         <div className="training-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-3xl md:text-5xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Training & certification"
      />
             <FadeText
        className="text-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="Learn how to do BOQ, Our training and certification program offers high-end/State of the art courses to help you become an Expert."
      />
            <Link href='/contact' className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Link>
         </div>
         
         
      </div>
       
       <div className="flex flex-col gap-5 my-[6%] md:my-[5%]">
        <h1 className="text-2xl md:text-4xl text-primary font-bold">Three Step To Sucess</h1>
            <FadeText
            
        className="text-md md:text-lg  md:w-[80%] text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Our training and certification program is designed to help you master calculating BOQs at your own pace. Whether you are a beginner, an intermediate or a PRO there is something for everyone."
      />
        {/* <p className="text-md md:text-lg w-[95%] md:w-[80%] text-gray-500">BOQ Pro is an online platform that helps you get professional Bill of Quantities (BOQ) calculation. Whether you are a builder, developer or contractor, you can easily upload your construction plan,/ and get a detailed and accurate BOQ report in minutes.</p> */}
        <Link href='/contact' className='p-2  text-white rounded-xl shadow-md hover:shadow-2xl bg-primary  w-fit  hover:bg-[#73b7c2]'>Get Started</Link>
        
        <div className="flex flex-col md:flex-row  gap-6 md:gap-6 mt-[2%]">
        <div className="flex flex-col gap-4 md:w-[30%]">
          <BlurFade delay={0.85} inView='true'>
          <Image src='/1.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl h-[200px]"/>
          </BlurFade>
          <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
          
        }}
        text="Getting Started"
      />
        
            <FadeText
            
        className="text-md text-gray-500 "
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.85 } },
          
        }}
        text="Learn the basics of quantity.from creating your first project to generating Bill of Quantity"
      />
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
               <BlurFade delay={0.95} inView='true'>
          <Image src='/2.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl h-[200px]"/>
          </BlurFade>
          <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Advanced Training"
      />
    
          <FadeText
            
        className="text-md text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.95 } },
          
        }}
        text="Dive deeper into more complex topics such as customizing your reports and project management"
      />
      
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
               <BlurFade delay={1} inView='true'>
          <Image src='/3.jpg' alt='' width={100} height={100} className="object-cover w-[95%] rounded-xl shadow-xl h-[200px]"/>
          </BlurFade>
           <FadeText
            
        className="text-primary text-xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1.1 } },
          
        }}
        text="Certification Exam"
      />

           <FadeText
            
        className="text-md text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="Test your knowledge and become a certified Quantify Professional.You will need to pass our exam to achieve this"
      />
          
        </div>
      
       </div>
       </div>
       <div className="flex flex-col gap-5 mt-[2%] mb-[5%] ">
        <h1 className="text-2xl md:text-4xl font-bold text-primary">Curiculum Details</h1>
         <Accordion type="single" collapsible>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Introduction to Quantify</AccordionTrigger>
             <AccordionContent>
              This module covers the basics of using Quantify, from setting up your account to creating your first project and generating a Bill of Quantities.             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Advanced Features and Customization</AccordionTrigger>
             <AccordionContent>
              This module covers advanced features and customization in Quantify, such as customizing your project templates, managing your team, and setting up your own custom reports.     
             </AccordionContent>
           </AccordionItem>
           <AccordionItem value="item-1">
             <AccordionTrigger className='text-lg'>Final Certification Exam</AccordionTrigger>
             <AccordionContent>
              This module covers the final certification exam, which will help you become a certified Quantify Professional. You will need to pass this exam to achieve your goal.
             </AccordionContent>
           </AccordionItem>
         </Accordion>
          <Link href='/contact' className='p-2  text-white rounded-xl shadow-md hover:shadow-2xl bg-primary  w-fit  hover:bg-[#73b7c2] self-end'>Get Started</Link>
       </div>
       

       <div className="my-[5%] flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Instructor Biography</h1>
           <div className="flex items-center gap-7">
            <Avatar className='scale-[300%]'>
              <AvatarImage src="/female.jpg" className='w-10 h-10'/>
              <AvatarFallback>Selome</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4 ml-4">
           <h1 className="text-2xl md:text-3xl font-bold text-primary">Selome Mekonen</h1>
            <p className="text-md text-gray-500">Selome is a senior instructor at Quantify with over 10 years of experience in teaching and construction management.</p>
            </div>
           </div>
       </div>
    </div>
  );
}
