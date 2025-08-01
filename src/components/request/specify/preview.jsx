import { numberFormat } from "../../../lib/utils";

export default function SpecifyPreview({ formData }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-gray-700 text-base">
      <p className="text-sm font-medium">Specification :</p>
      <p className="text-sm">{formData?.specification}</p>

      <p className="text-sm font-medium">Configuration :</p>
      <p className="text-sm">{formData?.configuration}</p>

      <p className="text-sm font-medium">Suspension type :</p>
      <p className="text-sm">{formData?.suspensionType}</p>

      <p className="text-sm font-medium">Brand :</p>
      <p className="text-sm">{formData?.brand}</p>

      <p className="text-sm font-medium">Emission standard :</p>
      <p className="text-sm">{formData?.emissionStandard}</p>

      <p className="text-sm font-medium">Matriculation year :</p>
      <p className="text-sm">
        {formData?.matriculationYear[0]} <span>-</span>{" "}
        {formData?.matriculationYear[1]}
      </p>

      <p className="text-sm font-medium">Price :</p>
      <p className="text-sm">
        {numberFormat.format(formData?.price[0])} <span>-</span>{" "}
        {numberFormat.format(formData?.price[1])}
      </p>

      <p className="text-sm font-medium">Mileage :</p>
      <p className="text-sm">
        {numberFormat.format(formData?.mileage[0])} <span>-</span>{" "}
        {numberFormat.format(formData?.mileage[1])}
      </p>
    </div>
  );
}
