import React from "react";

export default function Find({ nextStep, prevStep }) {
 function handleNextStep() {
  nextStep();
 }

 function handlePrevStep() {
  prevStep();
 }
 return (
  <div>
   Find
   <div className="flex flex-row justify-between">
    <button
     type="button"
     onClick={() => handlePrevStep()}
     className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
     prevStep
    </button>

    <button
     type="button"
     onClick={() => handleNextStep()}
     className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
     nextStep
    </button>
   </div>
  </div>
 );
}
