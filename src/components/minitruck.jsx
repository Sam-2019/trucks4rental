import { ArrowRightIcon } from "@radix-ui/react-icons";
import semi_trailer from "../assets/icons/semi_trailer.png";
import tractor_unit from "../assets/icons/tractor_unit.png";
import tipper from "../assets/icons/tipper.png";
import trailer from "../assets/icons/trailer.png";
import truck from "../assets/icons/truck.png";
import { NavLink } from "react-router";
import { truckTypes } from "../lib/utils";

export default function Minitrucks({ header }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-500 py-5">{header}</h2>
      <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-3 md:flex md:flex-row space-x-6">
          {truckTypes.map((truckType) => (
            <NavLink
              key={truckType.id}
              to={truckType.route}
              className="w-32 flex flex-col justify-between items-center hover:text-amber-600 hover:underline underline-offset-8 space-x-1 text-sm font-medium text-gray-700 py-2"
            >
              <img
                src={truckType.file}
                alt="Italian Trulli"
                width={truckType.width}
                height={50}
                className={`text-center py-${truckType.padding_y} `}
              />
              <p>{truckType.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Right - Stocks, Services, Contact */}

        <NavLink
          to="/stocks"
          className="hover:text-amber-600 hover:underline underline-offset-8 flex justify-center items-center space-x-1 text-sm font-medium text-gray-700 py-4 "
        >
          <p>All Vehicles </p>
          <ArrowRightIcon />
        </NavLink>
      </div>
    </div>
  );
}
