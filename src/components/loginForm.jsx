
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultPlaceholder, authSchema } from "../lib/utils";



export function LoginForm() {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(authSchema),
  defaultValues: {
   email: "",
   password: "",
  },
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
   <div className="flex flex-col items-center gap-2 text-center">
    <h1 className="text-2xl font-bold">Login</h1>
   </div>
   <div className="flex flex-col space-y-3">
    <div className="flex flex-col gap-2">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      type="email"
      placeholder={defaultPlaceholder}
      {...register("email")}
      className="py-2 px-2 w-full border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-lg"
     />
     <p className="text-red-300 text-sm">{errors.email?.message}</p>
    </div>

    <div className="flex flex-col gap-2">
     <div className="flex flex-row justify-between">
      <label htmlFor="password">Password</label>

      <NavLink to="/reset-password" className="px-2 w-full text-dark font-medium text-sm text-right underline">
       Forgotten password?
      </NavLink>
     </div>

     <input
      id="password"
      type="password"
      {...register("password")}
      className="py-2 px-2 w-full border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-lg"
     />
     <p className="text-red-300 text-sm">{errors.password?.message}</p>
    </div>

    <button
     type="submit"
     className="py-2 px-2 w-full bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
    >
     Login
    </button>
   </div>
   <div className="flex flex-col text-center text-xs">
    <p> Don't have an account?</p>
    <NavLink to="/signup" className="py-2 px-2 w-full text-dark font-medium text-sm">
     Signup
    </NavLink>
   </div>
  </form>
 );
}
