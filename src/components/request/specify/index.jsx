import SpecifyForm from "./form";
import { useState } from "react";
import SpecifyPreview from "./preview";
import { truckTypes } from "../../../lib/utils";

export default function Specify({ nextStep, onClose }) {
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
    setSelectedTruck(selectedTruck);
  }

  function formInfo(data) {
    setFormData(data);
    setActve("preview");
  }

  return (
    <div>
      {!active && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {truckTypes.map((truckType) => (
            <button
              type="button"
              key={truckType?.id}
              to={truckType?.route}
              onClick={() => {
                setActve("form");
                truckSelection(truckType?.id);
              }}
              className="flex flex-row justify-center hover:bg-gray-200 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
            >
              <div className="flex flex-col justify-center items-center space-y-2">
                <img
                  src={truckType.file}
                  alt="Italian Trulli"
                  className={`w-${truckType.semiWidth}`}
                />
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {truckType.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {active === "form" && (
        <div className="space-y-4 md:space-y-8">
          <SelectedTruck
            selectedTruck={selectedTruck}
            truckTypes={truckTypes}
            className="p-4 border-1 border-gray-200 rounded-lg"
            edit={editSelectedTruck}
          />

          <SpecifyForm
            onClose={onClose}
            formData={formInfo}
            editSelectedTruck={editSelectedTruck}
          />
        </div>
      )}

      {active === "preview" && (
         <div className="space-y-4 md:space-y-8">
          <div className="space-y-8 p-5 border-gray-200 bg-gray-200 rounded-lg">
            <SelectedTruck
              selectedTruck={selectedTruck}
              truckTypes={truckTypes}
              edit={editForm}
            />

            <div className="my-5 border-t border-gray-300" />
            <SpecifyPreview formData={formData} />
          </div>

          <div className="flex flex-row justify-between mb-5">
            <button
              type="button"
              onClick={() => editForm()}
              className="px-5 py-2 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg"
            >
              Previous
            </button>

            {active && (
              <button
                type="button"
                onClick={() => handleNextStep()}
                className="px-5 py-2 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
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

const SelectedTruck = ({ truckTypes, selectedTruck, edit, className }) => {
  return (
    <div className={`flex flex-row justify-between items-center ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center space-x-2 space-y-2 w-full">
        <p className> You are searching for a </p>

        <div className="flex flex-row space-x-2 items-center">
          <img
            src={truckTypes[selectedTruck]?.file}
            alt="Italian Trulli"
            className="w-20 md:w-30"
          />

          <p className>{truckTypes[selectedTruck]?.otherName}</p>
        </div>
      </div>

      <p
        className="cursor-default underline underline-offset-8"
        onClick={() => edit()}
      >
        Edit
      </p>
    </div>
  );
};
