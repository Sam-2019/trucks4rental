import { useState } from "react";
import LeaseModal from "../components/lease";
import { comparable_trucks } from "../lib/utils";
import { NavLink, useLoaderData } from "react-router";
import { ChevronLeft, MapPin, Check } from "lucide-react";
import SuggestedTrucks from "../components/suggestedTrucks";
import InspectionReport from "../components/inspectionReport";
import { VehicleSpecification, VehicleContact } from "../components/vehicle";
import { CarouselTransition } from "../components/carousel/carouselTransition";

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
      <div className="max-w-6xl space-y-5">
        <div className="flex justify-between">
          <NavLink to="/inventory" className="flex flex-row items-center ">
            <ChevronLeft size={23} />
            <span>Back to the selection</span>
          </NavLink>

          <div className="flex flex-row items-center">
            <MapPin size={23} />
            <span>A15</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-bold">
          {vehicle.name}
        </p>
        <div className="flex flex-row md:space-x-5">
          <div className="w-full md:w-1/2 text-gray-700 space-y-5">
            <div className="mb-0">
              <CarouselTransition images={vehicle.images} />
            </div>

            <div className="md:hidden space-y-5">
              <VehicleSpecification vehicle={vehicle} />
              <button
                type="button"
                className="md:hidden w-full px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
                onClick={() => onOpen()}
              >
                Rent
              </button>
            </div>

            <div className="space-y-6 p-9 rounded-lg bg-gray-200">
              <p className="text-2xl font-semibold">
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

            <div className="md:hidden">
              <VehicleContact />
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 flex-col space-y-5">
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

            <button
              type="button"
              className="w-full px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
              onClick={() => onOpen()}
            >
              Rent
            </button>
            <VehicleSpecification vehicle={vehicle} />

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

            <VehicleContact />
          </div>
        </div>

        <InspectionReport />
        <LeaseModal open={isModalOpen} onClose={onClose} />
        <SuggestedTrucks
          header="Comparable vehicles"
          trucks={comparable_trucks}
        />
      </div>
    </div>
  );
}
