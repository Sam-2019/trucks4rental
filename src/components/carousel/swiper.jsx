import "swiper/css";
import "swiper/css/pagination";
import "../../swiper.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { defaultImages } from "../../lib/utils";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

const SwiperCarousel = ({ images = defaultImages }) => {
 const navigate = useNavigate();

 const handleExit = () => {
  navigate("/");
 };

 return (
  <Swiper
   style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
   }}
   lazy="true"
   spaceBetween={10}
   slidesPerView={1}
   navigation={false}
   pagination={{
    clickable: true,
   }}
   modules={[Pagination]}
   //    onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log("slide change")}
  >
   {images.map((item) => {
    return (
     <SwiperSlide key={item.index}>
      <img src={item.original} loading="lazy" alt="backgroung-image" />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />

      <p
       className="absolute top-0 right-0 left-max px-5 py-5"
       onClick={handleExit}
       onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
         handleExit();
        }
       }}
       aria-label="Close carousel"
      >
       <X className="p-2 rounded-full bg-slate-500/50 hover:bg-slate-700/50 text-white/90 hover:text-white" size={50}  />
      </p>
     </SwiperSlide>
    );
   })}
  </Swiper>
 );
};

export default SwiperCarousel;
