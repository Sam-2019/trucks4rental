import { NavLink } from "react-router";
import Ratings from "@/components/ui/ratings";
import { Button } from "@/components/ui/button";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Specification = ({ vehicle }) => {
  return (
    <div className="p-7 rounded-3xl bg-gray-200 space-y-3">
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-semibold">Vehicle specifications</p>
        <div className="text-2xl font-semibold">
          No. <span className="text-xs font-normal">{vehicle.number}</span>
        </div>
      </div>

      {/* <p className="text-sm">Specifications</p> */}

      {vehicle.matriculationYear && (
        <div className="grid grid-cols-2 gap-4">
          <span className="text-sm">Matriculation year:</span>
          <p className="text-sm ">{vehicle.matriculationYear}</p>
        </div>
      )}

      {vehicle.mileage && (
        <div className="grid grid-cols-2 gap-4">
          <span className="text-sm">Mileage:</span>
          <p className="text-sm ">{vehicle.mileage}</p>
        </div>
      )}

      {vehicle.configuration && (
        <div className="grid grid-cols-2 gap-4">
          <span className="text-sm">Configuration:</span>
          <p className="text-sm ">{vehicle.configuration}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <p className="text-sm">Technical condition</p>
        <div className="flex flex-row">
          <Ratings value={3} variant="yellow" />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="border-1 border-gray-300 p-9 rounded-3xl space-y-3">
      <p className="text-2xl font-semibold">
        Contact us direct. We are open 6 days a week.
      </p>

      <div className="flex flex-row flex-wrap space-x-3 space-y-3">
        <Button asChild variant="outline" size="lg" className='w-full md:w-auto'>
          <NavLink to="#" className="flex flex-row items-center">
            <Phone size={23} />
            <p className="text-sm">Call us</p>
          </NavLink>
        </Button>

        <Button asChild variant="outline" size="lg" className='w-full md:w-60'>
          <NavLink to="#" className="flex flex-row items-center">
            <MessageCircle size={23} />
            <p className="text-sm">Chat with us</p>
          </NavLink>
        </Button>

        <Button asChild variant="outline" size="lg" className='w-full md:w-auto'>
          <NavLink to="#" className="flex flex-row items-center">
            <Mail size={23} />
            <p className="text-sm">Email us</p>
          </NavLink>
        </Button>

        <Button asChild variant="outline" size="lg" className='w-full md:w-auto'>
          <NavLink to="#" className="flex flex-row items-center">
            <img src={whatappSvg} alt="whatsapp" width="20" />
            <p className="text-sm"> Send a Whatsapp message</p>
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export { Contact as VehicleContact, Specification as VehicleSpecification };
