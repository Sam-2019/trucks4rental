import React, { useState } from "react";

import { truckTypes } from "../../../lib/utils";
import { NavLink } from "react-router";
import SpecifyForm from "./form";

export default function Specify({ nextStep, onClose }) {
  const [currentState, setCurrentState] = useState("hello");
  const [active, setActve] = useState(null);
  const [selectedTruck, setSelectedTruck] = useState(null);

  function handleNextStep(id) {
    setActve("specify");
    nextStep();
  }

  function handleClose() {
    onClose();
  }

  function updateView(id) {
    setSelectedTruck(id);
    if (id === 4) {
      return setCurrentState("");
    }

    setActve(id);
  }

  return (
    <div className="flex-grow  sm:px-8 relative">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          We find your vehicle
        </h2>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Good choice! Let us help you find the right vehicle. In 90% of the
        searches we find the perfect match. Tell us what you are looking for.
      </p>

      {!active && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {truckTypes.map((truckType) => (
            <button
              type="button"
              key={truckType.id}
              to={truckType.route}
              onClick={() => {
                updateView("specify");
                setSelectedTruck(truckType.id);
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

      {active === "specify" && (
        <div className="">
          {/* <Truck selectedTruck={selectedTruck} />
           */}

           <SpecifyForm />
        </div>
      )}

      <div className="flex flex-row justify-between">
        <button
          type="button"
          onClick={() => handleClose()}
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          cancel
        </button>

        {currentState === "hello" ? (
          <button
            type="button"
            onClick={() => updateView(active + 1)}
            className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            next flow
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleNextStep()}
            className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            nextStep
          </button>
        )}
      </div>
    </div>
  );
}

function Truck(selectedTruck) {
  console.log(selectedTruck);
  console.log(truckTypes[0]);
  return (
    <div>
      <p>Truck</p>

      <p>You're searching for </p>
      <div>{truckTypes[0]?.id}</div>
      <p>Edit </p>
    </div>
  );
}
