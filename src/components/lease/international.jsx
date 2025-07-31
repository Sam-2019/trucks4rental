import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { foreignRequest, materialTypes } from "../../lib/utils";

const InternationalForm = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(foreignRequest),
    defaultValues: {
      materialType: "",
      pickup: "",
      pickupLandmark: "",
      destination: "",
      destinationLandmark: "",
      truckType: "",
      truckId: "",
      name: "",
      contact: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />{" "}
        <p className="text-red-300 text-sm">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="contact">Mobile</label>
          <input
            id="contact"
            type="text"
            {...register("contact")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-400">{errors.contact?.message}</p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...register("email")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-400">{errors.email?.message}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="materialType" className="text-sm font-medium">
          Type of material
        </label>
        <select
          {...register("materialType")}
          id="materialType"
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        >
          {materialTypes.map((option) => (
            <option
              key={option.index}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <p className="text-red-300 text-sm">{errors.materialType?.message}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="pickup" className="text-sm font-medium">
            Pickup Location
          </label>
          <input
            id="pickup"
            type="text"
            {...register("pickup")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.pickup?.message}</p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="pickupLandmark" className="text-sm font-medium">
            Pickup Location Landmark
          </label>
          <input
            id="pickupLandmark"
            type="text"
            {...register("pickupLandmark")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">
            {errors.pickupLandmark?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="destination" className="text-sm font-medium">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            {...register("destinatiodestinationnLandmark")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.destination?.message}</p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="destinationLandmark" className="text-sm font-medium">
            Destination Landmark
          </label>
          <input
            id="destinationLandmark"
            type="text"
            {...register("destinationLandmark")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">
            {errors.destinationLandmark?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="truckType" className="text-sm font-medium">
          Truck Type
        </label>
        <select
          {...register("truckType")}
          id="truckType"
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        >
          {materialTypes.map((option) => (
            <option
              key={option.index}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <p className="text-red-300 text-sm">{errors.truckType?.message}</p>
      </div>

      <div className="hidden">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="truckId" className="text-sm font-medium">
            Truck ID
          </label>
          <input
            id="truckId"
            type="text"
            {...register("truckId")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.truckId?.message}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <button
          type="button"
          onClick={() => handleClose()}
          className="px-8 py-3 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg"
        >
          Cancel
        </button>

        <input
          type="submit"
          className="px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default InternationalForm;
