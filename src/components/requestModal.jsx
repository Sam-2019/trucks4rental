import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 DialogFooter,
 DialogClose,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import Stepper from "./steps/stepper";
import Find from "./steps/find";

const RequestModal = ({ open, onClose }) => {
 return (
  <Dialog open={open} onOpenChange={onClose} className="bg-white border-2 border-green-500">
   <DialogContent className="bg-white !max-w-200">
    <DialogTitle />
    <DialogDescription />
    <Stepper onClose={onClose} />
    {/* <div className="bg-white rounded-lg shadow-xl w-full mx-auto flex flex-col md:flex-row border-2 border-green-500">
     <div className=" md:flex flex-col bg-gray-50 space-y-6">
      <div className="flex items-center space-x-3">
       <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
        1
       </div>
       <span className="text-blue-700 font-semibold text-lg">You specify</span>
      </div>

      <div className="flex items-center space-x-3">
       <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 font-bold text-sm">
        2
       </div>
       <span className="text-gray-500 text-lg">We search</span>
      </div>

      <div className="flex items-center space-x-3">
       <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 font-bold text-sm">
        3
       </div>
       <span className="text-gray-500 text-lg">We find</span>
      </div>
     </div>

     <div className="flex-grow p-6 sm:p-8 relative">
      <div className="flex justify-between items-start mb-6">
       <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">We find your vehicle</h2>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">
       Good choice! Let us help you find the right vehicle. In 90% of the searches we find the perfect match. Tell us
       what you are looking for.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Tractor unit" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Tractor unit</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Truck" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Truck</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Semi-trailer" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Semi-trailer</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Mixer" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Mixer</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Trailer" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Trailer</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Tipper" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Tipper</span>
       </div>

       <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
        <img src="https://placehold.co/100x60/F0F0F0/333333?text=Truck" alt="Loading box" className="w-24 h-auto mb-2" />
        <span className="text-gray-700 font-medium text-sm sm:text-base text-center">Loading box</span>
       </div>
      </div>

      <div className="text-center mt-6">
       <button
        type="button"
        className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
       >
        Cancel
       </button>
      </div>
     </div>
    </div> */}
   </DialogContent>
  </Dialog>
 );
};

export default RequestModal;
