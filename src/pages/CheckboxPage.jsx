import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";

const queryParamsArray = [
 { key: "token", value: "true" },
 { key: "healthy", value: "true" },
 { key: "admin", value: "false" },
 { key: "debug", value: "true" },
];

function CheckboxPage() {
 const [searchParams, setSearchParams] = useSearchParams();
 const navigate = useNavigate();

 const [checkedItems, setCheckedItems] = useState(() => {
  const initialChecked = {};
  for (const param of queryParamsArray) {
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

 useEffect(() => {
  const newSearchParams = new URLSearchParams();
  for (const param of queryParamsArray) {
   if (checkedItems[param.key]) {
    newSearchParams.set(param.key, param.value);
   }
  }
  setSearchParams(newSearchParams, { replace: true });
 }, [checkedItems, setSearchParams]);

 const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setCheckedItems((prevCheckedItems) => ({
   ...prevCheckedItems,
   [name]: checked,
  }));
 };

 return (
  <div>
   <h1>Select Query Parameters</h1>
   {queryParamsArray.map((param) => (
    <div key={param.key}>
     <label>
      <input
       type="checkbox"
       name={param.key}
       checked={checkedItems[param.key] || false} // Ensure it's always a boolean
       onChange={handleCheckboxChange}
      />
      {`${param.key}=${param.value}`}
     </label>
    </div>
   ))}

   <h2>Current URL Query Parameters:</h2>
   <pre>{searchParams.toString()}</pre>

   <p>
    <Link to="/">Go to Home</Link>
   </p>
  </div>
 );
}

export default CheckboxPage;
