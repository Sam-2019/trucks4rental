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
  <div className="flex flex-row justify-between items-center gap-5">
   {/* <TruckImages /> */}

   <SubCarouselTransition images={vehicle.images} url={vehicle.url} />

   <div className="vehicle-info w-full bg-white p-8 rounded-lg">
    <div className="flex flex-row justify-between items-center">
     <NavLink to={vehicle.url} className="text-2xl font-semibold">
      {vehicle.name}
     </NavLink>
     <Star size={25} fill={fill ? "#021f6e" : "white"} color="#021f6e" strokeWidth={1} onClick={toggleFill} />
    </div>

    <div className="grid grid-cols-4 gap-3 mt-5">
     <p className="text-sm">Technical condition</p>
     <p className="text-sm">02</p>
     <p className="text-sm">No.</p>
     <p className="text-sm">04</p>
     <p className="text-sm">Kind</p>
     <p className="text-sm">06</p>
     <p className="text-sm">Specification</p>
     <p className="text-sm">08</p>
     <p className="text-sm">Matriculation year</p>
     <p className="text-sm">10</p>
     <p className="text-sm">Number of axles</p>
     <p className="text-sm">12</p>
     <p className="text-sm">Suspension type</p>
     <p className="text-sm">14</p>
     <p className="text-sm">Gearbox</p>
     <p className="text-sm">16</p>
     <p className="text-sm">Engine capacity</p>
     <p className="text-sm">18</p>
    </div>

    <div className="my-5 border-t border-gray-300" />

    <div className="flex flex-row items-center ">
     <div className="w-1/3 text-gray-500 text-2xl font-medium">Price</div>
     <div className="text-2xl font-medium">
      {vehicle.currency} {vehicle.price}{" "}
      <span className="text-gray-500 text-xs font-normal">{vehicle.currencySuffix}</span>
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
      {vehicle.currency} {vehicle.price} <span className="text-xs">{vehicle.currencySuffix}</span>
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
        <div className="vehicle-card__ribbon bg-blue-800">
         <div className=" text-white text-xs font-bold">New</div>
        </div>
       )}

       {/* Details Section */}
       <div className="p-4 flex flex-col justify-between ">
        <NavLink to={vehicle.url} className="text-xl font-bold text-gray-800 mb-4 min-h-">
         {vehicle.name}
        </NavLink>

        <div className="min-h-35">
         <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
          {vehicle.number && (
           <>
            <p className="text-sm">No.:</p>
            <p className="text-sm text-right">{vehicle.number}</p>
           </>
          )}

          {vehicle.matriculation_year && (
           <>
            <p className="text-sm">Matriculation year:</p>
            <p className="text-sm text-right">{vehicle.matriculation_year}</p>
           </>
          )}

          {vehicle.gearbox && (
           <>
            <p className="text-sm">Gearbox:</p>
            <p className="text-sm text-right">{vehicle.gearbox}</p>
           </>
          )}

          {vehicle.mileage && (
           <>
            <p className="text-sm">Mileage:</p>
            <p className="text-sm text-right">{vehicle.mileage}</p>
           </>
          )}

          {vehicle.number_of_axles && (
           <>
            <p className="text-sm">Number of axles:</p>
            <p className="text-sm text-right">{vehicle.number_of_axles}</p>
           </>
          )}

          {vehicle.suspension_type && (
           <>
            <p className="text-sm">Suspension type:</p>
            <p className="text-sm text-right">{vehicle.suspension_type}</p>
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
          <span className="text-gray-500 text-xs font-normal">{vehicle.currencySuffix}</span>
         </p>
        </div>
       </div>
      </div>
 );
}

export { TruckCard, TruckCardMobile, TruckCardMobileNew };