import Logo from "./logo";
import { NavLink } from "react-router";
import { getYear, mobileItems } from "../lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, ChevronDown, Lock, Phone } from "lucide-react";

import xSvg from "@/assets/svgs/x.svg";
import whatappSvg from "@/assets/svgs/whatsapp.svg";
import facebookSvg from "@/assets/svgs/facebook.svg";
import instagramSvg from "@/assets/svgs/instagram.svg";
import { useNavigate } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      {/* Mini-header */}
      <div className="hidden md:block">
        <div className=" w-full bg-white shadow px-6 py-4 flex flex-row justify-between">
          <div className="flex flex-row space-x-4">
            <NavLink
              to="tel:1234"
              className="flex flex-row items-center space-x-2"
            >
              <Phone size={20} fill="black" strokeWidth={1} />
              <p className="text-sm">Call</p>
            </NavLink>

            <NavLink to="#" className="flex flex-row items-center space-x-2">
              <img src={whatappSvg} alt="whatsapp" width="20" />
              <p className="text-sm"> By Whatsapp</p>
            </NavLink>
          </div>

          <NavLink to="/login" className="flex flex-row items-center space-x-2">
            <Lock size={20} strokeWidth={2.7} />
            <p className="text-sm">Login</p>
            <ChevronDown size={20} strokeWidth={2.7} />
          </NavLink>
        </div>
      </div>

      <div className="w-full bg-white shadow px-6 ">
        {/* Non-mobile */}
        <div className="hidden lg:block">
          <div className="mx-auto flex items-center justify-between">
            <Logo width={80} />

            <div className="w-98">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search for a truck"
                className="w-full max-w-md mx-auto py-2 px-2 border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-lg"
              />
            </div>

            <div className="flex items-center space-x-6">
              {mobileItems.map((item) => (
                <NavLink key={item.index} to={item.route}>
                  <p className="text-sm">{item.name}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="w-full flex flex-row justify-between items-center py-1">
              <Logo width={55} />

              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-500">
                  <MenuIcon color="gray" />
                </Button>
              </SheetTrigger>
            </div>

            <SheetContent
              side="left"
              className="bg-white rounded-r-lg flex flex-col border-0"
            >
              <SheetHeader></SheetHeader>
              <SheetDescription></SheetDescription>
              <div className="flex flex-col items-start space-y-2 px-2">
                {mobileItems.map((item) => (
                  <button
                    type="Button"
                    className="p-2 text-2xl w-full rounded-lg"
                    key={item.index}
                    // variant="link"
                    onClick={() => {
                      setOpen(false);
                      navigate(item.route);
                    }}
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  className="text-white bg-amber-600 p-2 text-2xl w-full rounded-lg"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>

              <SheetFooter>
                <div className="flex flex-col-reverse justify-between items-center gap-5 text-gray-600">
                  <p className="text-sm">
                    © Copyright {getYear()}, All Rights Reserved
                  </p>
                  <div className="flex flex-row space-x-9">
                    <img src={whatappSvg} alt="whatsapp" width="23" />
                    <img src={facebookSvg} alt="whatsapp" width="27" />
                    <img src={instagramSvg} alt="whatsapp" width="27" />
                    <img src={xSvg} alt="whatsapp" width="20" />
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
