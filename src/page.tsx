"use client";

import Image from "next/image";
import earth from '@/app/asset/image/earth21.png';

import astronaut from '@/app/asset/image/astronaut 2.png';
import { motion } from 'framer-motion';

import React from "react";

import {  MapPin } from "lucide-react";
import Side from "../components/side";






export default function Earth() {
  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-opacity-90">
        <div className="flex-col items-center justify-start w-full ml-96 mt-[-200]">
          <h1 className="text-left text-6xl font-bold bg-gradient-to-b from-indigo-600 bg-blue-100 bg-clip-text text-transparent">EARTH PLANET</h1>
          <div className="max-w-lg p-7 ">
            <p className="text-lg">Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth&apos;s surface is land consisting of continents and islands. Much of Earth&apos;s polar regions are covered in ice.</p>
            
          </div>
          <div className="flex items-center justify-start gap-6">
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-b from-orange-600 to-yellow-200  text-black rounded-full shadow-lg">
          <MapPin className="w-8 h-8 text-black"/>
        </div>
          <p>Earth/Earth</p>
          <p className="font-bold">0 km</p>
        </div>
        </div>
        <Side/>
      </div>
      
      <div className="flex justify-center items-center mb-4 absolute bottom-[-50] z-[-10]  left-0 w-full">
        <Image
          className="mb-4 h-auto"
          src={earth}
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
