import Logo from "../components/logo";
import SwiperCarousel from "../components/carousel/swiper";
import { ResetPasswordForm } from "@/components/resetPasswordForm";

export default function ResetPassword() {
 return (
  <div className="grid min-h-svh lg:grid-cols-2">
   <div className="flex flex-col items-center justify-center">
    <div className="w-120 mx-auto bg-white/90 backdrop-blur-sm shadow-lg p-6 md:p-8 border-1 border-blue-100 sm space-y-5 rounded-lg">
     <Logo width={350} />
     <ResetPasswordForm />
    </div>
   </div>

   <div className="hidden lg:block m-5">
    <SwiperCarousel />
   </div>
  </div>
 );
}
