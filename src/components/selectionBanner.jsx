import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner_image from "@/assets/images/koornwaard.jpg"; // Adjust the path as necessary
import { siteName } from "../lib/utils";
import { NavLink } from "react-router";

export default function SelectionBanner() {
 return (
  <div className="mt-5 relative flex items-center justify-between bg-gray-100 overflow-hidden">
   {/* Left arrow */}
   <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
    <Button className="bg-white rounded-none w-10 h-10 shadow" size="icon">
     <ChevronLeft className="text-orange-600 w-5 h-5" />
    </Button>
   </div>

   {/* Content */}
   <div className="flex flex-col md:flex-row">
    {/* Text Section */}
    <div className="bg-blue-900 text-white flex flex-col justify-center p-10 space-y-4">
     <p className="text-lg">Need a tractor unit, (semi-)trailer, frigo, or closed box?</p>
     <h1 className="text-4xl font-light leading-snug">
      CHECK OUT OUR <span className="font-bold">SELECTION STOCK</span>
     </h1>

     <NavLink
      to="/about"
      className="bg-orange-600 hover:bg-orange-700 text-white w-fit rounded px-6 py-2 text-sm font-semibold"
     >
      More about {siteName}
     </NavLink>
    </div>

    {/* Image Section */}
    <div className="">
     <img src={banner_image} alt="Scania Truck" className="w-full h-full object-cover" />
    </div>
   </div>

   {/* Right arrow */}
   <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
    <Button className="bg-white rounded-none w-10 h-10 shadow" size="icon">
     <ChevronRight className="text-orange-600 w-5 h-5" />
    </Button>
   </div>
  </div>
 );
}
