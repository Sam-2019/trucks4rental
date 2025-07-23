import SpecifyForm from "./form";
import { useState } from "react";
import SpecifyPreview from "./preview";
import { truckTypes } from "../../../lib/utils";

export default function Specify({ nextStep, onClose }) {
  const [currentState, setCurrentState] = useState("hello");
  const [active, setActve] = useState(null);
  const [selectedTruck, setSelectedTruck] = useState(0);
  const [formData, setFormData] = useState(null);

  function handleNextStep(id) {
    setActve("specify");
    nextStep();
  }

  function handleClose() {
    onClose();
  }

  function updateView(value) {
    // setSelectedTruck(id);
    // if (id === 4) {
    //   return setCurrentState("");
    // }

    setActve(value);
  }

  function truckSelection(value) {
    setSelectedTruck(value);
  }

  function editSelectedTruck() {
    setActve("");
    setSelectedTruck(0);
  }

  function editForm() {
    setActve("form");
    setSelectedTruck(0);
  }

  function formInfo(data) {
    setFormData(data);
    setActve("preview");
  }

  return (
    <div className="flex-grow  sm:px-8 relative">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          We find your vehicle
        </h2>
      </div>

      <p className="text-gray-600 mb-5 leading-relaxed">
        Good choice! Let us help you find the right vehicle. In 90% of the
        searches we find the perfect match. Tell us what you are looking for.
      </p>

      {!active && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {truckTypes.map((truckType) => (
            <button
              type="button"
              key={truckType?.id}
              to={truckType?.route}
              onClick={() => {
                // console.log(truckType?.id)
                setActve("form");
                // setSelectedTruck(truckType?.id);
                truckSelection(truckType?.id);
              }}
              className={`flex flex-row items-center  hover:text-blue-600 hover:underline underline-offset-8 space-x-2 text-sm font-medium text-gray-700 rounded-lg  border-2 border-red-500 px-2 py-${2}`}
            >
              <img
                src={truckType.file}
                alt="Italian Trulli"
                height={50}
                className="w-25 text-center border-2 border-red-500"
              />
              <p className="text-gray-600 leading-relaxed">{truckType.name}</p>
            </button>
          ))}
        </div>
      )}

      {active === "form" && (
        <div className="space-y-8">
          <div className="flex flex-row justify-between items-center p-5 border-2 border-gray-200">
            <div className="flex flex-row items-center space-x-2">
              <p>You are searching for a </p>

              <img
                src={truckTypes[selectedTruck]?.file}
                alt="Italian Trulli"
                className="w-13"
              />

              <p>{truckTypes[selectedTruck]?.otherName}</p>
            </div>
            <p
              className="cursor-default underline underline-offset-8"
              onClick={() => editSelectedTruck()}
            >
              Edit
            </p>
          </div>
          <SpecifyForm
            onClose={onClose}
            formData={formInfo}
            editSelectedTruck={editSelectedTruck}
          />
        </div>
      )}

      {active === "preview" && (
        <div className="space-y-8">
          <div className="space-y-8 p-5  border-gray-200 bg-gray-200">
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row items-center space-x-2">
                <p>You are searching for a </p>

                <img
                  src={truckTypes[selectedTruck]?.file}
                  alt="Italian Trulli"
                  className="w-13"
                />

                <p>{truckTypes[selectedTruck]?.otherName}</p>
              </div>
              <p
                className="cursor-default underline underline-offset-8"
                onClick={() => editForm()}
              >
                Edit
              </p>
            </div>
            <div className="my-5 border-t border-gray-300" />
            <SpecifyPreview formData={formData} />
          </div>

          <div className="flex flex-row justify-between mb-5">
            <button
              type="button"
              onClick={() => editForm()}
              className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Previous
            </button>

            {active && (
              <button
                type="button"
                onClick={() => handleNextStep()}
                className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
