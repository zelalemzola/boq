import { Merriweather, Outfit } from "next/font/google";

import Navbar from "./_components/Navbar";


// const inter = Merriweather({ subsets: ["latin"], weight:['300','400', '700', '900'] });
const inter = Outfit({ subsets: ["latin"],});


export const metadata = {
  title: "BOQ Professionals",
  description: "BOQ Professionals",
};

export default function LandingLayout({ children }) {
  return (
      <div className={`${inter.className} antialiased px-4 md:px-6`} >
        <Navbar/>
       <div className="pt-[22%] md:pt-[10%] lg:pt-[6%] px-4 md:px-6  w-[97%] md:w-[95%] mx-auto z-0">
        {children}
        </div>
      
      </div>
   
  );
}
