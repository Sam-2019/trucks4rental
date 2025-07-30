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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {truckTypes.map((truckType) => (
            <button
              type="button"
              key={truckType?.id}
              to={truckType?.route}
              onClick={() => {
                setActve("form");
                truckSelection(truckType?.id);
              }}
              className="flex flex-row items-center hover:bg-gray-200 space-x-2 text-sm font-medium rounded-lg px-2 py-2 border-1 border-gray-200"
            >
              <img
                src={truckType.file}
                alt="Italian Trulli"
                height={50}
                className="w-25"
              />
              <p className="text-gray-600 leading-relaxed">{truckType.name}</p>
            </button>
          ))}
        </div>
      )}

      <div>
        {active === "form" && (
          <div className="space-y-8">
            <SelectedTruck
              selectedTruck={selectedTruck}
              truckTypes={truckTypes}
              className="p-5 border-1 border-gray-200 rounded-lg"
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
          <div className="space-y-8">
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
                className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300"
              >
                Previous
              </button>

              {active && (
                <button
                  type="button"
                  onClick={() => handleNextStep()}
                  className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SelectedTruck = ({ truckTypes, selectedTruck, edit, className }) => {
  return (
    <div className={`flex flex-row justify-between items-center ${className}`}>
      <div className="flex flex-row items-center space-x-2">
        <p>You are searching for a </p>

        <img
          src={truckTypes[selectedTruck]?.file}
          alt="Italian Trulli"
          className="w-13"
        />

        <p className="text-sm font-medium">
          {truckTypes[selectedTruck]?.otherName}
        </p>
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
