import { useForm } from "react-hook-form";
import { requestorInfo } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";

const RequestorForm = ({ onClose, nextState }) => {
  const handleClose = () => {
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(requestorInfo),
    defaultValues: {
      name: "Kwame Opam",
      contact: "0244444444",
      email: "opam@gmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    nextState()
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

      <div className="flex flex-row justify-end">
        <input
          type="submit"
          className="px-5 py-2 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default RequestorForm;
