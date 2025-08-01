import about_users from "@/assets/svgs/about-users.svg";
import about_truck from "@/assets/svgs/about-truck.svg";
import usp_thumbsup from "@/assets/svgs/usp-thumbsup.svg";
import about_chatBallon from "@/assets/svgs/about-chatballoon.svg";
import about_keurrapport from "@/assets/svgs/about-keurrapport.svg";
import { ReactSVG } from "react-svg";

const header = "Why Us?";
const trustpilot = "Trustpilot 4.5";
const contact = "We speak your language";
const inspection = "TÜV Nord-certified inspection";
const stock = "Our stock fills 22 football pitches";
const reliable = "A reliable family company since 1919";

export default function WhyUs() {
 return (
  <div className="md:flex md:flex-col hidden mt-5">
   <div className="flex justify-center items-center">
    <div className="absolute bg-transaparent mx-auto space-y-12">
     <div>
      <h2 className=" text-3xl sm:text-4xl font-semibold leading-tight">{header}</h2>
     </div>

     <div className="flex flex-col md:flex-row space-x-10">
      <div className="flex flex-col w-70 items-center">
       <img src={usp_thumbsup} alt="About Us" width="103" className="" color="bg-red-500" />

       <p className="text-center my-3">{trustpilot}</p>
      </div>

      <div className="flex flex-col w-70 items-center">
       <img src={about_truck} alt="About Us" width="190" />

       <p className="text-center my-3">{stock}</p>
      </div>

      <div className="flex flex-col w-70 items-center">
       <img src={about_keurrapport} alt="About Us" width="72" className="text-red-500"  />
 

       <p className="text-center my-3">{inspection}</p>
      </div>

      <div className="flex flex-col w-70  items-center">
       <img src={about_users} alt="About Us" width="130" />

       <p className="text-center my-3">{reliable}</p>
      </div>

      <div className="flex flex-col w-70 align-middle items-center">
       <img src={about_chatBallon} alt="About Us" width="105" />

       <p className="text-center my-3">{contact}</p>
      </div>
     </div>
    </div>

    <div className="flex flex-row w-full h-100">
     <div className="w-1/2 bg-gray-200 rounded-l-xl" />
     <div
      className="
    border-t-[200px] border-t-gray-300
    border-l-[250px] border-l-gray-200
    border-b-[200px] border-b-gray-300
    "
     />
     <div className="w-1/2 bg-gray-200 rounded-r-xl" />
    </div>
   </div>
  </div>
 );
}
