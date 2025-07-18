import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "@/assets/images/truck-long-3.jpg";

import "../basey.css";

const images = [
 image,
 "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const CustomCarousel = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
 };
 const handlePrevious = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
 };
 const handleDotClick = (index) => {
  setCurrentIndex(index);
 };

 return (
  <div className="">
   <img key={currentIndex} src={images[currentIndex]} alt={`Carousel slide ${currentIndex + 1}`} />
   <div className="slide_direction">
    <button className="left" onClick={handlePrevious} aria-label="Previous slide" type="button">
     <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
      <title>Next slide</title>
      <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
     </svg>
    </button>
    <button className="right" onClick={handleNext} aria-label="Next slide" type="button">
     <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
      <title>Previous slide</title>
      <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
     </svg>
    </button>
   </div>
   <div className="indicator">
    {images.map((imgUrl, index) => (
     <img
     key={`test${index+1}`}
      src={imgUrl}
      alt="backgroung-image"
      className=""
     />
    ))}
   </div>
  </div>
 );
};

export default CustomCarousel;
