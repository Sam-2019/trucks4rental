import { useState, useCallback, useEffect, useRef } from "react";
import Find from "./find";
import Search from "./search";
import Specify from "./specify/index";

// const steps = [
//  { index: 0, subIndex: 0, title: "You Specify", component: <Search /> },
//  { index: 0, subIndex: 1, title: "Specify 1", component: <SubPage name="Search 1" /> },
//  { index: 0, subIndex: 2, title: "Specify 2", component: <SubPage name="Search 2" /> },

//  { index: 1, subIndex: 3, title: "We Search", component: <Specify /> },
//  { index: 1, subIndex: 4, title: "Search 1", component: <SubPage name="Specify 1" /> },
//  { index: 1, subIndex: 5, title: "Search 2", component: <SubPage name="Specify 2" /> },

//  { index: 2, subIndex: 6, title: "We Find", component: <Find /> },
//  { index: 2, subIndex: 7, title: "Find 1", component: <SubPage name="Find 1" /> },
//  { index: 2, subIndex: 8, title: "Find 2", component: <SubPage name="Find 2" /> },
// ];

const SubPage = (name) => {
 return <div>{name}</div>;
};

const steps = [
 { index: 0, subIndex: 0, title: "You Specify", component: <Search /> },
 { index: 1, subIndex: 1, title: "We Search", component: <Specify /> },
 { index: 2, subIndex: 2, title: "We Find", component: <Find /> },
];

const Stepper = ({ onClose }) => {
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
  <div className="space-y-1">
   <div ref={containerRef} className="flex flex-col mx-auto focus:outline-none md:flex-row space-y-6">
    <div className="w-full md:w-40">
     <StepIndicators steps={steps} currentStep={currentStep} />
    </div>

    <div className="w-full border-2 border-red-500">
     {steps[0].index === currentStep && <Specify nextStep={nextStep} onClose={onClose} />}
     {/* {steps[1].subIndex === currentStep && <SubPage name="Specify 1" nextStep={nextStep} prevStep={prevStep} />}
     {steps[2].subIndex === currentStep && <SubPage name="Specify 2" nextStep={nextStep} prevStep={prevStep} />} */}
     {steps[1].index === currentStep && <Search nextStep={nextStep} prevStep={prevStep}  />}
     {/* {steps[4].subIndex === currentStep && <SubPage name="Search 1" nextStep={nextStep} prevStep={prevStep} />}
     {steps[5].subIndex === currentStep && <SubPage name="Search 1" nextStep={nextStep} prevStep={prevStep} />} */}
     {steps[2].index === currentStep && <Find nextStep={nextStep} prevStep={prevStep}  />}
     {/* {steps[7].subIndex === currentStep && <SubPage name="Find 1" nextStep={nextStep} prevStep={prevStep} />}
     {steps[8].subIndex === currentStep && <SubPage name="Find 1" nextStep={nextStep} prevStep={prevStep} />} */}
    </div>
   </div>
  </div>
 );
};

export default Stepper;

const StepIndicators = ({ steps, currentStep }) => {
 return (
  <div className="flex flex-row justify-between md:flex-col w-full space-y-5 ">
   {steps.map((step) => (
    <div key={step.index} className="flex flex-col items-center">
     <div
      className={`w-10 h-10 flex items-center justify-center rounded-full font-bold
              ${step.index === currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
     >
      {step.index + 1}
     </div>
     <p className="text-xs sm:text-sm mt-1">{step.title}</p>
    </div>
   ))}
  </div>
 );
};
