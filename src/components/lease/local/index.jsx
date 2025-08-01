import LocalForm from "./form";
import { useState } from "react";
import { industries } from "@/lib/utils";

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
        <div className="space-y-4">
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
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => {
              setActve(state.previous);
              setState({
                previous: null,
                current: null,
              });
            }}
            className="w-20 md:w-20 hover:bg-red-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            back
          </button>
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
        </div>
      )}

      {active === "subIndustry" && (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => {
              setActve(state.previous);
              setState({
                previous: null,
                current: "industry",
              });
            }}
            className="w-20 md:w-20 hover:bg-green-500 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            back
          </button>
          <p>hello</p>
          {/* <button
            type="button"
            onClick={() => handleClose()}
            className="md:hidden w-full hover:bg-gray-200 space-x-2 rounded-lg py-2 md:py-3 border-1 border-gray-200"
          >
            Cancel
          </button> */}
        </div>
      )}
      {active === "form" && <LocalForm onClose={onClose} />}
    </div>
  );
};

export default Local;
