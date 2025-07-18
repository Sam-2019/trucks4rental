import { NavLink } from "react-router";

export default function SearchMore({ onOpen }) {
 return (
  <div className="mx-auto flex flex-col items-center space-y-15">
   <div className=" mb-10 text-center">
    <h2 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
     Still not found what you were looking for? Let us help you.
    </h2>
    {/* <p className="text-2xl font-semibold text-gray-900"> Let us help you.</p> */}
   </div>
   <button
    type="button"
    onClick={() => onOpen()}
    className="w-auto py-2 px-5 border-2 border-slate-500 hover:bg-primary/50 transition-all duration-300 hover:shadow-lg bg-slate-500 text-white text-3xl"
   >
    Find a vehicle
   </button>
  </div>
 );
}
