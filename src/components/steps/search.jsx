import SearchForm from "./searchForm";

export default function Search({ nextStep, prevStep }) {
  return (
    <div className="flex-grow sm:px-8 relative">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          We find your vehicle
        </h2>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Good choice! Let us help you find the right vehicle. In 90% of the
        searches we find the perfect match. Tell us what you are looking for.
      </p>

      <SearchForm nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
}
