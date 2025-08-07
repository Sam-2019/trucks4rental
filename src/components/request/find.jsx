import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import { Phone, MessageCircle, Mail } from "lucide-react";
import checkCircleSVG from "@/assets/svgs/check-circle.svg";

export default function Find({ onClose }) {
  return (
    <div className="space-y-8">
      <div className="space-4-8 p-9 rounded-lg text-center bg-gray-200">
        <div className="mb-4 flex justify-center">
          <img src={checkCircleSVG} alt="whatsapp" width="80" />
        </div>

        <p className="mb-4 font-semibold">
          Any immediate questions or need some help?
        </p>
        <p className="font-light">
          Our truck specialists start searching immediately and will contact you
          as soon as possible.
        </p>
      </div>

      <div className="border-1 border-gray-200 p-6 rounded-lg space-y-3">
        <p className="font-semibold">
          An immediate questions or need some help?
        </p>

        <div className="flex flex-row flex-wrap space-x-3 space-y-3">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full md:w-auto"
        >
          <NavLink to="#" className="flex flex-row items-center">
            <Phone size={23} />
            <p className="text-sm">Call us</p>
          </NavLink>
        </Button>

        <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
          <NavLink to="#" className="flex flex-row items-center">
            <MessageCircle size={23} />
            <p className="text-sm">Chat with us</p>
          </NavLink>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full md:w-auto"
        >
          <NavLink to="#" className="flex flex-row items-center">
            <Mail size={23} />
            <p className="text-sm">Email us</p>
          </NavLink>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full md:w-auto"
        >
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
          className="px-5 py-2 font-semibold bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
