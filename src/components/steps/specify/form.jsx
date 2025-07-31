import {
  brand,
  truckInfo,
  numberFormat,
  specifications,
  configurations,
  suspensionType,
  emissionStandard,
} from "../../../lib/utils";
import { useState } from "react";
import { Info } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Tooltip } from "react-tooltip";

const SpecifyForm = ({ onClose, formData, editSelectedTruck }) => {
  const [prices, setPrices] = useState([0, 1000000]);
  const [mileages, setMileages] = useState([0, 2000000]);
  const [matriculationYears, setMatriculationYears] = useState([1970, 2019]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(truckInfo),
    defaultValues: {
      // brand: "",
      // specification: "",
      // configuration: "",
      // suspensionType: "",
      // emissionStandard: "",
      brand: "Volvo",
      specification: "Chassis Cabin",
      configuration: "6X4",
      suspensionType: "hydraulic-suspension",
      emissionStandard: "2",
    },
  });

  const onSubmit = (data) => {
    const result = {
      ...data,
      price: prices,
      mileage: mileages,
      matriculationYear: matriculationYears,
    };
    formData(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
      <div className="flex flex-col md:flex-col w-full gap-4 pb-2 md:px-6 md:py-8 bg-gray-200 rounded-lg">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="specification" className="text-sm font-medium">
                Specification
              </label>

              <Info
                className="focus:outline-none"
                size={12}
                color="orange"
                data-tooltip-id="my-tooltip-children-multiline"
              />
              <Tooltip
                id="my-tooltip-children-multiline"
                style={{ backgroundColor: "white", color: "#222" }}
                className="border-1 border-slate-200 rounded-md"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Sometimes you need a specific kind of vehicle.</span>
                  <span>
                    Here you can choose from a wide range of specifications
                  </span>
                </div>
              </Tooltip>
            </div>

            <select
              {...register("specification")}
              id="specification"
              className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
            >
              {specifications.map((option) => (
                <option
                  key={option.index}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-red-300 text-sm">
              {errors.specification?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="configuration" className="text-sm font-medium">
                Configuration
              </label>

              <Info
                className="focus:outline-none"
                size={12}
                color="orange"
                data-tooltip-id="configuration"
              />
              <Tooltip id="configuration">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    It is a formula that gives information about the wheels of
                  </span>
                  <span>
                    a road vehicle including number of wheels, number of
                  </span>
                  <span>driven wheels and number of steered wheels.</span>
                  <span>For example 6x2 or 4x4.</span>
                </div>
              </Tooltip>
            </div>
            <select
              {...register("configuration")}
              id="configuration"
              className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
            >
              {configurations.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-red-300 text-sm">
              {errors.configuration?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="suspensionType" className="text-sm font-medium">
                Suspension type
              </label>
              <Info
                className="focus:outline-none"
                size={12}
                color="orange"
                data-tooltip-id="suspensionType"
              />
              <Tooltip id="suspensionType">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>A collection of springs, wishbones, dampers and</span>
                  <span>links which attach a vehicle to its wheels.</span>
                </div>
              </Tooltip>
            </div>
            <select
              {...register("suspensionType")}
              id="suspensionType"
              className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
            >
              {suspensionType.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-red-300 text-sm">
              {errors.suspensionType?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="brand" className="text-sm font-medium">
                Brand
              </label>
              <Info
                className="focus:outline-none"
                size={12}
                color="orange"
                data-tooltip-id="brand"
              />
              <Tooltip id="brand">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    Here you select the brand of the vehicle you are looking
                  </span>
                  <span>for. For example DAF.</span>
                </div>
              </Tooltip>
            </div>
            <select
              {...register("brand")}
              id="brand"
              className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
            >
              {brand.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-red-300 text-sm">{errors.brand?.message}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
            </div>

            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {numberFormat.format(prices[0])}
              </p>

              <div className=" w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-slate-200 bg-white rounded-lg"
                  value={prices}
                  onValueChange={setPrices}
                  min={0}
                  max={1000000}
                  step={500}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {numberFormat.format(prices[1])}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label
                htmlFor="matriculationYear"
                className="text-sm font-medium"
              >
                Matriculation year
              </label>
              <Info
                className="focus:outline-none"
                size={12}
                color="orange"
                data-tooltip-id="matriculationYear"
              />
              <Tooltip id="matriculationYear">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    Please specify a matriculation year. If you have a range of
                  </span>
                  <span>
                    years in mind you inform us by filling it in at the remarks
                  </span>
                  <span>field.</span>
                </div>
              </Tooltip>
            </div>
            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {matriculationYears[0]}
              </p>
              <div className="w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-slate-200 bg-white rounded-lg"
                  value={matriculationYears}
                  onValueChange={setMatriculationYears}
                  min={1970}
                  max={2019}
                  step={1}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {matriculationYears[1]}
              </p>
            </div>
          </div>

          {/* <div> */}
          {/* <p className="text-red-300 text-sm"> */}
          {/* {errors.matriculationYear?.message} */}
          {/* </p> */}
          {/* </div> */}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="mileage" className="text-sm font-medium">
                Mileage
              </label>
            </div>
            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {numberFormat.format(mileages[0])}
              </p>
              <div className="w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-slate-200 bg-white rounded-lg"
                  value={mileages}
                  onValueChange={setMileages}
                  min={0}
                  max={2000000}
                  step={500}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all bg-white rounded-lg border-1 border-slate-300 w-20 md:w-50 text-center text-sm font-medium">
                {numberFormat.format(mileages[1])}
              </p>
            </div>
          </div>

          {/* <div> */}
          {/* <p className="text-red-300 text-sm">{errors.mileage?.message}</p> */}
          {/* </div> */}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="emissionStandard" className="text-sm font-medium">
                Emission standard
              </label>
            </div>
            <select
              {...register("emissionStandard")}
              id="emissionStandard"
              className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
            >
              {emissionStandard.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-red-300 text-sm">
              {errors.emissionStandard?.message}
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 flex flex-row justify-between">
        <button
          type="button"
          onClick={() => editSelectedTruck()}
          className="px-8 py-3 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg"
        >
          Previous
        </button>

        <input
          type="submit"
          className="px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default SpecifyForm;
