export default function SpecifyPreview({ formData }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-gray-700 text-base">
      <p className="text-sm">Specification :</p>
      <p className="text-sm">{formData?.specification}</p>

      <p className="text-sm">Configuration :</p>
      <p className="text-sm">{formData?.configuration}</p>

      <p className="text-sm">Suspension type :</p>
      <p className="text-sm">{formData?.suspensionType}</p>

      <p className="text-sm">Brand :</p>
      <p className="text-sm">{formData?.brand}</p>

      <p className="text-sm">Emission standard</p>
      <p className="text-sm">{formData?.emissionStandard}</p>

      <p className="text-sm">Price :</p>
      <div className="flex flex-row space-x-5 items-center">
        <p className="text-sm">{formData?.price[0]}</p>
        <p>-</p>
        <p className="text-sm">{formData?.price[1]}</p>
      </div>

      <p className="text-sm">Matriculation year :</p>
      <div className="flex flex-row space-x-5 items-center">
        <p className="text-sm">{formData?.mileage[0]}</p>
        <p>-</p>
        <p className="text-sm">{formData?.mileage[1]}</p>
      </div>

      <p className="text-sm">Mileage :</p>
      <div className="flex flex-row space-x-5 items-center">
        <p className="text-sm">{formData?.matriculationYear[0]}</p>
        <p>-</p>
        <p className="text-sm">{formData?.matriculationYear[1]}</p>
      </div>
    </div>
  );
}
