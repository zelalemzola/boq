import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { Menu } from 'lucide-react';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../../components/ui/drawer';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className='py-2 px-5 flex items-center justify-between fixed w-[96%] z-50 bg-white'>
       <h1 className='text-2xl md:text-3xl font-bold text-primary'>Quantify.</h1>

        <div className="hidden lg:flex items-center gap-4 text-lg">
          <Link href='/' className='text-primary hover:text-white hover:bg-primary p-1 hover:rounded-xl'>Home</Link>
          <Link href='/about' className='text-primary hover:text-white hover:bg-primary p-1 hover:rounded-xl'>About Us</Link>
          <Link href='/contact' className='text-primary hover:text-white hover:bg-primary p-1 hover:rounded-xl'>Contact Us</Link>
          <Link href='/training' className='text-primary hover:text-white hover:bg-primary p-1 hover:rounded-xl'>Our Training</Link>
          <Link href='/workers' className='text-white bg-primary  rounded-xl shadow-md hover:shadow-xl p-1 px-2'>Meet our Professionals</Link>
        </div>        
        <div className="lg:hidden flex">
           <Drawer>
             <DrawerTrigger>
              <Menu width={32} height={32} className='font-bold text-primary' />
             </DrawerTrigger>
             <DrawerContent>
               <DrawerHeader>
                 <DrawerTitle className='text-primary text-lg'>Where are you headed?</DrawerTitle>
               </DrawerHeader>
                <div className="flex flex-col items-center gap-4">
                   <Link href='/' className='text-primary hover:text-white hover:bg-[#73b7c2] p-1 hover:rounded-xl'>Home</Link>
                   <Link href='/about' className='text-primary hover:text-white hover:bg-[#73b7c2] p-1 hover:rounded-xl'>About Us</Link>
                   <Link href='/contact' className='text-primary hover:text-white hover:bg-[#73b7c2] p-1 hover:rounded-xl'>Contact Us</Link>
                   <Link href='/training' className='text-primary hover:text-white hover:bg-[#73b7c2] p-1 hover:rounded-xl'>Our Training</Link>
                   <Link href='/workers' className='text-white bg-primary  rounded-xl shadow-md hover:shadow-xl p-1'>Meet our Professionals</Link>
                 </div>   
               <DrawerFooter>
                 <DrawerClose>
                   <Button variant="outline">Cancel</Button>
                 </DrawerClose>
               </DrawerFooter>
             </DrawerContent>
           </Drawer>

        </div>
    </div>

  )
}

export default Navbar;
