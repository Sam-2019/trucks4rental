
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultPlaceholder, resetSchema } from "../lib/utils";

export function ResetPasswordForm() {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(resetSchema),
  defaultValues: {
   email: "",
  },
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
   <div className="flex flex-col items-center gap-2 text-center">
    <h1 className="text-2xl font-bold">Reset Password</h1>
    <p className="text-muted-foreground text-sm text-balance">Enter your email below to reset your account</p>
   </div>

   <div className="flex flex-col space-y-3">
    <div className="flex flex-col gap-2">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      type="email"
      placeholder={defaultPlaceholder}
      {...register("email")}
      className="py-2 px-2 w-full border-2 border-slate-200 hover:border-slate-500 focus:border-slate-300 focus:outline-none"
     />
     <p className="text-red-300 text-sm">{errors.email?.message}</p>
    </div>

    <button
     type="submit"
     className="py-2 px-2 w-full border-2 border-slate-500 hover:bg-primary/50 transition-all duration-300 hover:shadow-lg bg-slate-500 text-white"
    >
     Reset
    </button>
   </div>

   <div className="text-center text-xs">
    <NavLink to="/" className="py-2 px-2 w-full text-dark font-medium text-sm">
     Cancel
    </NavLink>
   </div>
  </form>
 );
}
