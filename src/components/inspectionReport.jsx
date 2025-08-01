import Ratings from "../components/ui/ratings";

export default function InspectionReport() {
  return (
    <div className="">
      <p className="text-3xl font-bold">Inspection report</p>

      <div className="space-y-4">
        <div className="my-5 border-t border-gray-300" />

         <div className="space-y-5">
          <p className="text-2xl font-bold">Chassis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-2">
            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Tacho</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Dashboard display codes</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Electrical</p>
              <Ratings value={3} variant="yellow" />
            </div>
          </div>
        </div>

        <div className="my-5 border-t border-gray-300" />

         <div className="space-y-5">
          <p className="text-2xl font-bold">Cabin</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-2">
            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Internal</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">External</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Steering column</p>
              <Ratings value={3} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Suspension</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Chassis</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Brakes</p>
              <Ratings value={4} variant="yellow" />
            </div>
          </div>
        </div>

        <div className="my-5 border-t border-gray-300" />

         <div className="space-y-5">
          <p className="text-2xl font-bold">Drivetrain</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-2">
            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Engine, general</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Cooling system</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Fuel system</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Exhaust system</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Greasing system</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Gearbox</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Clutch</p>
              <Ratings value={4} variant="yellow" />
            </div>

            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Drivetrain</p>
              <Ratings value={4} variant="yellow" />
            </div>
          </div>
        </div>

        <div className="my-5 border-t border-gray-300" />

         <div className="space-y-5">
          <p className="text-2xl font-bold">Tyres/Wheels</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-2">
            <div className="flex flex-row justify-between items-center w-full h-full">
              <p className="text-base md:text-sm">Tyres</p>
              <Ratings value={3} variant="yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
