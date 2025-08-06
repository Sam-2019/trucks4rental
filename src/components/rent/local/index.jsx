import LocalForm from "./form";
import { useState } from "react";
import { industries } from "@/lib/utils";
import MaterialForm from "./forms/material";
import RequestorForm from "./forms/requestor";

const Local = ({ onClose }) => {
  const [active, setActve] = useState(null);
  const [industryItems, setIndustryItems] = useState([]);
  const [state, setState] = useState({
    current: null,
    previous: null,
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      {/* <div>previous: {state.previous}</div>
      <div>current: {state.current}</div> */}

      {!active && (
        <div className="space-y-3">
          <p>What are you transporting?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <button
                type="button"
                key={industry.id}
                onClick={() => {
                  setActve("industry");
                  setIndustryItems(industry.examples);
                  setState({
                    previous: null,
                    current: "industry",
                  });
                }}
                className="hover:bg-gray-200 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {active === "industry" && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => {
              setActve(null);
              setState({
                previous: null,
                current: null,
              });
            }}
            className="w-20 md:w-20 hover:bg-red-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            back
          </button>

          {industryItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industryItems.map((example) => (
                <button
                  type="button"
                  key={example}
                  onClick={() => {
                    setActve("subIndustry");
                    setState({
                      previous: "industry",
                      current: "subIndustry",
                    });
                  }}
                  className="hover:bg-gray-200 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
                >
                  {example}
                </button>
              ))}
            </div>
          )}

          {industryItems.length === 0 && (
            <MaterialForm
              nextState={() => {
                setActve("requestorInfo");
                setState({
                  previous: "industry",
                  current: "requestorInfo",
                });
              }}
            />
          )}
        </div>
      )}

      {active === "subIndustry" && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => {
              setActve(state.previous);
              setState({
                previous: null,
                current: "industry",
              });
            }}
            className="w-20 md:w-20 hover:bg-yellow-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            back
          </button>
          <LocalForm
            onClose={onClose}
            nextState={() => {
              setActve("done");
              setState({
                previous: "subIndustry",
                current: "",
              });
            }}
          />
        </div>
      )}

      {active === "requestorInfo" && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => {
              setActve("industry");
              setState({
                previous: "industry",
                current: "",
              });
            }}
            className="w-20 md:w-20 hover:bg-pink-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            back
          </button>

          <RequestorForm
            onClose={onClose}
            nextState={() => {
              setActve("done");
              setState({
                previous: "industry",
                current: "requestorInfo",
              });
            }}
          />
        </div>
      )}

      {active === "done" && (
        <div className="space-y-3">
          <p className="bg-green-500">Success</p>

          <div className="flex flex-row justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="w-20 md:w-20 hover:bg-red-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* {active === "form" && <LocalForm onClose={onClose} />} */}
    </div>
  );
};

export default Local;
