import { useForm } from "react-hook-form";
import { localRequest } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";

const LocalForm = ({ onClose, nextState, previousState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(localRequest),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      pickup: "",
      destination: "",
      truckId: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    nextState();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name" className="text-light text-gray-600">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />
        <p className="text-red-300 text-sm">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="contact" className="text-light text-gray-600">
            Mobile
          </label>
          <input
            id="contact"
            type="text"
            {...register("contact")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.contact?.message}</p>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-light text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="text"
            {...register("email")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.email?.message}</p>
        </div>
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

      <div className="hidden">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="truckId" className="text-light text-gray-600">
            Truck ID
          </label>
          <input
            id="truckId"
            type="text"
            {...register("truckId")}
            className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
          />
          <p className="text-red-300 text-sm">{errors.truckId?.message}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <button
          type="button"
          onClick={() => previousState()}
          className="px-5 py-2 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg"
        >
          Back
        </button>

        <input
          type="submit"
          className="px-5 py-2 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default LocalForm;
