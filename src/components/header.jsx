import Logo from "./logo";
import { NavLink } from "react-router";
import { mobileItems } from "../lib/utils";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, ChevronDown, Lock, Phone } from "lucide-react";

import whatappSvg from "@/assets/svgs/whatsapp.svg";

import { useNavigate } from "react-router";

export default function Header() {
 const [open, setOpen] = useState(false);
 const navigate = useNavigate();

 return (
  <header>
   {/* Mini-header */}
   <div className="w-full bg-white shadow px-6 py-4 flex flex-row justify-between">
    <div className="flex flex-row space-x-4">
     <NavLink to="tel:1234" className="flex flex-row items-center space-x-2">
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

   <div className="w-full bg-white shadow px-6 py-2">
    {/* Non-mobile */}
    <div className="hidden lg:block">
     <div className="mx-auto flex items-center justify-between ">
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
      <div className="w-full flex flex-row justify-between items-center">
       <Logo width={55} />

       <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
         <MenuIcon />
        </Button>
       </SheetTrigger>
      </div>

      <SheetContent side="left" className="bg-white">
       <SheetHeader>
        <SheetTitle> </SheetTitle>
        <SheetDescription>
         <div className="flex flex-col items-start">
          {mobileItems.map((item) => (
           <Button
            key={item.index}
            variant="link"
            onClick={() => {
             setOpen(false);
             navigate(item.route);
            }}
           >
            {item.name}
           </Button>
          ))}
         </div>
        </SheetDescription>
       </SheetHeader>
      </SheetContent>
     </Sheet>
    </div>
   </div>
  </header>
 );
}
