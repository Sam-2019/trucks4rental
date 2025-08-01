import { useState } from "react";
import WhyUs from "../components/whyUs";
import Reviews from "../components/reviews";
import Minitrucks from "../components/minitruck";
import SearchMore from "../components/searchMore";
import WokingHours from "../components/workingHours";
import RequestModal from "../components/request";
import SelectionBanner from "../components/selectionBanner";
import SuggestedTrucks from "../components/suggestedTrucks";

const lease = "Lease";
const categories = "Categories";
const recommended = "Recommended vehicles";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-10 md:space-y-15">
      <div className="max-w-7xl mx-auto">
        <Minitrucks header={categories} />
      </div>

      <div className="max-w-7xl mx-auto">
        <SuggestedTrucks header={recommended} />
      </div>

      <div>
        <SelectionBanner />
      </div>

      <div className="max-w-7xl mx-auto">
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

      <div className="max-w-7xl mx-auto">
        <Reviews />
      </div>

      <RequestModal open={isModalOpen} onClose={onClose} />
    </div>
  );
}

export default Home;
