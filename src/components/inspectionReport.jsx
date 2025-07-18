import React from "react";
import Ratings from "../components/ui/ratings";

export default function InspectionReport() {
 return (
  <div className="py-9">
   <p className="text-3xl font-bold">Inspection report</p>

   <div className="my-5 border-t border-gray-300" />

   <p className="my-4 text-2xl font-bold">Chassis</p>

   <div className="grid grid-cols-3 mb-3">
    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Tacho</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Dashboard display codes</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Electrical</p>
      <Ratings value={3} variant="yellow" />
     </div>
    </div>
   </div>

   <div className="my-5 border-t border-gray-300" />

   <p className="my-4 text-2xl font-bold"> Cabin</p>
   <div className="grid grid-cols-3 mb-3">
    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Internal</p>

      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">External</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Steering column</p>
      <Ratings value={3} variant="yellow" />
     </div>
    </div>

    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Suspension</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Chassis</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Brakes</p>
      <Ratings value={4} variant="yellow" />
     </div>
    </div>
   </div>

   <div className="my-5 border-t border-gray-300" />

   <p className="my-4 text-2xl font-bold">Drivetrain</p>

   <div className="grid grid-cols-3 mb-3">
    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Engine, general</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Cooling system</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Fuel system</p>
      <Ratings value={4} variant="yellow" />
     </div>
    </div>

    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Exhaust system</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Greasing system</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Gearbox</p>
      <Ratings value={4} variant="yellow" />
     </div>
    </div>

    <div className="w-96 space-y-2">
     <div className="flex flex-row">
      <p className="w-58 text-sm">Clutch</p>
      <Ratings value={4} variant="yellow" />
     </div>

     <div className="flex flex-row">
      <p className="w-58 text-sm">Drivetrain</p>
      <Ratings value={4} variant="yellow" />
     </div>
    </div>
   </div>

   <div className="my-5 border-t border-gray-300" />

   <div>
    <p className="my-4 text-2xl font-bold">Tyres/Wheels</p>
    <div className="grid grid-cols-1 mb-3">
     <div className="w-96 space-y-2">
      <div className="flex flex-row">
       <p className="w-58 text-sm">Tyres</p>
       <Ratings value={3} variant="yellow" />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
