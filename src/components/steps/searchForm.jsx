import React from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail } from "lucide-react";
import { requestSchema } from "../../lib/utils";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { yupResolver } from "@hookform/resolvers/yup";

const SearchForm = ({ nextStep, prevStep }) => {
 const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(requestSchema),
  defaultValues: {
   firstName: "Lamar",
   lastName: "Odoom",
   email: "lamar@gmail.com",
   phoneNumber: "0241123456",
   companyName: "Trucking Ltd",
   contactPhone: "0241123456",
   contactWhatsapp: "0241123456",
   contactEmail: "lamar@gmail.com",
   contactType: [],
  },
 });
 const onSubmit = (data) => {
  console.log(data);
 };
 //  console.log({ phone: watch("contactPhone") });
 //  console.log({ email: watch("contactEmail") });
 //  console.log({ whatsapp: watch("contactWhatsapp") });

 function handleNextStep() {
  nextStep();
 }

 function handlePrevStep() {
  prevStep();
 }

 return (
  <div>
   <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
    <div className="flex flex-col md:flex-row w-full gap-4 pb-2 md:pb-0">
     <div className="flex flex-col gap-2 w-full">
      <label htmlFor="firstName">First Name</label>
      <input
       id="firstName"
       type="firstName"
       {...register("firstName", { required: true })}
       className="
     py-2 px-2 w-full flex items-center p-1 transition-all
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
      />
      <p className="text-red-300 text-sm">{errors.firstName?.message}</p>
     </div>

     <div className="flex flex-col gap-2 w-full">
      <label htmlFor="lastName">Last Name</label>
      <input
       id="lastName"
       type="lastName"
       {...register("lastName", { required: true })}
       className="
     py-2 px-2 w-full flex items-center p-1 transition-all
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
      />
      <p className="text-red-300 text-sm">{errors.lastName?.message}</p>
     </div>
    </div>

    <div className="flex flex-col gap-2 w-full">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      type="email"
      {...register("email", { required: true })}
      className="
     py-2 px-2 w-full flex items-center p-1 transition-all
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
     />
     <p className="text-red-300 text-sm">{errors.email?.message}</p>
    </div>

    <div className="flex flex-col gap-2 w-full">
     <label htmlFor="phoneNumber">Phone Number</label>
     <input
      id="phoneNumber"
      type="phoneNumber"
      {...register("phoneNumber", { required: true })}
      className="
     py-2 px-2 w-full flex items-center p-1 transition-all
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
     />
     <p className="text-red-300 text-sm">{errors.phoneNumber?.message}</p>
    </div>

    <div className="flex flex-col gap-2 w-full">
     <label htmlFor="companyName">Company Name</label>
     <input
      id="companyName"
      type="companyName"
      {...register("companyName", { required: true })}
      className="
     py-2 px-2 w-full flex items-center p-1 transition-all
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
     />
     <p className="text-red-300 text-sm">{errors.companyName?.message}</p>
    </div>

    <div className="flex flex-col gap-2 w-full">
     <label htmlFor="contact">How can we contact you?</label>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button
       type="button"
       className="
      flex w-full items-center p-1 transition-all py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
      >
       <label htmlFor="contactPhone" className="flex w-full cursor-pointer items-center px-3 py-2">
        <div className="inline-flex items-center">
         <label className="flex items-center cursor-pointer relative" htmlFor="contactPhone">
          <input
           {...register("contactPhone")}
           type="checkbox"
           className="peer h-5 w-5 cursor-pointer transition-all appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
           id="contactPhone"
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill=""
            stroke=""
            strokeWidth="1"
           >
            <title>Checkmark</title>
            <path
             fillRule="evenodd"
             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
             clipRule="evenodd"
            />
           </svg>
          </span>
         </label>
         <label
          className="cursor-pointer ml-2 text-slate-600 text-sm flex flex-row items-center gap-2"
          htmlFor="contactPhone"
         >
          <Phone size={20} />
          Phone
         </label>
        </div>
       </label>
      </button>

      <button
       type="button"
       className="
      flex w-full items-center p-1 transition-all py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
      >
       <label htmlFor="contactWhatsapp" className="flex w-full cursor-pointer items-center px-3 py-2">
        <div className="inline-flex items-center">
         <label className="flex items-center cursor-pointer relative" htmlFor="contactWhatsapp">
          <input
           {...register("contactWhatsapp")}
           type="checkbox"
           className="peer h-5 w-5 cursor-pointer transition-all appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
           id="contactWhatsapp"
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
           >
            <title>Checkmark</title>
            <path
             fillRule="evenodd"
             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
             clipRule="evenodd"
            />
           </svg>
          </span>
         </label>
         <label
          className="cursor-pointer ml-2 text-slate-600 text-sm flex flex-row items-center gap-2"
          htmlFor="contactWhatsapp"
         >
          <img src={whatappSvg} alt="whatsapp" width="19" />
          Whatsapp
         </label>
        </div>
       </label>
      </button>

      <button
       type="button"
       className="
      flex w-full items-center p-1 transition-all py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
      >
       <label htmlFor="contactEmail" className="flex w-full cursor-pointer items-center px-3 py-2">
        <div className="inline-flex items-center">
         <label className="flex items-center cursor-pointer relative" htmlFor="contactEmail">
          <input
           {...register("contactEmail")}
           type="checkbox"
           className="peer h-5 w-5 cursor-pointer transition-all appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
           id="contactEmail"
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
           >
            <title>Checkmark</title>
            <path
             fillRule="evenodd"
             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
             clipRule="evenodd"
            />
           </svg>
          </span>
         </label>
         <label
          className="cursor-pointer ml-2 text-slate-600 text-sm flex flex-row items-center gap-2"
          htmlFor="contactEmail"
         >
          <Mail size={20} />
          Email
         </label>
        </div>
       </label>
      </button>
     </div>
    </div>

    <div className="my-5 flex flex-row justify-between">
     {/* biome-ignore lint/a11y/useButtonType: <explanation> */}

     <input type="submit" />
    </div>
   </form>

   <div className="flex flex-row justify-between">
    <button
     type="button"
     onClick={() => handlePrevStep()}
     className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
     prevStep
    </button>
    <button
     type="button"
     onClick={() => handleNextStep()}
     className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
     nextStep
    </button>
   </div>
  </div>
 );
};

export default SearchForm;
