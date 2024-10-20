'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d card"
import courseData from '@/components/data/code_courses.json'

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7x1 text-center font-sans font-bold mb-8  text-white">All Courses({courseData.courses.length})</h1>
      <div className="flex flex-wrap justify-center">
        



      </div>
      
    </div>
  )
}

export default page
