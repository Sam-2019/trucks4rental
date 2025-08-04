import "./index.css";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import { createRoot } from "react-dom/client";
import PrivacyPolicy from "./pages/Privacy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "./Root.jsx";
import Login from "./pages/Login.jsx";
import { stocks } from "./lib/utils.js";
import Signup from "./pages/Signup.jsx";
import Vehicle from "./pages/Vehicle.jsx";
import EditVehicle from "./pages/EditVehicle.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

async function vehicleLoader({ params }) {
 const filterValue = params.vid;
 const filteredStocks = stocks.filter((val) => val.number.includes(filterValue));
 return { vehicle: filteredStocks[0] };
}

const router = createBrowserRouter([
 {
  path: "/",
  Component: Root,
  children: [
   { index: true, Component: Home },
   { path: "privacy-policy", Component: PrivacyPolicy },
   { path: "contact", Component: Contact },
   { path: "services", Component: Services },
   { path: "about", Component: null },

   {
    path: "inventory",
    children: [
     { index: true, Component: Inventory },
     { path: "vehicle/details/:vid/:vname", loader: vehicleLoader, Component: Vehicle },
     { path: "vehicle/:pid/edit", Component: EditVehicle },
    ],
   },
   { path: "terms-and-conditions", Component: TermsAndConditions },
  ],
 },
 { path: "login", Component: Login },
 { path: "signup", Component: Signup },
 { path: "reset-password", Component: ResetPassword },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
