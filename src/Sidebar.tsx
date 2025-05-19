
'use client';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import sidebarImage from '@/app/asset/image/shuttel1.png'; 




interface SidebarProps {
  isOpen: boolean; 
  
}

const Sidebar: FC<SidebarProps> = ({ isOpen}) => {
  return (
    <div className="relative">
      {/* Sidebar */}
      {isOpen && (
         <motion.div
         className={`fixed left-0 top-0 w-min h-screen text-white flex flex-col justify-center ${isOpen ? 'z-10' : 'z-0'}`}
         initial={{ x: -300, opacity: 0 }} 
         animate={{ x: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }} 
         exit={{ x: -300, opacity: 0 }} 
         transition={{ duration: 0.5 }} 
       >
         <ul className="flex flex-col items-start p-4">
           <li className="py-2">
             <Link href="/" className='hover:bg-indigo-600'>Home</Link>
           </li>
           <li className="py-2">
             <Link href="/mercury" className='hover:bg-indigo-600'>Mercury</Link>
           </li>
           <li className="py-2">
             <Link href="/venus" className="hover:bg-indigo-600">Venus</Link>
           </li>
           <li className="py-2">
             <Link href="/earth" className='hover:bg-indigo-600'>Earth</Link>
           </li>
           <li className="py-2">
             <Link href="/mars" className='hover:bg-indigo-600'>Mars</Link>
           </li>
           <li className="py-2">
             <Link href="/jupiter" className='hover:bg-indigo-600'>Jupiter</Link>
           </li>
           <li className="py-2">
             <Link href="/saturn" className='hover:bg-indigo-600'>Saturn</Link>
           </li>
           <li className="py-2">
             <Link href="/uranus" className='hover:bg-indigo-600'>Uranus</Link>
           </li>
           <li className="py-2">
             <Link href="/neptune" className='hover:bg-indigo-600'>Neptune</Link>
           </li>
         </ul>
       </motion.div>
      )}

      
      {!isOpen && (
         <motion.div
         className="fixed left-10 bottom-0 z-0"
         initial={{ opacity: 0, y: 50 }} 
         animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 50 : 0 }} 
         exit={{ opacity: 0, y: 50 }} 
         transition={{ duration: 0.5 }} 
       >
         <Image
           src={sidebarImage}
           
           alt="Sidebar Image"
           width={500} 
           height={500} 
           className="object-cover"
         />
       </motion.div>
      )}
    </div>
  );
};

export default Sidebar;