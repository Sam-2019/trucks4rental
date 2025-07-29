import {
  brand,
  truckInfo,
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
      <div className="flex flex-col md:flex-col w-full gap-4 pb-2 md:pb-0">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="specification" className="">
                Specification
              </label>
              <Info size={15} />
            </div>

            <select
              {...register("specification")}
              id="specification"
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
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
              <label htmlFor="configuration" className="">
                Configuration
              </label>
              <Info size={15} />
            </div>
            <select
              {...register("configuration")}
              id="configuration"
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
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
              <label htmlFor="suspensionType" className="">
                Suspension type
              </label>
              <Info size={15} />
            </div>
            <select
              {...register("suspensionType")}
              id="suspensionType"
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
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
              <label htmlFor="brand" className="">
                Brand
              </label>
              <Info size={15} />
            </div>
            <select
              {...register("brand")}
              id="brand"
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
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
              <label htmlFor="price" className="">
                Price
              </label>
            </div>

            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
                {prices[0]}
              </p>

              <div className=" w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-red-200 bg-white rounded-lg"
                  // {...register("price", { required: true })}
                  // label={(value) => value}
                  value={prices}
                  onValueChange={setPrices}
                  min={0}
                  max={1000000}
                  step={500}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
                {prices[1]}
              </p>
            </div>
          </div>

          {/* <div>
              <p className="text-red-300 text-sm">{errors.minPrice?.message}</p>
              <p className="text-red-300 text-sm">{errors.maxPrice?.message}</p>
            </div> */}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="matriculationYear" className="">
                Matriculation year
              </label>
              <Info size={15} />
            </div>
            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
                {matriculationYears[0]}
              </p>
              <div className="w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-red-200 bg-white rounded-lg"
                  // {...register("price", { required: true })}
                  // label={(value) => value}
                  value={matriculationYears}
                  onValueChange={setMatriculationYears}
                  min={1970}
                  max={2019}
                  step={1}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
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
              <label htmlFor="mileage" className="">
                Mileage
              </label>
            </div>
            <div className="flex flex-row w-full items-center space-x-4">
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
                {mileages[0]}
              </p>
              <div className="w-full md:w-full">
                <DualRangeSlider
                  className="w-full border-1 border-red-200 bg-white rounded-lg"
                  // {...register("price", { required: true })}
                  // label={(value) => value}
                  value={mileages}
                  onValueChange={setMileages}
                  min={0}
                  max={2000000}
                  step={500}
                />
              </div>
              <p className="py-2 px-2 items-center p-1 transition-all border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none w-20 md:w-50 text-center">
                {mileages[1]}
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
              <label htmlFor="emissionStandard" className="">
                Emission standard
              </label>
              <Info size={15} />
            </div>
            <select
              {...register("emissionStandard")}
              id="emissionStandard"
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
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
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          type="button"
          onClick={() => editSelectedTruck()}
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Previous
        </button>

        <input
          type="submit"
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </form>
  );
};

export default SpecifyForm;
