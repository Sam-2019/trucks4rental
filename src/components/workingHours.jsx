const header = "Working hours?";
import { officeGMAP } from "../lib/utils";

export default function WokingHours() {
 return (
  <div className="mx-auto flex flex-col md:flex-row">
   <div className="w-full flex flex-col justify-center text-center bg-gray-200 space-y-6 py-10 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
    <h2 className="text-4xl font-bold ">{header}</h2>

    <div className="flex flex-row justify-center">
     <div className="flex flex-row justify-between w-90">
      <p className="text-lg">Monday - Thursday</p>
      <p className="text-lg">9am - 6pm</p>
     </div>
    </div>

    <div className="flex flex-row justify-center">
     <div className="flex flex-row justify-between w-90">
      <p className="text-lg">Friday</p>
      <p className="text-lg">9am - 6pm</p>
     </div>
    </div>

    <div className="flex flex-row justify-center">
     <div className="flex flex-row justify-between w-90">
      <p className="text-lg">Saturday</p>
      <p className="text-lg">9am - 6pm</p>
     </div>
    </div>
   </div>

   <div className="w-full">
    <iframe
     title="PHILBMENS Maritime Consultancy Service Location Map"
     src={officeGMAP}
     width="100%"
     height="450"
     allowFullScreen={false}
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
     className="rounded-b-lg md:rounded-bl-none md:rounded-br-lg md:rounded-r-lg"
    />
   </div>
  </div>
 );
}
