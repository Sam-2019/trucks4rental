import { NavLink } from "react-router";
import { recommended_trucks } from "../lib/utils";
import { MainCarouselTransition } from "./carousel/carouselTransition";

export default function SuggestedTrucks({ header, trucks = recommended_trucks }) {
 return (
  <div className="items-center">
   <h2 className="text-2xl font-bold text-slate-500 py-5">{header}</h2>

   <div className="flex flex-col md:flex-row gap-5 ">
    {trucks.map((vehicle, index) => (
     <div key={vehicle.id} className="flex font-sans w-full">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full">
       {/* Image Section */}

       <MainCarouselTransition images={vehicle.images} url={vehicle.url} />

       {/* Truck Image */}

       {vehicle.new && (
        <div className="vehicle-card__ribbon bg-amber-600">
         <div className="text-white text-xs font-bold">New</div>
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

          {vehicle.matriculationYear && (
           <>
            <p className="text-sm">Matriculation year:</p>
            <p className="text-sm text-right">{vehicle.matriculationYear}</p>
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

          {vehicle.axlesCount && (
           <>
            <p className="text-sm">Number of axles:</p>
            <p className="text-sm text-right">{vehicle.axlesCount}</p>
           </>
          )}

          {vehicle.suspensionType && (
           <>
            <p className="text-sm">Suspension type:</p>
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

        <div>
         <p className="text-gray-500 text-2xl font-medium">Price</p>
         <p className="text-2xl font-medium">
          {vehicle.currency} {vehicle.price}{" "}
          <span className="text-gray-500 text-xs font-normal">{vehicle.currencySuffix}</span>
         </p>
        </div>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
