"use client";

import Image from "next/image";
import mercury from '@/app/asset/image/mercury1.png';
import astronaut from '@/app/asset/image/astronaut 2.png';
import { motion } from 'framer-motion';

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import Sidebar from "../components/Sidebar";

const Mercury: React.FC = () => {
  const [isOpen] = useState(true); 

  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-opacity-90">
        <div className="flex-col items-center justify-start w-full ml-96 mt-[-200]">
          <h1 className="text-left text-6xl font-bold bg-gradient-to-b from-yellow-900 to-yellow200 bg-clip-text text-transparent">
            MERCURY PLANET
          </h1>
          <div className="max-w-lg p-7">
            <p className="text-lg">
              Mercury is the smallest planet in the Solar System and the closest to the Sun...
            </p>
          </div>
          <div className="flex items-center justify-start gap-6">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <p>Mercury/Earth</p>
            <p className="font-bold">200.35 million km</p>
          </div>
          <Sidebar isOpen={isOpen} />
          <main className="p-4"></main>
        </div>
      </div>

      <div className="flex justify-center items-center mb-4 absolute bottom-[-50] z-[-10] left-0 w-full">
        <Image
          className="mb-4 h-auto"
          src={mercury}
          alt="earth"
          width={1500}
          height={undefined}
        />
      </div>

      <div className="absolute bottom-20 right-[-15] z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
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

export default Mercury;
