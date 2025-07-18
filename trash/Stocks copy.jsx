import React, { useState } from "react";
import { CheckBox } from "../components/checkBox";
import { useLocation, useSearchParams } from "react-router";
import { ChevronsDown, ChevronsUp, Trash2, X } from "lucide-react";
import { TruckCardMobile, TruckCard } from "../components/truck/truckCard";
import {
 headers as headersData,
 domain,
 siteName,
 getDisplayNamesFromSearchParams,
 clearArray,
 stocks,
} from "../lib/utils";
// import CheckboxPage from "./CheckboxPage";

export default function Stocks() {
 const location = useLocation();
 const [searchParams, setSearchParams] = useSearchParams();

 const searchQuery = location.search;
 const queryString1 = searchQuery ? location.search : null;
 const foundDisplayNames1 = getDisplayNamesFromSearchParams(queryString1, headersData);

 console.log({ displayNames: foundDisplayNames1.displayNames });
 console.log({ urlNames: foundDisplayNames1.urlNames });

 const [checkedItems, setCheckedItems] = useState(() => {
  const initialChecked = {};
  for (const param of foundDisplayNames1.urlNames) {
   console.log(param.key);
   console.log(param.value);
   if (searchParams.get(param.key) === param.value) {
    initialChecked[param.key] = true;
   } else {
    initialChecked[param.key] = false;
   }
  }
  return initialChecked;
 });

 console.log({ checkedItems });

 const handleParamRemove = (item) => {
  //   console.log(item);
  //   searchParams.delete(`${index}`);
 };

 const handleClear = () => {
  setSearchParams([]);
 };

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 React.useEffect(() => {
  const newSearchParams = new URLSearchParams();
  for (const param of foundDisplayNames1.urlNames) {
   if (checkedItems[param.key]) {
    newSearchParams.set(param.key, param.value);
   }
  }
//   setSearchParams(newSearchParams, { replace: true });
 }, [checkedItems, setSearchParams]);

 const handleCheckboxChange = (event) => {
  const { item, value } = event;
  const { searchParam } = item;
  console.log(item, value);
  setSearchParams(`${item.searchParam}=${value}`);

  setCheckedItems((prevCheckedItems) => ({
   ...prevCheckedItems,
   [item.searchParam]: value,
  }));
 };

 console.log({ searchParams });

 return (
  <div>
   <div className="flex flex-col items-center">
    All trucks on {domain} are tested and checked. 80% of our customers choose {siteName} for this reason!
   </div>

   <div className="flex flex-row place-content-center">
    <div className="w-80 text-gray-700 hidden md:block space-y-7">
     <div className="hidden md:block">
      <input
       type="search"
       aria-label="Search for a truck"
       placeholder="Search in filters..."
       className="w-61 py-2 px-2 max-w-md border-2 border-slate-200 hover:border-slate-500 focus:border-slate-300 focus:outline-none"
      />
     </div>

     {/* <CheckboxPage/> */}

     <div className="space-y-7">
      {Object.values(headersData).map((header) => {
       const [showAll, setShowAll] = useState(false);
       const itemsToShow = showAll ? header.subList : header.subList.slice(0, 5);

       if (!header.subList || header.subList.length === 0) {
        return null; // Don't render anything if subList is empty
       }

       return (
        <div className="space-y-3" key={header.key}>
         <p className="w-60 border-dark border-b font-medium">{header.name}</p>
         <CheckBox data={itemsToShow} handleCheckboxChange={handleCheckboxChange} checkState={checkedItems} />
         {header.subList.length > 5 && (
          <div
           onClick={() => setShowAll(!showAll)}
           onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowAll(!showAll);
           }}
           className="text-dark hover:underline "
          >
           {showAll ? (
            <div className="flex flex-row align-center items-center">
             <ChevronsUp size={20} />
             <div>Less</div>
            </div>
           ) : (
            <div className="flex flex-row align-center items-center">
             <ChevronsDown size={20} />
             <div>More</div>
            </div>
           )}
          </div>
         )}
        </div>
       );
      })}
     </div>
    </div>

    <div className="flex-col w-full max-w-6xl rounded-lg hidden md:block">
     {foundDisplayNames1.displayNames.length === 0 ? null : (
      <div className="flex flex-row justify-between w-full max-w-6xl items-center py-7">
       <p className="">Selected filters: </p>

       <div className="flex flex-wrap gap-2">
        {foundDisplayNames1.displayNames.map((item) => (
         <div key={item} className="flex flex-row items-center bg-slate-200 rounded-lg py-1 px-2">
          <p className="w-auto mr-2">{item}</p>
          <span className="">
           <X size={18} onClick={() => handleParamRemove(item)} />
          </span>
         </div>
        ))}
       </div>

       <div
        className="flex flex-row align-center items-center space-x-2"
        onClick={() => handleClear()}
        onKeyUp={(e) => {
         if (e.key === "Enter" || e.key === " ") handleClear();
        }}
       >
        <Trash2 size={20} />
        <div>Clear</div>
       </div>
      </div>
     )}

     <div className="flex flex-row justify-between w-full max-w-6xl items-center py-6 ">
      <p>856 Items in selection</p>
      <select className="border border-gray-300 p-2 w-40" defaultValue="default-sorting">
       <option value="price-asc">Price ˄</option>
       <option value="price-desc">Price ˅</option>
       <option value="matriculation-asc">Matriculation year ˄</option>
       <option value="matriculation-desc">Matriculation year ˅</option>
       <option value="km-asc">KM ascending </option>
       <option value="km-desc">KM descending </option>
       <option value="default-sorting" defaultValue>
        Default sorting
       </option>
      </select>
     </div>

     <div className="space-y-5">
      {stocks.map((vehicle) => (
       <div key={vehicle.id}>
        <TruckCard vehicle={vehicle} />
       </div>
      ))}
     </div>
    </div>

    <div className="flex flex-col w-full max-w-6xl space-y-8 rounded-lg md:hidden">
     {stocks.map((vehicle) => (
      <div key={vehicle.id}>
       <TruckCardMobile vehicle={vehicle} />
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}
