import { useForm } from "react-hook-form";
import { Phone, Mail } from "lucide-react";
import { requestSchema } from "../../../lib/utils";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { yupResolver } from "@hookform/resolvers/yup";

const Search = ({ nextStep, prevStep }) => {
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
      contactPhone: false,
      contactWhatsapp: false,
      contactEmail: false,
    },
  });
  const onSubmit = (data) => {
    console.log({ data });
    nextStep();
  };

  function handleNextStep() {
    nextStep();
  }

  function handlePrevStep() {
    prevStep();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
        <div className="flex flex-col md:flex-col w-full gap-4 pb-2 md:px-6 md:py-8 bg-gray-200 rounded-lg">
          <div className="flex flex-col md:flex-row w-full gap-4 pb-2 md:pb-0">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                type="firstName"
                {...register("firstName", { required: true })}
                className="
     py-2 px-2 w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
              />
              <p className="text-red-300 text-sm">
                {errors.firstName?.message}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                type="lastName"
                {...register("lastName", { required: true })}
                className="
     py-2 px-2 w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
              />
              <p className="text-red-300 text-sm">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4 pb-2 md:pb-0">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="
     py-2 px-2 w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
              />
              <p className="text-red-300 text-sm">{errors.email?.message}</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="phoneNumber"
                {...register("phoneNumber", { required: true })}
                className="
     py-2 px-2 w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
              />
              <p className="text-red-300 text-sm">
                {errors.phoneNumber?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="companyName" className="text-sm font-medium">
              Company Name
            </label>
            <input
              id="companyName"
              type="companyName"
              {...register("companyName", { required: true })}
              className="
     py-2 px-2 w-full flex items-center p-1 transition-all bg-white rounded-lg text-sm font-medium
     border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none
     "
            />
            <p className="text-red-300 text-sm">
              {errors.companyName?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="contact" className="text-sm font-medium">
              How can we contact you?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                className="
      flex w-full items-center p-1 transition-all bg-white rounded-lg text-sm font-medium py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
              >
                <label
                  htmlFor="contactPhone"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative text-sm font-medium"
                      htmlFor="contactPhone"
                    >
                      <input
                        {...register("contactPhone")}
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all bg-white rounded-lg text-sm font-medium appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
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
      flex w-full items-center p-1 transition-all bg-white rounded-lg text-sm font-medium py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
              >
                <label
                  htmlFor="contactWhatsapp"
                  className="flex w-full cursor-pointer items-center px-3 py-2 text-sm font-medium"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="contactWhatsapp"
                    >
                      <input
                        {...register("contactWhatsapp")}
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all bg-white rounded-lg text-sm font-medium appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
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
                      className="cursor-pointer ml-2 text-slate-600 flex flex-row items-center gap-2 text-sm font-medium"
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
      flex w-full items-center p-1 transition-all bg-white rounded-lg text-sm font-medium py-2  
      hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 
      border-1 border-slate-200 hover:border-slate-300 focus:border-slate-200 focus:outline-none
      "
              >
                <label
                  htmlFor="contactEmail"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative text-sm font-medium"
                      htmlFor="contactEmail"
                    >
                      <input
                        {...register("contactEmail")}
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all bg-white rounded-lg text-sm font-medium appearance-none border border-gray-300 checked:bg-gray-500 checked:border-gray-500"
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
                      className="cursor-pointer ml-2 text-slate-600 flex flex-row items-center gap-2 text-sm font-medium"
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
        </div>

        <div className="my-5 flex flex-row justify-between">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            type="button"
            onClick={() => handlePrevStep()}
            className="px-8 py-3 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg"
          >
            Previous
          </button>
          <input
            type="submit"
            className="px-8 py-3 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
