import { useState } from "react";
import { Star } from "lucide-react";
import { NavLink } from "react-router";
import { TruckImagesMobile } from "./truckImages";
import { SubCarouselTransition } from "../carousel/carouselTransition";
import { MainCarouselTransition } from "../carousel/carouselTransition";

function TruckCard({ vehicle }) {
 
  const [fill, setFill] = useState(false);

  const toggleFill = () => {
    setFill(!fill);
  };

  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <SubCarouselTransition images={vehicle.images} url={vehicle.url} />

      <div className="vehicle-info w-full bg-white p-8 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <NavLink to={vehicle.url} className="text-2xl font-semibold">
            {vehicle.name}
          </NavLink>
          <Star
            size={25}
            fill={fill ? "#021f6e" : "white"}
            color="#021f6e"
            strokeWidth={1}
            onClick={toggleFill}
          />
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 gap-3 mt-5">
          {vehicle.technicalCondition && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Technical condition</span>
              <span>{vehicle.technicalCondition}</span>
            </p>
          )}

          {vehicle.number && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>No.</span>
              <span>{vehicle.number}</span>
            </p>
          )}

          {vehicle.kind && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Kind</span>
              <span>{vehicle.kind}</span>
            </p>
          )}

          {vehicle.specification && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Specification</span>
              <span>{vehicle.specification}</span>
            </p>
          )}

          {vehicle.matriculationYear && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Matriculation year</span>
              <span>{vehicle.matriculationYear}</span>
            </p>
          )}

          {vehicle.specification && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Specification</span>
              <span>{vehicle.specification}</span>
            </p>
          )}

          {vehicle.axlesCount && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Number of axles</span>
              <span>{vehicle.axlesCount}</span>
            </p>
          )}

          {vehicle.suspensionType && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Suspension Type</span>
              <span>{vehicle.suspensionType}</span>
            </p>
          )}

          {vehicle.gearbox && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Gearbox</span>
              <span>{vehicle.gearbox}</span>
            </p>
          )}

          {vehicle.engineCapacity && (
            <p className="text-sm flex flex-row justify-between items-center">
              <span>Engine Capacity</span>
              <span>{vehicle.engineCapacity}</span>
            </p>
          )}
        </div>

        <div className="my-5 border-t border-gray-300" />

        <div className="flex flex-row items-center">
          <div className="w-1/3 text-gray-500 text-2xl font-medium">Price</div>
          <div className="text-2xl font-medium">
            {vehicle.currency} {vehicle.price}{" "}
            <span className="text-gray-500 text-xs font-normal">
              {vehicle.currencySuffix}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TruckCardMobile({ vehicle }) {
  return (
    <div className="vehicle-info w-full bg-white rounded-lg">
      <TruckImagesMobile />
      <div className="ml-2 p-2">
        <p className="mt-2">{vehicle.name}</p>

        <div className="grid grid-cols-2 gap-2 py-6 border-b border-gray-300">
          <div>No.</div>
          <div>319367</div>
          <div>Matriculation year</div>
          <div>2016-4</div>
          <div>Mileage</div>
          <div>817,133 km</div>
          <div>Gearbox</div>
          <div>Manual</div>
        </div>

        <div className="flex flex-col mt-5">
          <p className="w-30">Price</p>
          <p className="text-2xl font-medium">
            {vehicle.currency} {vehicle.price}{" "}
            <span className="text-xs">{vehicle.currencySuffix}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TruckCardMobileNew({ vehicle }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full">
      {/* Image Section */}

      <MainCarouselTransition images={vehicle.images} url={vehicle.url} />

      {/* Truck Image */}

      {vehicle.new && (
        <div className="vehicle-card__ribbon bg-amber-600">
          <div className=" text-white text-xs font-bold">New</div>
        </div>
      )}

      {/* Details Section */}
      <div className="p-4 flex flex-col justify-between ">
        <NavLink
          to={vehicle.url}
          className="text-xl font-bold text-gray-800 mb-4 min-h-"
        >
          {vehicle.name}
        </NavLink>

        <div className="min-h-35">
          <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
            {vehicle.number && (
              <>
                <span>No.:</span>
                <p className="text-sm text-right">{vehicle.number}</p>
              </>
            )}

            {vehicle.matriculationYear && (
              <>
                <span>Matriculation year:</span>
                <p className="text-sm text-right">
                  {vehicle.matriculationYear}
                </p>
              </>
            )}

            {vehicle.gearbox && (
              <>
                <span>Gearbox:</span>
                <p className="text-sm text-right">{vehicle.gearbox}</p>
              </>
            )}

            {vehicle.mileage && (
              <>
                <span>Mileage:</span>
                <p className="text-sm text-right">{vehicle.mileage}</p>
              </>
            )}

            {vehicle.axlesCount && (
              <>
                <span>Number of axles:</span>
                <p className="text-sm text-right">{vehicle.axlesCount}</p>
              </>
            )}

            {vehicle.suspensionType && (
              <>
                <span>Suspension type:</span>
                <p className="text-sm text-right">{vehicle.suspensionType}</p>
              </>
            )}

            {vehicle.configuration && (
              <>
                <p className="text-sm">Configuration:</p>
                <p className="text-sm text-right">{vehicle.configuration}</p>
              </>
            )}
          </div>
        </div>

        <div className="my-5 border-t border-gray-300" />

        <div className="">
          <p className="text-gray-500 text-2xl font-medium">Price</p>
          <p className="text-2xl font-medium">
            {vehicle.currency} {vehicle.price}{" "}
            <span className="text-gray-500 text-xs font-normal">
              {vehicle.currencySuffix}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { TruckCard, TruckCardMobile, TruckCardMobileNew };
