import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Info } from "lucide-react";
import { requestSchema } from "../../../lib/utils";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";

const SpecifyForm = () => {
  const [values, setValues] = useState([0, 100]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(requestSchema),
    defaultValues: {
      specification: "",
      configuration: "",
      suspensionType: "",
      brand: "",
      matriculationYear: "",
      mileage: "",
      emissionStandard: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
        <div className="flex flex-col md:flex-col w-full gap-4 pb-2 md:pb-0">
          <div className="flex flex-col md:flex-row gap-2 w-full ">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="specification" className="">
                Specification
              </label>
              <Info size={15} />
            </div>
            <input
              id="specification"
              type="specification"
              {...register("specification", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.specification?.message}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="configuration" className="">
                Configuration
              </label>
              <Info size={15} />
            </div>
            <input
              id="configuration"
              type="configuration"
              {...register("configuration", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.configuration?.message}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="suspensionType" className="">
                Suspension type
              </label>
              <Info size={15} />
            </div>
            <input
              id="suspensionType"
              type="suspensionType"
              {...register("suspensionType", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.suspensionType?.message}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="brand" className="">
                Brand
              </label>
              <Info size={15} />
            </div>
            <input
              id="brand"
              type="brand"
              {...register("brand", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />

            <p className="text-red-300 text-sm">{errors.brand?.message}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row items-center">
              <label htmlFor="price" className="">
                Price
              </label>
            </div>
            <input
              id="price"
              type="price"
              {...register("price", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />

            <DualRangeSlider
              {...register("price", { required: true })}
              label={(value) => value}
              value={values}
              onValueChange={setValues}
              min={0}
              max={100}
              step={1}
            />

            <input
              id="price"
              type="price"
              {...register("price", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">{errors.price?.message}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="matriculationYear" className="">
                Matriculation year
              </label>
              <Info size={15} />
            </div>
            <input
              id="matriculationYear"
              type="matriculationYear"
              {...register("matriculationYear", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.matriculationYear?.message}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row items-center">
              <label htmlFor="mileage" className="">
                Mileage
              </label>
            </div>
            <input
              id="mileage"
              type="mileage"
              {...register("mileage", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">{errors.mileage?.message}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-auto md:w-80 flex flex-row space-x-2 items-center">
              <label htmlFor="emissionStandard" className="">
                Emission standard
              </label>
              <Info size={15} />
            </div>
            <input
              id="emissionStandard"
              type="emissionStandard"
              {...register("emissionStandard", { required: true })}
              className="
     py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all
     border-1 border-red-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.emissionStandard?.message}
            </p>
          </div>
        </div>

        <div className="my-5 flex flex-row justify-between">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}

          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SpecifyForm;
