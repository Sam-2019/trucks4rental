import React from "react";
import { useNavigate } from "react-router";

function VehicleImages() {
 const navigate = useNavigate();
 return (
  <img
   src='https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg'
   alt='VehicleImage'
   className=''
   width={380}
  />
 );
}

function TruckImages() {
 const navigate = useNavigate();
 return (
  <img
   src='https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg'
   alt='TruckImage'
   className='rounded-l-lg'
   width={380}
   onClick={() => {
    navigate("/inventory/vehicle/123");
   }}
   onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
     navigate("/inventory/vehicle/123");
    }
   }}
  />
 );
}

function TruckImagesMobile() {
 return (
  <img
   src='https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg'
   alt='TruckImage'
   className='w-full bg-cover rounded-t-lg'
   onClick={() => {
    navigate("/inventory/vehicle/123");
   }}
   onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
     navigate("/inventory/vehicle/123");
    }
   }}
  />
 );
}

export { TruckImagesMobile, TruckImages, VehicleImages };
