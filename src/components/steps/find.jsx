import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { Phone, MessageCircle } from "lucide-react";
import checkCircleSVG from "@/assets/svgs/check-circle.svg";

export default function Find({ onClose }) {
  return (
    <div className="flex-grow  sm:px-8 relative">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          We find your vehicle
        </h2>
      </div>

      <p className="text-gray-600 mb-5 leading-relaxed">
        Good choice! Let us help you find the right vehicle. In 90% of the
        searches we find the perfect match. Tell us what you are looking for.
      </p>

      <div className="space-y-8">
        <div className="space-4-8 p-9 rounded-lg text-center  border-gray-200 bg-gray-200">
          <div className="mb-4 flex justify-center">
            <img src={checkCircleSVG} alt="whatsapp" width="80" />
          </div>

          <p className="mb-4 font-semibold">
            Any immediate questions or need some help?
          </p>
          <p className="font-light">
            Our truck specialists start searching immediately and will contact
            you as soon as possible.
          </p>
        </div>

        <div className="border-1 border-gray-300 p-6 rounded-lg space-y-3">
          <p className="font-semibold">
            An immediate guestions or need some help?
          </p>

          <div className="flex flex-row flex-wrap space-x-3 space-y-3">
            <Button asChild variant="outline" size="lg">
              <NavLink to="#" className="flex flex-row items-center">
                <Phone size={23} />
                <p className="text-sm">Call us</p>
              </NavLink>
            </Button>

            <Button asChild variant="outline" size="lg">
              <NavLink to="#" className="flex flex-row items-center">
                <MessageCircle size={23} />
                <p className="text-sm">Chat with us</p>
              </NavLink>
            </Button>

            <Button asChild variant="outline" size="lg">
              <NavLink to="#" className="flex flex-row items-center">
                <img src={whatappSvg} alt="whatsapp" width="20" />
                <p className="text-sm"> Send a Whatsapp message</p>
              </NavLink>
            </Button>
          </div>
        </div>

        <div className="flex flex-row justify-end mb-5">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Close this screen
          </button>
        </div>
      </div>
    </div>
  );
}
