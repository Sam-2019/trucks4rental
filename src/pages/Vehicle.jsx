import {
  ChevronLeft,
  ChevronRight,
  Gavel,
  MapPin,
  Calculator,
  Phone,
  MessageCircle,
  Mail,
  Check,
} from "lucide-react";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import Ratings from "@/components/ui/ratings";
import { Button } from "@/components/ui/button";
import { NavLink, useLoaderData } from "react-router";
import { CarouselTransition } from "../components/carousel/carouselTransition";
import InspectionReport from "../components/inspectionReport";
import SuggestedTrucks from "../components/suggestedTrucks";
import { useState } from "react";
import { comparable_trucks } from "../lib/utils";
import LeaseModal from "../components/leaseModal";

const comparable = "Comparable vehicles";

export default function Vehicle() {
  const { vehicle } = useLoaderData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-row place-content-center text-gray-700">
      <div className="flex-col w-full max-w-6xl rounded-lg">
        <div className="flex flex-row justify-between w-full max-w-6xl items-center py-6">
          <NavLink to="/stocks" className="flex flex-row items-center ">
            <ChevronLeft size={23} />
            <span>Back to the selection</span>
          </NavLink>

          <div className="flex flex-row items-center">
            <MapPin size={23} />
            <span>A15</span>
          </div>
        </div>

        <p className="text-2xl font-bold pb-6">{vehicle.name}</p>

        <div className="flex flex-row place-content-center space-x-5">
          <div className="w-1/2 text-gray-700 space-y-6">
            <CarouselTransition images={vehicle.images} />
            

            <div className="space-y-6 p-9 rounded-3xl bg-gray-200">
              <p className=" text-2xl font-semibold">
                We provide assurances you can rely on
              </p>

              <ul className="space-y-6">
                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>TÜV Nord-certified inspection as standard</span>
                </li>

                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>Craftsmanship since 1919</span>
                </li>

                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>Trustpilot rating of 4.5</span>
                </li>

                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>
                    Safe international logistics partner with AEO-status
                  </span>
                </li>

                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>We speak your language</span>
                </li>

                <li className="flex flex-row text-lg items-center">
                  <Check className="mr-2" color="green" />
                  <span>Worldwide delivery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-col w-1/2 space-y-5">
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
              onClick={() => onOpen()}
            >
              Lease
            </button>

            {/* <div className="p-7 rounded-3xl bg-gray-200 space-y-7">
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-semibold">Purchase price</p>
                <p className="text-2xl font-medium">
                  {vehicle.currency} {vehicle.price}{" "}
                  <span className="text-xs font-normal">
                    {vehicle.currencySuffix}
                  </span>
                </p>
              </div>

              <div className="my-5 border-t border-gray-300" />

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg">
                  <Gavel /> Make an offer
                </Button>

                <Button variant="outline" size="lg">
                  Buy this vehicle
                </Button>
              </div>

              <NavLink to="#" className="flex flex-row items-center">
                <Calculator size={23} className="mr-2" />
                <p className="text-sm"> Calculate shipping</p>
              </NavLink>
            </div> */}

            <div className="p-7 rounded-3xl bg-gray-200 space-y-3">
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-semibold">Vehicle specifications</p>
                <div className="text-2xl font-semibold">
                  No.{" "}
                  <span className="text-xs font-normal">{vehicle.number}</span>
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
            {/* 
            <div className="flex flex-row px-7">
              <NavLink to="#" className="flex flex-row items-center w-55">
                <p>View all specifications</p>
                <ChevronRight size={23} />
              </NavLink>

              <NavLink to="#" className="flex flex-row items-center">
                <p>View the inspection report</p>
                <ChevronRight size={23} />
              </NavLink>
            </div> */}

            <div className="border-1 border-gray-300 p-9 rounded-3xl space-y-3">
              <p className="text-2xl font-semibold">
                Contact us direct. We are open 6 days a week.
              </p>

              <div className="flex flex-row flex-wrap space-x-3 space-y-3">
                <Button asChild variant="outline" size="lg">
                  <NavLink to="#" className="flex flex-row items-center">
                    <Phone size={23} />
                    <p className="text-sm">Call us</p>
                  </NavLink>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <NavLink to="#" className="flex flex-row items-center">
                    <MessageCircle size={23} />
                    <p className="text-sm">Chat with us</p>
                  </NavLink>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <NavLink to="#" className="flex flex-row items-center">
                    <Mail size={23} />
                    <p className="text-sm">Email us</p>
                  </NavLink>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <NavLink to="#" className="flex flex-row items-center">
                    <img src={whatappSvg} alt="whatsapp" width="20" />
                    <p className="text-sm"> Send a Whatsapp message</p>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <LeaseModal open={isModalOpen} onClose={onClose} />

        <InspectionReport />

        <SuggestedTrucks header={comparable} trucks={comparable_trucks} />
      </div>
    </div>
  );
}
