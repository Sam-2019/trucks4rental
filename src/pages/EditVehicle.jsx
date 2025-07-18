import React from "react";
import { ChevronsDown, ChevronsUp, MapPin, Trash2, X } from "lucide-react";
export default function EditVehicle() {
 return (
  <div>
   <div className='flex flex-row justify-between w-full max-w-6xl items-center py-6'>
    <div>
     <MapPin size={23} />
     <p>Back to the selection</p>
    </div>

    <div>
     <MapPin size={23} />
     <p>A15</p>
    </div>
   </div>
  </div>
 );
}
