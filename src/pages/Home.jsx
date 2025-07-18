import WhyUs from "../components/whyUs";
import Reviews from "../components/reviews";
import BottomNav from "../components/bottomnav";
import Minitrucks from "../components/minitruck";
import SearchMore from "../components/searchMore";
import WokingHours from "../components/workingHours";
import SelectionBanner from "../components/selectionBanner";
import SuggestedTrucks from "../components/suggestedTrucks";
import { useState } from "react";
import RequestModal from "../components/requestModal";

const recommended = "Recommended vehicles";
const lease = "Lease";

function Home() {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const onClose = () => {
  setIsModalOpen(false);
 };
 const onOpen = () => {
  setIsModalOpen(true);
 };
 return (
  <div className="space-y-0">
   <div className="max-w-7xl mx-auto">
    <Minitrucks />
   </div>

   <div className="max-w-7xl mx-auto">
    <SuggestedTrucks header={recommended} />
   </div>

   <div className="max-w-7xl mx-auto">
    <SelectionBanner />
   </div>

   <div className="max-w-7xl mx-auto py-10">
    <SearchMore onOpen={onOpen} />
   </div>

   <div className="mx-auto">
    <WokingHours />
   </div>

   <div className="max-w-7xl mx-auto">
    <SuggestedTrucks header={lease} />
   </div>

   <div className="mx-auto">
    <WhyUs />
   </div>

   <div className="max-w-7xl mx-auto ">
    <Reviews />
   </div>

   <RequestModal open={isModalOpen} onClose={onClose} />
  </div>
 );
}

export default Home;
