import Carousel from "../src/components/carousel";


export default function SuggestedTrucks() {
 return (
  <div className='max-w mx-auto mt-10 bg-amber-500'>
   <div className='max-w-6xl mx-auto my-5 items-center'>
    <div>{recommended_vehicles}</div>

    <div className='flex flex-row w-full'>
     <div className='w-full'>
      <Carousel />

      <div>
       <div>
        <p className='my-3'>Name</p>
       </div>
       <div className='flex flow-row'>
        <p className='w-5/6'>Name</p>
        <p className='w-full'>Name</p>
       </div>
       <div className='flex flow-row'>
        <p className='w-5/6'>Name</p>
        <p className='w-full'>Name</p>
       </div>
       <div className='flex flow-row'>
        <p className='w-5/6'>Name</p>
        <p className='w-full'>Name</p>
       </div>
       <div className='flex flow-row'>
        <p className='w-5/6'>Name</p>
        <p className='w-full'>Name</p>
       </div>
      </div>
      <div className='mt-2'>
       <p className=''>Name</p>

       <div className='flex flow-row'>
        <span className='w-15'>Name </span>
        <span className='w-15'>Name</span>
        <span className=''>Name</span>
       </div>
      </div>
     </div>
     <div className='w-full'>02</div>
     <div className='w-ful'>03</div>
    </div>
   </div>
  </div>
 );
}

const recommended_vehicles = "Recommended vehicles";

const recommended_trucks = [
 {
  id: 0,
  name: "MERCEDES-BENZ ACTROS 1845 LS",
  no: "318678",
  mileage: " 2016-6845,863 km",
  gearbox: "Automatic",
  price: "17900",
  matriculation_year: "2016-6",
  currency: "Ghc",
  tax_inclusive: false,
  configuration: "",
  number_of_axles: "",
  suspension_type: "",
  type: "tractor_unit",
  images: [
   {
    id: 0,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
   },
   {
    id: 1,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
   },
  ],
 },
 {
  id: 1,
  name: "VOLVO FH 650 XL 6X2 ADR ALCOA'S",
  no: "318824",
  mileage: "907,215 km",
  gearbox: "Automatic",
  price: "27950",
  matriculation_year: "2015-6",
  currency: "Ghc",
  tax_inclusive: false,
  configuration: "6x2",
  number_of_axles: "",
  suspension_type: "",
  type: "tractor_unit",
  images: [
   {
    id: 0,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
   },
   {
    id: 1,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hrv/600.jpg",
   },
  ],
 },
 {
  id: 2,
  name: "MAGYAR SR 34 Ibex-Gardner Denver",
  no: "318200",
  mileage: "",
  gearbox: "",
  price: "25900",
  matriculation_year: "1997-1",
  currency: "Ghc",
  tax_inclusive: false,
  configuration: "",
  number_of_axles: "3Axles",
  suspension_type: "full air suspension",
  type: "semi_trailer",
  images: [
   {
    id: 0,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
   },
   {
    id: 1,
    source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hrv/600.jpg",
   },
  ],
 },
];
