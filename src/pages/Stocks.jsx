import { useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import { ChevronsDown, ChevronsUp, Trash2, X } from "lucide-react";
import { TruckCard, TruckCardMobileNew } from "../components/truck/truckCard";
import {
  headers as headersData,
  domain,
  siteName,
  getDisplayNamesFromSearchParams,
  stocks,
} from "../lib/utils";

export default function Stocks() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = location.search;
  const queryString1 = searchQuery ? location.search : null;
  const { displayNames, urlNames } = getDisplayNamesFromSearchParams(
    queryString1,
    headersData
  );

  const [checkedItems, setCheckedItems] = useState(() => {
    const initialChecked = {};
    for (const param of urlNames) {
      if (searchParams.get(param.key) === param.value) {
        initialChecked[param.key] = true;
      } else {
        initialChecked[param.key] = false;
      }
    }
    return initialChecked;
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));

    const currentValue = searchParams.get(`${name}`);
    const newValue = currentValue === "true" ? "false" : "true";
    if (newValue === "true") {
      searchParams.set(`${name}`, newValue);
    } else {
      searchParams.delete(`${name}`);
    }
    setSearchParams(searchParams);
  };

  const handleParamRemove = (item) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: false,
    }));

    searchParams.delete(`${item}`);
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    setSearchParams([]);
    setCheckedItems(() => ({}));
  };

  return (
    <div>
      <p className="text-center py-5">
        All trucks on {domain} are tested and checked. 80% of our customers
        choose {siteName} for this reason!
      </p>

      {/* biome-ignore lint/a11y/noDistractingElements: <explanation> */}
      <marquee>This text will scroll from right to left</marquee>

      <div className="flex flex-row place-content-center">
        <div className="w-80 text-gray-700 hidden md:block space-y-7">
          <div className="hidden md:block">
            <input
              type="search"
              aria-label="Search for a truck"
              placeholder="Search in filters..."
              className="w-61 py-2 px-2 max-w-md bg-white border-1 border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-lg"
            />
          </div>

          {/* <CheckboxPage/> */}

          <div className="space-y-7">
            {Object.values(headersData).map((header) => {
              const [showAll, setShowAll] = useState(false);
              const itemsToShow = showAll
                ? header.subList
                : header.subList.slice(0, 5);

              if (!header.subList || header.subList.length === 0) {
                return null; // Don't render anything if subList is empty
              }

              return (
                <div className="space-y-3" key={header.key}>
                  <div>
                    <p className="w-60 text-sm font-medium">{header.name}</p>
                    <div className="my-1 border-t border-slate-300 w-50" />
                  </div>

                  {/* <CheckBox data={itemsToShow} handleCheckboxChange={handleCheckboxChange} checkState={checkedItems} /> */}

                  <div className="flex flex-col gap-2">
                    {itemsToShow.map((item) => (
                      <div key={item.index} className="flex items-center gap-2">
                        <label className="flex flex-row items-center">
                          <input
                            type="checkbox"
                            name={item.searchParam}
                            checked={checkedItems[item.searchParam] || false} // Ensure it's always a boolean
                            onChange={handleCheckboxChange}
                            className="mr-2"
                          />

                          <span className="text-sm font-normal mr-2">
                            {`${item.item}`}
                          </span>
                          {item.qty !== null && item.qty !== undefined && (
                            <span className="text-muted text-xs font-normal">
                              ({item.qty || item.count})
                            </span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                  {header.subList.length > 5 && (
                    <div
                      onClick={() => setShowAll(!showAll)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          setShowAll(!showAll);
                      }}
                      className="text-dark hover:underline"
                    >
                      {showAll ? (
                        <div className="flex flex-row align-center items-center">
                          <ChevronsUp size={18} />
                          <div className="text-muted text-sm">Less</div>
                        </div>
                      ) : (
                        <div className="flex flex-row align-center items-center">
                          <ChevronsDown size={18} />
                          <div className="text-muted text-sm">More</div>
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
          {displayNames.length === 0 ? null : (
            <div className="flex flex-row justify-between w-full max-w-6xl items-center py-7">
              <p className="">Selected filters: </p>

              <div className="flex flex-wrap gap-2">
                {displayNames.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-row items-center bg-slate-200 rounded-lg py-2 px-3 hover:text-amber-600"
                  >
                    <p className="w-auto mr-2">{item.key}</p>
                    <span>
                      <X
                        size={18}
                        onClick={() => handleParamRemove(item.value)}
                      />
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-row align-center items-center space-x-2 cursor-default hover:text-white hover:bg-red-300 rounded-lg px-5 py-2"
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

          <div className="flex flex-row justify-between w-full max-w-6xl items-center py-6">
            <p>856 Items in selection</p>
            <select
              className="border-1 border-gray-300 p-2 w-40 rounded-lg bg-white focus:outline-none"
              defaultValue="default-sorting"
            >
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
              <TruckCardMobileNew vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
