'use client';

import Image from "next/image";
import sun from '@/app/asset/image/sun1.png';
import astronaut from '@/app/asset/image/astronaut 2.png';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Sidebar from './components/Sidebar';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const router = useRouter(); 

  const navigateToPage = async (path: string) => {
    setIsOpen(false); 
    try {
      await router.push(path); 
    } catch (error) {
      console.error('Navigation error:', error); 
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-opacity-90">
        <div className="flex-col items-center justify-start w-full ml-96 mt-[-200]">
          <h1 className="text-left text-6xl font-bold bg-gradient-to-b from-orange-600 via-orange-400 to-orange-100 bg-clip-text text-transparent">
            GALAXY TRAVEL
          </h1>
          <div className="max-w-lg p-5">
            <p className="text-lg">
              A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems...
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => navigateToPage('/mercury')}
                className="p-3 w-1/2 bg-gradient-to-b from-orange-600 to-yellow-200 text-black rounded-full"
              >
                {isOpen ? 'Get Start' : 'Open Sidebar'}
              </button>
              <Sidebar isOpen={isOpen} />
              <main className="p-4"></main>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-4 absolute bottom-[-50] z-[-10] left-0 w-full">
        <Image
          className="mb-4 h-auto"
          src={sun}
          alt="sun"
          width={1500}
          height={undefined}
        />
      </div>

      <div className="absolute bottom-20 right-[-15] z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        >
          <Image
            className="h-auto"
            src={astronaut}
            alt="astronaut"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
