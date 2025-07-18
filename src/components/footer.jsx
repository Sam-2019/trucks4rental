import Logo from "./logo";
import { NavLink } from "react-router";
import xSvg from "@/assets/svgs/x.svg";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import facebookSvg from "@/assets/svgs/facebook.svg";
import instagramSvg from "@/assets/svgs/instagram.svg";

export default function BottomNav() {
 const getYear = () => {
  return new Date().getFullYear();
 };
 return (
  <div className="py-7 bg-gray-200">
   <div className="max-w-7xl mx-auto">
    <div className="my-5">
     <Logo width={400} center="none" />
    </div>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
     <div className="space-y-3 p-5 md:py-0">
      <p className="uppercase text-2xl font-normal">Company</p>
      <ul className="space-y-2">
       <li className="text-sm">About</li>
       <li className="text-sm">Careers</li>
      </ul>
     </div>

     <div className="space-y-3 p-5 md:py-0">
      <p className="uppercase text-2xl font-normal">Services</p>
      <ul className="space-y-2">
       <li className="text-sm">Request Quote</li>
       <li className="text-sm">Vehicle Inspection</li>
       <li className="text-sm">Managed Services</li>
      </ul>
     </div>

     <div className="space-y-3 p-5 md:py-0">
      <p className="uppercase text-2xl font-normal">Help</p>
      <ul className="space-y-2">
       <li className="text-sm">FAQ</li>
       <li className="text-sm">
        <NavLink to="/privacy-policy"> Privacy Policy</NavLink>
       </li>
       <li className="text-sm">
        <NavLink to="/terms-and-conditions"> Terms and Conditions </NavLink>
       </li>
      </ul>
     </div>

     <div className="space-y-3 p-5 md:py-0">
      <p className="uppercase text-2xl font-normal">Subscribe to newsletter</p>
      <div className="">
       <input
        type="email"
        aria-label="subscribe"
        placeholder="Enter your email address"
        className="w-61 py-2 px-2 max-w-md border-2 border-white focus:border-slate-500 focus:outline-none bg-white"
       />
       <button
        type="button"
        className="w-15 py-2 px-2 border-2 border-slate-500 hover:bg-primary/50 transition-all duration-300 hover:shadow-lg bg-slate-500 text-white"
       >
        Join
       </button>
      </div>

      <div className="flex flex-row space-x-10">
       <div className="flex flex-col space-y-2">
        <p className="text-sm">Call us</p>
        <p className="text-sm">(239) 555-0108</p>
       </div>

       <div className="flex flex-col space-y-2">
        <p className="text-sm">Email us</p>
        <p className="text-sm">info@rareblocks.xyz</p>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-12 mb-7 border-t" />

    <div className="flex flex-col-reverse md:flex-row justify-between items-center p-5 gap-5">
     <p className="text-sm">© Copyright {getYear()}, All Rights Reserved</p>
     <div className="flex flex-row space-x-9">
      <img src={whatappSvg} alt="whatsapp" width="23" />
      <img src={facebookSvg} alt="whatsapp" width="27" />
      <img src={instagramSvg} alt="whatsapp" width="27" />
      <img src={xSvg} alt="whatsapp" width="20" />
     </div>
    </div>
   </div>
  </div>
 );
}
