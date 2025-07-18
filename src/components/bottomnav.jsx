import whatappSvg from "@/assets/svgs/whatsapp.svg";
import xSvg from "@/assets/svgs/x.svg";
import instagramSvg from "@/assets/svgs/instagram.svg";
import facebookSvg from "@/assets/svgs/facebook.svg";
import { NavLink } from "react-router";
import Logo from "./logo";

export default function BottomNav() {
 const getYear = () => {
  return new Date().getFullYear();
 };
 return (
  <div className="py-7 bg-white">
   <div className="max-w-6xl mx-auto">
    <div className="my-5">
     <Logo width={300} center="none" />
    </div>

    <div className="max-w-6xl mx-auto flex flex-row justify-between">
     <div className="space-y-3">
      <p className="uppercase text-2xl font-normal">Company</p>
      <ul className="space-y-2">
       <li>About</li>
       <li>Careers</li>
      </ul>
     </div>

     <div className="space-y-3">
      <p className="uppercase text-2xl font-normal">Services</p>
      <ul className="space-y-2">
       <li>Request Quote</li>
       <li>Vehicle Inspection</li>
       <li>Managed Services</li>
      </ul>
     </div>

     <div className="space-y-3">
      <p className="uppercase text-2xl font-normal">Help</p>
      <ul className="space-y-2">
       <li>FAQ</li>
       <li>
        <NavLink to="/privacy-policy"> Privacy Policy</NavLink>
       </li>
       <li>
        <NavLink to="/terms-and-conditions"> Terms and Conditions </NavLink>
       </li>
      </ul>
     </div>

     <div className="space-y-3">
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
        <p>Call us</p>
        <p>(239) 555-0108</p>
       </div>

       <div className="flex flex-col space-y-2">
        <p>Email us</p>
        <p>info@rareblocks.xyz</p>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-12 mb-7 border-t" />

    <div className="flex flex-row justify-between my-4">
     <p>© Copyright {getYear()}, All Rights Reserved</p>
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
