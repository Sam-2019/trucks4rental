import { useState, useCallback, useEffect, useRef } from "react";
import Find from "../src/components/steps/find";
import Search from "../src/components/steps/search";
import Specify from "../src/components/steps/specify";

const steps = [
 { index: 0, title: "You Specify", component: <Specify /> },
 { index: 1, title: "We Search", component: <Search /> },
 { index: 2, title: "We Find", component: <Find /> },
];

export default function Stepper() {
 const [currentStep, setCurrentStep] = useState(0);
 const containerRef = useRef(null);

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 const nextStep = useCallback(() => {
  setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
 }, [steps.length]);
 const prevStep = useCallback(() => {
  setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
 }, []);

 const isTyping = () => {
  const activeElement = document.activeElement;
  return activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;
 };

 const handleKeyDown = useCallback(
  (event) => {
   if (containerRef.current?.contains(document.activeElement)) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
     event.preventDefault();
    }
    if (event.ctrlKey) {
     if (event.key === "ArrowRight") nextStep();
     if (event.key === "ArrowLeft") prevStep();
    }
   }
  },
  [nextStep, prevStep],
 );

 useEffect(() => {
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
 }, [handleKeyDown]);

 return (
  <div ref={containerRef} className="w-full max-w-lg mx-auto px-4 focus:outline-none">
   <StepIndicators steps={steps.map((step) => step.index)} currentStep={currentStep} />

   <div className="p-4 border border-gray-300 rounded-md shadow-md text-center">{steps[currentStep].component}</div>

   <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
    <button
     type="button"
     className="px-4 py-2 rounded transition-all duration-200 bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
     onClick={prevStep}
     disabled={currentStep === 0}
    >
     Previous
    </button>
    <button
     type="button"
     className="px-4 py-2 rounded transition-all duration-200 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
     onClick={nextStep}
     disabled={currentStep === steps.length - 1}
    >
     {currentStep === steps.length - 1 ? "Finish" : "Next"}
    </button>
   </div>

   <p className="text-sm text-gray-500 mt-4 text-center">
    Use <kbd className="bg-gray-200 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-200 px-1 rounded">←</kbd> /{" "}
    <kbd className="bg-gray-200 px-1 rounded">→</kbd> to navigate steps.
   </p>
  </div>
 );
}

const StepIndicators = ({ steps, currentStep }) => {
 return (
  <div className="flex flex-col justify-between mb-6">
   {steps.map((step) => (
    <div key={steps.index} className="flex flex-col items-center">
     <div
      className={`w-10 h-10 flex items-center justify-center rounded-full font-bold
              ${steps.index === currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
     >
      {steps.index + 1}
     </div>
     <p className="text-xs sm:text-sm mt-1">{step.title}</p>
    </div>
   ))}
  </div>
 );
};
