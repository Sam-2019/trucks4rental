import { useForm } from "react-hook-form";
import { materialInfo } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";

const MaterialForm = ({ onClose, nextState }) => {
  const handleClose = () => {
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(materialInfo),
    defaultValues: {
      pickup: "",
      description: "",
      destination: "",
      materialType: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    nextState();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="materialType" className="text-light text-gray-600">
          Type of material
        </label>
        <input
          id="materialType"
          type="text"
          {...register("materialType")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />
        <p className="text-red-300 text-sm">{errors.materialType?.message}</p>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="description" className="text-light text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Brief description of items to be transported"
          type="text"
          {...register("description")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />
        <p className="text-red-300 text-sm">{errors.description?.message}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="pickup" className="text-light text-gray-600">
            Pickup Location
          </label>
          <input
            id="pickup"
            type="text"
            {...register("pickup")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.pickup?.message}</p>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="destination" className="text-light text-gray-600">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            {...register("destination")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.destination?.message}</p>
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <input
          type="submit"
          className="px-5 py-2 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default MaterialForm;
