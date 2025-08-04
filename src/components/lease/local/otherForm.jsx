import { useForm } from "react-hook-form";
import { otherLocalRequest } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";

const OtherLocalForm = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otherLocalRequest),
    defaultValues: {
      materialType: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="materialType" className="text-sm font-medium">
          Type of material
        </label>
        <input
          id="materialType"
          type="text"
          {...register("materialType")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />
        <p className="text-red-300 text-sm">{errors.materialType?.message}</p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          rows={6}
          placeholder="Brief description of items to be transported"
          type="text"
          {...register("description")}
          className="py-2 px-2 w-auto md:w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none"
        />
        <p className="text-red-300 text-sm">{errors.description?.message}</p>
      </div>

      <div className="flex flex-row justify-end">
        <input
          type="submit"
          className="px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        />
      </div>
    </form>
  );
};

export default OtherLocalForm;
