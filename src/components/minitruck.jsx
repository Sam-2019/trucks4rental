import { ArrowRightIcon } from "@radix-ui/react-icons";
import semi_trailer from "../assets/icons/semi_trailer.png";
import tractor_unit from "../assets/icons/tractor_unit.png";
import tipper from "../assets/icons/tipper.png";
import trailer from "../assets/icons/trailer.png";
import truck from "../assets/icons/truck.png";
import mixer from "../assets/icons/mixer.png";
import loading_box from "../assets/icons/loading_box.png";
import { NavLink } from "react-router";

const truckTypes = [
  {
    id: 0,
    name: "Tipper",
    otherName: "Tipper",
    file: tipper,
    mobilePaddingHeight: "auto",
    padding_y: 4,
    height: 10,
    width: "95%",
    homeWidth: "100%",
    semiWidth: "20",
    route: "/inventory?kind-tipper=true",
  },
  {
    id: 3,
    name: "Trailer",
    otherName: "Trailer",
    file: trailer,
    mobilePaddingHeight: "auto",
    padding_y: 4,
    height: 10,
    width: "90%",
    semiWidth: "20",
    route: "/inventory?kind-trailer=true",
  },
  {
    id: 1,
    name: "Semi Trailer",
    otherName: "Semi-trailer",
    file: semi_trailer,
    mobilePaddingHeight: "auto",
    padding_y: 6,
    height: 10,
    width: "100%",
    homeWidth: "100%",
    semiWidth: "20",
    route: "/inventory?kind-semitrailer=true",
  },
  {
    id: 2,
    name: "Truck",
    otherName: "Truck",
    file: truck,
    mobilePaddingHeight: "auto",
    padding_y: 6,
    height: 10,
    width: "100%",
    homeWidth: "100%",
    semiWidth: "20",
    route: "/inventory?kind-truck=true",
  },

  {
    id: 4,
    name: "Tractor",
    otherName: "Tractor",
    file: tractor_unit,
    mobilePaddingHeight: "auto",
    padding_y: 2,
    height: 10,
    width: "60%",
    semiWidth: "15",
    route: "/inventory?kind-tractorunit=true",
  },
  {
    id: 5,
    name: "Mixer",
    otherName: "Mixer",
    file: mixer,
    mobilePaddingHeight: "auto",
    padding_y: 6,
    height: 10,
    width: "100%",
    homeWidth: "100%",
    semiWidth: "20",
    route: "/inventory?kind-mixer=true",
  },
  {
    id: 6,
    name: "Loading Box",
    otherName: "Loading Box",
    file: loading_box,
    mobilePaddingHeight: "auto",
    padding_y: 7,
    height: 10,
    width: "100%",
    homeWidth: "100%",
    semiWidth: "20",
    route: "/inventory?kind-loadingbox=true",
  },
];

export default function Minitrucks({ header }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-500 py-5">{header}</h2>
      <div className="hidden md:block">
        <div className="flex flex-row justify-between items-center">
          <div className="grid grid-cols-8 gap-3 justify-between items-center w-auto">
            {truckTypes.map((truckType) => (
              <NavLink
                key={truckType.id}
                to={truckType.route}
                className="p-2 bg-gray-200 hover:bg-amber-600 rounded-lg flex flex-col justify-between items-center hover:text-white  text-sm font-medium text-gray-700"
              >
                <img
                  src={truckType.file}
                  alt="Italian Trulli"
                  className={`text-center py-${truckType.padding_y} `}
                />
                <p>{truckType.name}</p>
              </NavLink>
            ))}
          </div>

          {/* Right - Inventory, Services, Contact */}

          <NavLink
            to="/inventory"
            className="hover:text-amber-600 flex justify-center items-center space-x-1 text-sm font-medium text-gray-700 py-4 w-90"
          >
            <p>All Vehicles </p>
            <ArrowRightIcon />
          </NavLink>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-9">
          <div className="grid grid-cols-2 gap-4 justify-between items-center">
            {truckTypes.map((truckType) => (
              <NavLink
                key={truckType.id}
                to={truckType.route}
                className="px-2 pt-2 pb-1.5 border-1 border-gray-200 bg-gray-200 rounded-lg w-auto flex flex-col justify-between items-center hover:text-amber-600 hover:underline underline-offset-8 text-sm font-medium text-gray-700"
              >
                <img
                  src={truckType.file}
                  alt="Italian Trulli"
                  width={truckType.width}
                />
                <p>{truckType.name}</p>
              </NavLink>
            ))}
          </div>

          {/* Right - Inventory, Services, Contact */}

          <NavLink
            to="/inventory"
            className="hover:text-amber-600 hover:underline underline-offset-8 flex justify-center items-center space-x-1 text-sm font-medium text-gray-700"
          >
            <p>All Vehicles </p>
            <ArrowRightIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
