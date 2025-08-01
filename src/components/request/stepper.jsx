import Find from "./find";
import Search from "./search";
import Specify from "./specify/index";
import { useState, useCallback, useEffect, useRef } from "react";

const steps = [
  { index: 0, subIndex: 0, title: "You Specify", component: <Search /> },
  { index: 1, subIndex: 1, title: "We Search", component: <Specify /> },
  { index: 2, subIndex: 2, title: "We Find", component: <Find /> },
];

const Stepper = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);
  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, [steps.length]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

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
    [nextStep, prevStep]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col mx-auto focus:outline-none md:flex-row space-y-6 overflow-y-auto h-[570px] md:h-auto"
    >
      {/* StepIndicators */}
      <div className="w-full md:w-40">
        <div className="flex flex-row justify-between md:flex-col w-full space-y-5 ">
          {steps.map((step) => (
            <div key={step.index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold
              ${
                step.index === currentStep
                  ? "bg-amber-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              >
                {step.index + 1}
              </div>
              <p className="text-xs sm:text-sm mt-1">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow sm:px-8 relative space-y-4 md:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          We find your vehicle
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Good choice! Let us help you find the right vehicle. In 90% of the
          searches we find the perfect match. Tell us what you are looking for.
        </p>

        {steps[0].index === currentStep && (
          <Specify nextStep={nextStep} onClose={onClose} />
        )}

        {steps[1].index === currentStep && (
          <Search nextStep={nextStep} prevStep={prevStep} />
        )}

        {steps[2].index === currentStep && (
          <Find nextStep={nextStep} prevStep={prevStep} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default Stepper;
