"use client";

import Image from "next/image";
import mars from '@/app/asset/image/mars1.png';

import astronaut from '@/app/asset/image/astronaut 2.png';
import { motion } from 'framer-motion';

import React from "react";

import { MapPin } from "lucide-react";
import Side from "../components/side";





export default function Mars(){
  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-opacity-90">
        <div className="flex-col items-center justify-start w-full ml-96 mt-[-200]">
          <h1 className="text-left text-6xl font-bold bg-gradient-to-b from-red-800 bg-red-300 bg-clip-text text-transparent">MARS PLANET</h1>
          <div className="max-w-lg p-7 ">
            <p className="text-lg">{"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."}</p>
            
          </div>
          <div className="flex items-center justify-start gap-6">
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-b from-orange-600 to-yellow-200  text-black rounded-full shadow-lg">
          <MapPin className="w-8 h-8 text-black"/>
          
        </div>
          <p>Mars/Earth</p>
          <p className="font-bold">388.49 million km.</p>
        </div>
        </div>
        <Side/>
      </div>
      <div className="flex justify-center items-center mb-4 absolute bottom-[-50] z-[-10]  left-0 w-full">
        <Image
          className="mb-4 h-auto"
          src={mars}
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
}
