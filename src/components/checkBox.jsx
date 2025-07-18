import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckBox({ data, handleCheckboxChange, checkState }) {
 //  const [searchParams, setSearchParams] = useSearchParams();

 //  const handleCheckboxChange = (index) => {
 //   const currentValue = searchParams.get(`${index}`);

 //   const newValue = currentValue === "true" ? "false" : "true";

 //   if (newValue === "true") {
 //    searchParams.set(`${index}`, newValue);
 //   } else {
 //    searchParams.delete(`${index}`);
 //   }

 //   setSearchParams(searchParams);
 //  };

 return (
  <div className="flex flex-col gap-2 ">
   {data.map((item) => (
    <div key={item.index} className="flex items-center gap-2">
     <Checkbox
      disabled={item.disabled}
      value={item.searchParam}
      name={item.searchParam}
      onCheckedChange={(value) => handleCheckboxChange({ item, value })}
      checked={checkState[item.searchParam] || false}
     />
     <Label htmlFor={`checkbox-${item.index}`}>{item.item}</Label>
     {item.value !== null && item.value !== undefined && (
      <span className="text-muted text-xs font-normal"> ({item.value || item.count})</span>
     )}
    </div>
   ))}
  </div>
 );
}
