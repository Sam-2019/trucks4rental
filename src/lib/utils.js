import { clsx } from "clsx";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";

import image1 from "@/assets/images/truck-long-1.jpg";
import image2 from "@/assets/images/truck-long-2.jpg";
import image3 from "@/assets/images/truck-long-3.jpg";
import image4 from "@/assets/images/truck-long-4.jpg";

import semi_trailer from "../assets/icons/semi_trailer.png";
import tractor_unit from "../assets/icons/tractor_unit.png";
import tipper from "../assets/icons/tipper.png";
import trailer from "../assets/icons/trailer.png";
import truck from "../assets/icons/truck.png";

import mixer from "../assets/icons/mixer.png";
import loading_box from "../assets/icons/loading_box.png";

export const numberFormat = new Intl.NumberFormat("en-US");

export const officeGMAP =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3269.3558750992966!2d-0.017719521035658967!3d5.625376593192002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf87388b4bfbad%3A0x59f350be83913af0!2sAdumeah%20Plaza!5e1!3m2!1sen!2sgh!4v1750689651147!5m2!1sen!2sgh";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const mobileItems = [
  { index: 0, name: "Stocks", route: "/stocks" },
  { index: 1, name: "Services", route: "/services" },
  { index: 2, name: "Contact", route: "/contact" },
];

export const authSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const resetSchema = yup
  .object({
    email: yup.string().required("Email is required"),
  })
  .required();

export const requestSchema = yup
  .object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup
      .string()
      .email()
      .required("Email is required.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email is invalid."
      ),
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^(?:\+?\d{7,15}|0\d{9})$/, "Phone number is invalid"),
    companyName: yup
      .string()
      .required("Company name is required.")
      .matches(/^[A-Za-z]+(?:\s[A-Za-z]{3,}){1,2}$/, "Name is invalid."),
    contactPhone: yup.bool().required("Required"),
    contactEmail: yup.bool().required("Required"),
    contactWhatsapp: yup.bool().required("Required"),
  })
  .required();

export const truckInfo = yup
  .object({
    brand: yup.string().required("Required"),
    specification: yup.string().required("Required"),
    configuration: yup.string().required("Required"),
    suspensionType: yup.string().required("Required"),
    emissionStandard: yup.string().required("Required"),
  })
  .required();

export const localRequest = yup
  .object({
    materialType: yup.string().required("Required"),
    pickup: yup.string().required("Required"),
    pickupLandmark: yup.string().required("Required"),
    destination: yup.string().required("Required"),
    destinationLandmark: yup.string().required("Required"),
    truckType: yup.string().required("Required"),
    truckId: yup.string().required("Required"),
    name: yup.string().required("Required"),
    contact: yup.string().required("Required"),
    email: yup.string().required("Required"),
  })
  .required();

export const foreignRequest = yup
  .object({
    materialType: yup.string().required("Required"),
    pickup: yup.string().required("Required"),
    pickupLandmark: yup.string().required("Required"),
    destination: yup.string().required("Required"),
    destinationLandmark: yup.string().required("Required"),
    truckType: yup.string().required("Required"),
    truckId: yup.string().required("Required"),
    name: yup.string().required("Required"),
    contact: yup.string().required("Required"),
    email: yup.string().required("Required"),
  })
  .required();

export const siteName = "Trucks4Rental";
export const domain = "Trucks4Rental.com";
export const defaultPlaceholder = "m@example.com";

export const getDisplayNamesFromSearchParams = (queryString, headersData) => {
  const displayNames = [];
  const urlNames = [];

  // Create a URLSearchParams object to easily parse the query string
  const params = new URLSearchParams(queryString);

  // Collect all search parameter keys that are set to 'true'
  const activeSearchParams = [];
  for (const [key, value] of params.entries()) {
    // console.log({ key, value });
    if (value === "true") {
      activeSearchParams.push(key);
    }
  }

  // Iterate through each main category in the headers data
  for (const categoryKey in headersData) {
    // Ensure we are processing own properties that have a subList

    if (
      Object.prototype.hasOwnProperty.call(headersData, categoryKey) &&
      headersData[categoryKey].subList
    ) {
      const subList = headersData[categoryKey].subList;

      // Iterate through each item in the subList using for...of
      for (const item of subList) {
        // Check if the item's searchParam matches any of the active search parameters
        if (activeSearchParams.includes(item.searchParam)) {
          displayNames.push({ key: item.displayName, value: item.searchParam });
          urlNames.push({
            key: item.searchParam,
            value: "true",
            displayName: item.displayName,
          });
        }
      }
    }
  }

  return { displayNames, urlNames };
};

export const clearArray = (arr) => {
  if (Array.isArray(arr)) {
    arr.length = 0;
  } else {
    console.error("The provided argument is not an array.");
  }
};

export const truckTypes = [
  {
    id: 0,
    name: "Tipper",
    otherName: "Tipper",
    file: tipper,
    padding_y: 2,
    width: "100%",
    route: "/stocks?kind-tipper=true",
  },
  {
    id: 1,
    name: "Semi Trailer",
    otherName: "Semi-trailer",
    file: semi_trailer,
    padding_y: 6,
    width: "100%",
    route: "/stocks?kind-semitrailer=true",
  },
  {
    id: 2,
    name: "Truck",
    otherName: "Truck",
    file: truck,
    padding_y: 5,
    width: "100%",
    route: "/stocks?kind-truck=true",
  },
  {
    id: 3,
    name: "Trailer",
    otherName: "Trailer",
    file: trailer,
    padding_y: 5,
    width: "80%",
    route: "/stocks?kind-trailer=true",
  },
  {
    id: 4,
    name: "Tractor",
    otherName: "Tractor",
    file: tractor_unit,
    padding_y: 3,
    width: "79%",
    route: "/stocks?kind-tractorunit=true",
  },
  {
    id: 5,
    name: "Mixer",
    otherName: "Mixer",
    file: mixer,
    padding_y: 5,
    width: "100%",
    route: "/stocks?kind-mixer=true",
  },
  {
    id: 6,
    name: "Loading Box",
    otherName: "Loading Box",
    file: loading_box,
    padding_y: 6,
    width: "100%",
    route: "/stocks?kind-loadingbox=true",
  },
];

export const headers = {
  Promotions: {
    name: "Promotions",
    key: "Promotions",
    subList: [
      {
        item: "New In Stock",
        qty: 30,
        index: 0,
        searchParam: "promotions-newinstock", // Index removed from searchParam
        displayName: "Promotions: New In Stock",
      },
      {
        item: "Reduced In Price",
        qty: null,
        index: 1,
        searchParam: "promotions-reducedinprice", // Index removed from searchParam
        displayName: "Promotions: Reduced In Price",
      },
    ],
  },
  KleynSelection: {
    name: "Kleyn Selection",
    key: "KleynSelection",
    subList: [
      {
        item: "Yes",
        qty: null,
        index: 0,
        searchParam: "kleynselection-yes", // Index removed from searchParam
        displayName: "Kleyn Selection: Yes",
      },
      {
        item: "No",
        qty: null,
        index: 1,
        searchParam: "kleynselection-no", // Index removed from searchParam
        displayName: "Kleyn Selection: No",
      },
    ],
  },
  Kind: {
    name: "Kind",
    key: "Kind",
    subList: [
      {
        item: "Tractor Unit",
        count: 347,
        index: 0,
        searchParam: "kind-tractorunit", // Index removed from searchParam
        displayName: "Kind: Tractor Unit",
      },
      {
        item: "Truck",
        count: 267,
        index: 1,
        searchParam: "kind-truck", // Index removed from searchParam
        displayName: "Kind: Truck",
      },
      {
        item: "Semi-Trailer",
        count: 199,
        index: 2,
        searchParam: "kind-semitrailer", // Index removed from searchParam
        displayName: "Kind: Semi-Trailer",
      },
      {
        item: "Trailer",
        count: 19,
        index: 3,
        searchParam: "kind-trailer", // Index removed from searchParam
        displayName: "Kind: Trailer",
      },
      {
        item: "Tipper",
        count: 14,
        index: 4,
        searchParam: "kind-tipper", // Index removed from searchParam
        displayName: "Kind: Tipper",
      },
      {
        item: "Passenger Car",
        count: 0,
        index: 5,
        searchParam: "kind-passengercar", // Index removed from searchParam
        displayName: "Kind: Passenger Car",
      },
      {
        item: "Van",
        count: 0,
        index: 6,
        searchParam: "kind-van", // Index removed from searchParam
        displayName: "Kind: Van",
      },
    ],
  },
  Specification: {
    name: "Specification",
    key: "Specification",
    subList: [
      {
        value: "Curtainsider",
        item: "Curtainsider",
        qty: 106,
        index: 0,
        searchParam: "specification-curtainsider", // Index removed from searchParam
        displayName: "Specification: Curtainsider",
      },
      {
        value: "Closed Box",
        item: "Closed Box",
        qty: 103,
        index: 1,
        searchParam: "specification-closedbox", // Index removed from searchParam
        displayName: "Specification: Closed Box",
      },
      {
        value: "Frigo",
        item: "Frigo",
        qty: 99,
        index: 2,
        searchParam: "specification-frigo", // Index removed from searchParam
        displayName: "Specification: Frigo",
      },
      {
        value: "Chassis Cabin",
        item: "Chassis Cabin",
        qty: 29,
        index: 3,
        searchParam: "specification-chassiscabin", // Index removed from searchParam
        displayName: "Specification: Chassis Cabin",
      },
      {
        value: "Bdf System",
        item: "Bdf System",
        qty: 23,
        index: 4,
        searchParam: "specification-bdfsystem", // Index removed from searchParam
        displayName: "Specification: Bdf System",
      },
      {
        value: "Container Transport",
        item: "Container Transport",
        qty: 21,
        index: 5,
        searchParam: "specification-containertransport", // Index removed from searchParam
        displayName: "Specification: Container Transport",
      },
      {
        value: "Hooklift",
        item: "Hooklift",
        qty: 18,
        index: 6,
        searchParam: "specification-hooklift", // Index removed from searchParam
        displayName: "Specification: Hooklift",
      },
      {
        value: "Open With Sideboards",
        item: "Open With Sideboards",
        qty: 16,
        index: 7,
        searchParam: "specification-openwithsideboards", // Index removed from searchParam
        displayName: "Specification: Open With Sideboards",
      },
      {
        value: "Tipper",
        item: "Tipper",
        qty: 14,
        index: 8,
        searchParam: "specification-tipper", // Index removed from searchParam
        displayName: "Specification: Tipper",
      },
      {
        value: "Car Transport",
        item: "Car Transport",
        qty: 11,
        index: 9,
        searchParam: "specification-cartransport", // Index removed from searchParam
        displayName: "Specification: Car Transport",
      },
      {
        value: "Platform",
        item: "Platform",
        qty: 10,
        index: 10,
        searchParam: "specification-platform", // Index removed from searchParam
        displayName: "Specification: Platform",
      },
      {
        value: "Tank",
        item: "Tank",
        qty: 7,
        index: 11,
        searchParam: "specification-tank", // Index removed from searchParam
        displayName: "Specification: Tank",
      },
      {
        value: "Lowloader",
        item: "Lowloader",
        qty: 6,
        index: 12,
        searchParam: "specification-lowloader", // Index removed from searchParam
        displayName: "Specification: Lowloader",
      },
      {
        value: "Cable System",
        item: "Cable System",
        qty: 4,
        index: 13,
        searchParam: "cable-system", // Original searchParam without index
        displayName: "Specification: Cable System",
      },
      {
        value: "Moving Floor",
        item: "Moving Floor",
        qty: 4,
        index: 14,
        searchParam: "moving-floor", // Original searchParam without index
        displayName: "Specification: Moving Floor",
      },
      {
        value: "Silo",
        item: "Silo",
        qty: 3,
        index: 15,
        searchParam: "silo", // Original searchParam without index
        displayName: "Specification: Silo",
      },
      {
        value: "Tent",
        item: "Tent",
        qty: 3,
        index: 16,
        searchParam: "tent", // Original searchParam without index
        displayName: "Specification: Tent",
      },
      {
        value: "Garbage Truck",
        item: "Garbage Truck",
        qty: 1,
        index: 17,
        searchParam: "garbage-truck", // Original searchParam without index
        displayName: "Specification: Garbage Truck",
      },
      {
        value: "Gully Cleaner Truck",
        item: "Gully Cleaner Truck",
        qty: 1,
        index: 18,
        searchParam: "gully-cleaner-truck", // Original searchParam without index
        displayName: "Specification: Gully Cleaner Truck",
      },
      {
        value: "",
        item: "Road Sweeper",
        qty: 1,
        index: 19,
        searchParam: "road-sweeper", // Original searchParam without index
        displayName: "Specification: Road Sweeper",
      },
      {
        value: "Skip Loader",
        item: "Skip Loader",
        qty: 1,
        index: 20,
        searchParam: "skip-loader", // Original searchParam without index
        displayName: "Specification: Skip Loader",
      },
      {
        value: "Special",
        item: "Special",
        qty: 1,
        index: 21,
        searchParam: "special", // Original searchParam without index
        displayName: "Specification: Special",
      },
      {
        value: "Closed Van",
        item: "Closed Van",
        qty: null,
        index: 22,
        searchParam: "closed-van", // Original searchParam without index
        displayName: "Specification: Closed Van",
      },
      {
        value: "Compact Panel Van",
        item: "Compact Panel Van",
        qty: null,
        index: 23,
        searchParam: "compact-panel-van", // Original searchParam without index
        displayName: "Specification: Compact Panel Van",
      },
      {
        value: "Passenger Transport",
        item: "Passenger Transport",
        qty: null,
        index: 24,
        searchParam: "passenger-transport", // Original searchParam without index
        displayName: "Specification: Passenger Transport",
      },
      {
        value: "Pickup",
        item: "Pickup",
        qty: null,
        index: 25,
        searchParam: "pickup", // Original searchParam without index
        displayName: "Specification: Pickup",
      },
    ],
  },
  Configuration: {
    name: "Configuration",
    key: "Configuration",
    subList: [
      {
        item: "4X2",
        qty: 445,
        index: 0,
        searchParam: "configuration-4x2",
        displayName: "Configuration: 4X2",
        value: "4X2",
      },
      {
        item: "6X2",
        qty: 129,
        index: 1,
        searchParam: "configuration-6x2",
        displayName: "Configuration: 6X2",
        value: "6X2",
      },
      {
        item: "6X4",
        qty: 25,
        index: 2,
        searchParam: "configuration-6x4",
        displayName: "Configuration: 6X4",
        value: "6X4",
      },
      {
        item: "8X4",
        qty: 17,
        index: 3,
        searchParam: "configuration-8x4",
        displayName: "Configuration: 8X4",
        value: "8X4",
      },
      {
        item: "8X2",
        qty: 7,
        index: 4,
        searchParam: "configuration-8x2",
        displayName: "Configuration: 8X2",
        value: "8X2",
      },
      {
        item: "4X4",
        qty: 3,
        index: 5,
        searchParam: "configuration-4x4",
        displayName: "Configuration: 4X4",
        value: "4X4",
      },
      {
        item: "10X4",
        qty: 1,
        index: 6,
        searchParam: "configuration-10x4",
        displayName: "Configuration: 10X4",
        value: "10X4",
      },
      {
        item: "6X6",
        qty: 1,
        index: 7,
        searchParam: "configuration-6x6",
        displayName: "Configuration: 6X6",
        value: "6X6",
      },
    ],
  },
  EmissionCode: {
    name: "Emission code",
    key: "EmissionCode",
    subList: [
      {
        item: "6",
        qty: 537,
        index: 0,
        searchParam: "emissioncode-6", // Index removed from searchParam
        displayName: "Emission code: 6",
      },
      {
        item: "5",
        qty: 47,
        index: 1,
        searchParam: "emissioncode-5", // Index removed from searchParam
        displayName: "Emission code: 5",
      },
      {
        item: "4",
        qty: 8,
        index: 2,
        searchParam: "emissioncode-4", // Index removed from searchParam
        displayName: "Emission code: 4",
      },
      {
        item: "3",
        qty: 19,
        index: 3,
        searchParam: "emissioncode-3", // Index removed from searchParam
        displayName: "Emission code: 3",
      },
      {
        item: "2",
        qty: 3,
        index: 4,
        searchParam: "emissioncode-2", // Index removed from searchParam
        displayName: "Emission code: 2",
      },
      {
        item: "1",
        qty: 2,
        index: 5,
        searchParam: "emissioncode-1", // Index removed from searchParam
        displayName: "Emission code: 1",
      },
      {
        item: "0",
        qty: 230,
        index: 6,
        searchParam: "emissioncode-0", // Index removed from searchParam
        displayName: "Emission code: 0",
      },
    ],
  },
  FuelType: {
    name: "Fuel type",
    key: "FuelType",
    subList: [
      {
        item: "Natural",
        qty: 2,
        index: 0,
        searchParam: "fueltype-natural", // Index removed from searchParam
        displayName: "Fuel type: Natural",
      },
      {
        item: "Gas",
        qty: 2,
        index: 1,
        searchParam: "fueltype-gas", // Index removed from searchParam
        displayName: "Fuel type: Gas",
      },
      {
        item: "Electrical",
        qty: 2,
        index: 2,
        searchParam: "fueltype-electrical", // Index removed from searchParam
        displayName: "Fuel type: Electrical",
      },
      {
        item: "Diesel",
        qty: 211,
        index: 3,
        searchParam: "fueltype-diesel", // Index removed from searchParam
        displayName: "Fuel type: Diesel",
      },
      {
        item: "Petrol",
        qty: null,
        index: 4,
        searchParam: "fueltype-petrol", // Index removed from searchParam
        displayName: "Fuel type: Petrol",
      },
    ],
  },
  Brand: {
    name: "Brand",
    key: "Brand",
    subList: [
      {
        item: "SCANIA",
        qty: 136,
        index: 0,
        searchParam: "brand-scania",
        displayName: "Brand: SCANIA",
        value: "Scania",
      },
      {
        item: "M.A.N.",
        qty: 119,
        index: 1,
        searchParam: "brand-man",
        displayName: "Brand: M.A.N.",
        value: "M.A.N.",
      },
      {
        item: "VOLVO",
        qty: 118,
        index: 2,
        searchParam: "brand-volvo",
        displayName: "Brand: VOLVO",
        value: "Volvo",
      },
      {
        item: "DAF",
        qty: 107,
        index: 3,
        searchParam: "brand-daf",
        displayName: "Brand: DAF",
        value: "Daf",
      },
      {
        item: "MERCEDES-BENZ",
        qty: 79,
        index: 4,
        searchParam: "brand-mercedes-benz",
        displayName: "Brand: MERCEDES-BENZ",
        value: "Mercedes-Benz",
      },
      {
        item: "KRONE",
        qty: 48,
        index: 5,
        searchParam: "brand-krone",
        displayName: "Brand: KRONE",
        value: "Krone",
      },
      {
        item: "SCHMITZ",
        qty: 47,
        index: 6,
        searchParam: "brand-schmitz",
        displayName: "Brand: SCHMITZ",
        value: "Schmitz",
      },
      {
        item: "IVECO",
        qty: 37,
        index: 7,
        searchParam: "brand-iveco",
        displayName: "Brand: IVECO",
        value: "Iveco",
      },
      {
        item: "RENAULT",
        qty: 34,
        index: 8,
        searchParam: "brand-renault",
        displayName: "Brand: RENAULT",
        value: "Renault",
      },
      {
        item: "VAN HOOL",
        qty: 22,
        index: 9,
        searchParam: "brand-vanhool",
        displayName: "Brand: VAN HOOL",
        value: "Van Hool",
      },
      {
        item: "KOGEL",
        qty: 12,
        index: 10,
        searchParam: "brand-kogel",
        displayName: "Brand: KOGEL",
        value: "Kogel",
      },
      {
        item: "KELBERG",
        qty: 8,
        index: 11,
        searchParam: "brand-kelberg",
        displayName: "Brand: KELBERG",
        value: "Kelberg",
      },
      {
        item: "FUSO",
        qty: 6,
        index: 12,
        searchParam: "brand-fuso",
        displayName: "Brand: FUSO",
        value: "Fuso",
      },
      {
        item: "GROENEWEGEN",
        qty: 5,
        index: 13,
        searchParam: "brand-groenewegen",
        displayName: "Brand: GROENEWEGEN",
        value: "Groenewegen",
      },
      {
        item: "LAMBERET",
        qty: 5,
        index: 14,
        searchParam: "brand-lamberet",
        displayName: "Brand: LAMBERET",
        value: "Lamberet",
      },
      {
        item: "CHEREAU",
        qty: 4,
        index: 15,
        searchParam: "brand-chereau",
        displayName: "Brand: CHEREAU",
        value: "Chereau",
      },
      {
        item: "NOOTEBOOM",
        qty: 4,
        index: 16,
        searchParam: "brand-nooteboom",
        displayName: "Brand: NOOTEBOOM",
        value: "Nooteboom",
      },
      {
        item: "RENDERS",
        qty: 4,
        index: 17,
        searchParam: "brand-renders",
        displayName: "Brand: RENDERS",
        value: "Renders",
      },
      {
        item: "HOFFMANN",
        qty: 3,
        index: 18,
        searchParam: "brand-hoffmann",
        displayName: "Brand: HOFFMANN",
        value: "Hoffmann",
      },
      {
        item: "PACTON",
        qty: 3,
        index: 19,
        searchParam: "brand-pacton",
        displayName: "Brand: PACTON",
        value: "Pacton",
      },
      {
        item: "STAS",
        qty: 3,
        index: 20,
        searchParam: "brand-stas",
        displayName: "Brand: STAS",
        value: "Stas",
      },
      {
        item: "VAN ECK",
        qty: 3,
        index: 21,
        searchParam: "brand-vaneck",
        displayName: "Brand: VAN ECK",
        value: "Van Eck",
      },
      {
        item: "ASCA",
        qty: 2,
        index: 22,
        searchParam: "brand-asca",
        displayName: "Brand: ASCA",
        value: "Asca",
      },
      {
        item: "FLIEGL",
        qty: 2,
        index: 23,
        searchParam: "brand-fliegl",
        displayName: "Brand: FLIEGL",
        value: "Fliegl",
      },
      {
        item: "FLOOR",
        qty: 2,
        index: 24,
        searchParam: "brand-floor",
        displayName: "Brand: FLOOR",
        value: "Floor",
      },
      {
        item: "KROMHOUT",
        qty: 2,
        index: 25,
        searchParam: "brand-kromhout",
        displayName: "Brand: KROMHOUT",
        value: "Kromhout",
      },
      {
        item: "LEGRAS",
        qty: 2,
        index: 26,
        searchParam: "brand-legras",
        displayName: "Brand: LEGRAS",
        value: "Legras",
      },
      {
        item: "NOPA",
        qty: 2,
        index: 27,
        searchParam: "brand-nopa",
        displayName: "Brand: NOPA",
        value: "Nopa",
      },
      {
        item: "SCHWARZMUELLER",
        qty: 2,
        index: 28,
        searchParam: "brand-schwarzmueller",
        displayName: "Brand: SCHWARZMUELLER",
        value: "Schwarzmueller",
      },
      {
        item: "SPITZER",
        qty: 2,
        index: 29,
        searchParam: "brand-spitzer",
        displayName: "Brand: SPITZER",
        value: "Spitzer",
      },
      {
        item: "ACKERMANN FRUEHAUF",
        qty: 1,
        index: 30,
        searchParam: "brand-ackermannfruehauf",
        displayName: "Brand: ACKERMANN FRUEHAUF",
        value: "Ackermann Fruehauf",
      },
      {
        item: "BENALU",
        qty: 1,
        index: 31,
        searchParam: "brand-benalu",
        displayName: "Brand: BENALU",
        value: "Benalu",
      },
      {
        item: "BURG",
        qty: 1,
        index: 32,
        searchParam: "brand-burg",
        displayName: "Brand: BURG",
        value: "Burg",
      },
      {
        item: "ESTERER",
        qty: 1,
        index: 33,
        searchParam: "brand-esterer",
        displayName: "Brand: ESTERER",
        value: "Esterer",
      },
      {
        item: "FAG",
        qty: 1,
        index: 34,
        searchParam: "brand-fag",
        displayName: "Brand: FAG",
        value: "Fag",
      },
      {
        item: "FAYMONVILLE",
        qty: 1,
        index: 35,
        searchParam: "brand-faymonville",
        displayName: "Brand: FAYMONVILLE",
        value: "Faymonville",
      },
      {
        item: "FELDBINDER",
        qty: 1,
        index: 36,
        searchParam: "brand-feldbinder",
        displayName: "Brand: FELDBINDER",
        value: "Feldbinder",
      },
      {
        item: "FRUEHAUF",
        qty: 1,
        index: 37,
        searchParam: "brand-fruehauf",
        displayName: "Brand: FRUEHAUF",
        value: "Fruehauf",
      },
      {
        item: "GS",
        qty: 1,
        index: 38,
        searchParam: "brand-gs",
        displayName: "Brand: GS",
        value: "Gs",
      },
      {
        item: "HAMMAR",
        qty: 1,
        index: 39,
        searchParam: "brand-hammar",
        displayName: "Brand: HAMMAR",
        value: "Hammar",
      },
      {
        item: "HTF",
        qty: 1,
        index: 40,
        searchParam: "brand-htf",
        displayName: "Brand: HTF",
        value: "Htf",
      },
      {
        item: "JUMBO",
        qty: 1,
        index: 41,
        searchParam: "brand-jumbo",
        displayName: "Brand: JUMBO",
        value: "Jumbo",
      },
      {
        item: "KASSBOHRER",
        qty: 1,
        index: 42,
        searchParam: "brand-kassbohrer",
        displayName: "Brand: KASSBOHRER",
        value: "Kassbohrer",
      },
      {
        item: "KLEYN TRAILERS",
        qty: 1,
        index: 43,
        searchParam: "brand-kleyntrailers",
        displayName: "Brand: KLEYN TRAILERS",
        value: "Kleyn Trailers",
      },
      {
        item: "L.A.G.",
        qty: 1,
        index: 44,
        searchParam: "brand-lag",
        displayName: "Brand: L.A.G.",
        value: "L.A.G.",
      },
      {
        item: "LAMBRECHT",
        qty: 1,
        index: 45,
        searchParam: "brand-lambrecht",
        displayName: "Brand: LAMBRECHT",
        value: "Lambrecht",
      },

      {
        item: "LANGENDORF",
        qty: 1,
        index: 47,
        searchParam: "brand-langendorf",
        displayName: "Brand: LANGENDORF",
        value: "Langendorf",
      },
      {
        item: "MAGYAR",
        qty: 1,
        index: 48,
        searchParam: "brand-magyar",
        displayName: "Brand: MAGYAR",
        value: "Magyar",
      },
      {
        item: "MAISONNEUVE",
        qty: 1,
        index: 49,
        searchParam: "brand-maisonneuve",
        displayName: "Brand: MAISONNEUVE",
        value: "Maisonneuve",
      },
      {
        item: "MEIERLING",
        qty: 1,
        index: 50,
        searchParam: "brand-meierling",
        displayName: "Brand: MEIERLING",
        value: "Meierling",
      },
      {
        item: "MEILLER",
        qty: 1,
        index: 51,
        searchParam: "brand-meiller",
        displayName: "Brand: MEILLER",
        value: "Meiller",
      },
      {
        item: "OMAR",
        qty: 1,
        index: 52,
        searchParam: "brand-omar",
        displayName: "Brand: OMAR",
        value: "Omar",
      },
      {
        item: "POLKON",
        qty: 1,
        index: 53,
        searchParam: "brand-polkon",
        displayName: "Brand: POLKON",
        value: "Polkon",
      },
      {
        item: "REGIS",
        qty: 1,
        index: 54,
        searchParam: "brand-regis",
        displayName: "Brand: REGIS",
        value: "Regis",
      },
      {
        item: "ROFA",
        qty: 1,
        index: 55,
        searchParam: "brand-rofa",
        displayName: "Brand: ROFA",
        value: "Rofa",
      },
      {
        item: "SOR IBERICA",
        qty: 1,
        index: 56,
        searchParam: "brand-soriberica",
        displayName: "Brand: SOR IBERICA",
        value: "Sor Iberica",
      },
      {
        item: "SYSTEM TRAILERS",
        qty: 1,
        index: 57,
        searchParam: "brand-systemtrailers",
        displayName: "Brand: SYSTEM TRAILERS",
        value: "System Trailers",
      },
      {
        item: "TRACON",
        qty: 1,
        index: 58,
        searchParam: "brand-tracon",
        displayName: "Brand: TRACON",
        value: "Tracon",
      },
      {
        item: "VOGELZANG",
        qty: 1,
        index: 59,
        searchParam: "brand-vogelzang",
        displayName: "Brand: VOGELZANG",
        value: "Vogelzang",
      },
      {
        item: "VS MONT SRO",
        qty: 1,
        index: 60,
        searchParam: "brand-vsmontsro",
        displayName: "Brand: VS MONT SRO",
        value: "Vs Mont Sro",
      },
      {
        item: "WIESE",
        qty: 1,
        index: 61,
        searchParam: "brand-wiese",
        displayName: "Brand: WIESE",
        value: "Wiese",
      },
      {
        item: "BE-COMBI",
        qty: null,
        index: 62,
        searchParam: "brand-be-combi",
        displayName: "Brand: BE-COMBI",
        value: "Be-Combi",
      },
      {
        item: "CITROEN",
        qty: null,
        index: 63,
        searchParam: "brand-citroen",
        displayName: "Brand: CITROEN",
        value: "Citroen",
      },
      {
        item: "FIAT",
        qty: null,
        index: 64,
        searchParam: "brand-fiat",
        displayName: "Brand: FIAT",
        value: "Fiat",
      },
      {
        item: "FORD",
        qty: null,
        index: 65,
        searchParam: "brand-ford",
        displayName: "Brand: FORD",
        value: "Ford",
      },
      {
        item: "ISUZU",
        qty: null,
        index: 66,
        searchParam: "brand-isuzu",
        displayName: "Brand: ISUZU",
        value: "Isuzu",
      },
      {
        item: "LANDROVER",
        qty: null,
        index: 67,
        searchParam: "brand-landrover",
        displayName: "Brand: LANDROVER",
        value: "Landrover",
      },
      {
        item: "MITSUBISHI",
        qty: null,
        index: 68,
        searchParam: "brand-mitsubishi",
        displayName: "Brand: MITSUBISHI",
        value: "Mitsubishi",
      },
      {
        item: "NISSAN",
        qty: null,
        index: 69,
        searchParam: "brand-nissan",
        displayName: "Brand: NISSAN",
        value: "Nissan",
      },
      {
        item: "OPEL",
        qty: null,
        index: 70,
        searchParam: "brand-opel",
        displayName: "Brand: OPEL",
        value: "Opel",
      },
      {
        item: "PEUGEOT",
        qty: null,
        index: 71,
        searchParam: "brand-peugeot",
        displayName: "Brand: PEUGEOT",
        value: "Peugeot",
      },
      {
        item: "TOYOTA",
        qty: null,
        index: 72,
        searchParam: "brand-toyota",
        displayName: "Brand: TOYOTA",
        value: "Toyota",
      },
      {
        item: "VELDHUIZEN",
        qty: null,
        index: 73,
        searchParam: "brand-veldhuisen",
        displayName: "Brand: VELDHUIZEN",
        value: "Veldhuizen",
      },
      {
        item: "VOLKSWAGEN",
        qty: null,
        index: 74,
        searchParam: "brand-volkswagen",
        displayName: "Brand: VOLKSWAGEN",
        value: "Volkswagen",
      },
    ],
  },
  Range: {
    name: "Range",
    key: "Range",
    subList: [
      {
        item: "R",
        qty: 86,
        index: 0,
        searchParam: "range-r", // Index removed from searchParam
        displayName: "Range: R",
      },
      {
        item: "Fh",
        qty: 82,
        index: 1,
        searchParam: "range-fh", // Index removed from searchParam
        displayName: "Range: Fh",
      },
      {
        item: "Tgx",
        qty: 75,
        index: 2,
        searchParam: "range-tgx", // Index removed from searchParam
        displayName: "Range: Tgx",
      },
      {
        item: "Xf",
        qty: 60,
        index: 3,
        searchParam: "range-xf", // Index removed from searchParam
        displayName: "Range: Xf",
      },
      {
        item: "Actros",
        qty: 38,
        index: 4,
        searchParam: "range-actros", // Index removed from searchParam
        displayName: "Range: Actros",
      },
      {
        item: "Atego",
        qty: 27,
        index: 5,
        searchParam: "range-atego", // Index removed from searchParam
        displayName: "Range: Atego",
      },
      {
        item: "Lf",
        qty: 27,
        index: 6,
        searchParam: "range-lf", // Index removed from searchParam
        displayName: "Range: Lf",
      },
      {
        item: "Tgl",
        qty: 20,
        index: 7,
        searchParam: "range-tgl", // Index removed from searchParam
        displayName: "Range: Tgl",
      },
      {
        item: "S",
        qty: 19,
        index: 8,
        searchParam: "range-s", // Index removed from searchParam
        displayName: "Range: S",
      },
      {
        item: "P",
        qty: 17,
        index: 9,
        searchParam: "range-p", // Index removed from searchParam
        displayName: "Range: P",
      },
      {
        item: "Eurocargo",
        qty: 16,
        index: 10,
        searchParam: "range-eurocargo", // Index removed from searchParam
        displayName: "Range: Eurocargo",
      },
      {
        item: "Fm",
        qty: 16,
        index: 11,
        searchParam: "range-fm", // Index removed from searchParam
        displayName: "Range: Fm",
      },
      {
        item: "D Serie",
        qty: 14,
        index: 12,
        searchParam: "range-dserie", // Index removed from searchParam
        displayName: "Range: D Serie",
      },
      {
        item: "G",
        qty: 14,
        index: 13,
        searchParam: "range-g", // Index removed from searchParam
        displayName: "Range: G",
      },
      {
        item: "Tgs",
        qty: 13,
        index: 14,
        searchParam: "range-tgs", // Index removed from searchParam
        displayName: "Range: Tgs",
      },
      {
        item: "Cf",
        qty: 12,
        index: 15,
        searchParam: "range-cf", // Index removed from searchParam
        displayName: "Range: Cf",
      },
      {
        item: "S-Way",
        qty: 12,
        index: 16,
        searchParam: "range-s-way", // Index removed from searchParam
        displayName: "Range: S-Way",
      },
      {
        item: "FL",
        qty: 11,
        index: 17,
        searchParam: "range-fl", // Index removed from searchParam
        displayName: "Range: FL",
      },
      {
        item: "T Serie",
        qty: 11,
        index: 18,
        searchParam: "range-tserie", // Index removed from searchParam
        displayName: "Range: T Serie",
      },
      {
        item: "Stralis",
        qty: 8,
        index: 19,
        searchParam: "range-stralis", // Index removed from searchParam
        displayName: "Range: Stralis",
      },
      {
        item: "Antos",
        qty: 7,
        index: 20,
        searchParam: "range-antos", // Index removed from searchParam
        displayName: "Range: Antos",
      },
      {
        item: "Tgm",
        qty: 7,
        index: 21,
        searchParam: "range-tgm", // Index removed from searchParam
        displayName: "Range: Tgm",
      },
      {
        item: "Arocs",
        qty: 5,
        index: 22,
        searchParam: "range-arocs", // Index removed from searchParam
        displayName: "Range: Arocs",
      },
      {
        item: "C Serie",
        qty: 4,
        index: 23,
        searchParam: "range-cserie", // Index removed from searchParam
        displayName: "Range: C Serie",
      },
      {
        item: "65",
        qty: 2,
        index: 24,
        searchParam: "range-65", // Index removed from searchParam
        displayName: "Range: 65",
      },
      {
        item: "Premium",
        qty: 2,
        index: 25,
        searchParam: "range-premium", // Index removed from searchParam
        displayName: "Range: Premium",
      },
      {
        item: "Xb",
        qty: 2,
        index: 26,
        searchParam: "range-xb", // Index removed from searchParam
        displayName: "Range: Xb",
      },
      {
        item: "Xg",
        qty: 2,
        index: 27,
        searchParam: "range-xg", // Index removed from searchParam
        displayName: "Range: Xg",
      },
      {
        item: "800",
        qty: 1,
        index: 28,
        searchParam: "range-800", // Index removed from searchParam
        displayName: "Range: 800",
      },
      {
        item: "Axor",
        qty: 1,
        index: 29,
        searchParam: "range-axor", // Index removed from searchParam
        displayName: "Range: Axor",
      },
      {
        item: "B",
        qty: 1,
        index: 30,
        searchParam: "range-b", // Index removed from searchParam
        displayName: "Range: B",
      },
      {
        item: "F2000",
        qty: 1,
        index: 31,
        searchParam: "range-f2000", // Index removed from searchParam
        displayName: "Range: F2000",
      },
      {
        item: "F90",
        qty: 1,
        index: 32,
        searchParam: "range-f90", // Index removed from searchParam
        displayName: "Range: F90",
      },
      {
        item: "Food/ Milk/ Water",
        qty: 1,
        index: 33,
        searchParam: "range-foodmilkwater", // Index removed from searchParam
        displayName: "Range: Food/ Milk/ Water",
      },
      {
        item: "Food",
        qty: 1,
        index: 34,
        searchParam: "range-food", // Index removed from searchParam
        displayName: "Range: Food",
      },
      {
        item: "High T",
        qty: 1,
        index: 35,
        searchParam: "range-hight", // Index removed from searchParam
        displayName: "Range: High T",
      },
      {
        item: "Midlum",
        qty: 1,
        index: 36,
        searchParam: "range-midlum", // Index removed from searchParam
        displayName: "Range: Midlum",
      },
      {
        item: "Tga",
        qty: 1,
        index: 37,
        searchParam: "range-tga", // Index removed from searchParam
        displayName: "Range: Tga",
      },
      {
        item: "Trakker",
        qty: 1,
        index: 38,
        searchParam: "range-trakker", // Index removed from searchParam
        displayName: "Range: Trakker",
      },
      {
        item: "200",
        qty: null,
        index: 39,
        searchParam: "range-200", // Index removed from searchParam
        displayName: "Range: 200",
      },
      {
        item: "Amarok",
        qty: null,
        index: 40,
        searchParam: "range-amarok", // Index removed from searchParam
        displayName: "Range: Amarok",
      },
      {
        item: "Berlingo",
        qty: null,
        index: 41,
        searchParam: "range-berlingo", // Index removed from searchParam
        displayName: "Range: Berlingo",
      },
      {
        item: "Boxer",
        qty: null,
        index: 42,
        searchParam: "range-boxer", // Index removed from searchParam
        displayName: "Range: Boxer",
      },
      {
        item: "Cabstar",
        qty: null,
        index: 43,
        searchParam: "range-cabstar", // Index removed from searchParam
        displayName: "Range: Cabstar",
      },
      {
        item: "Caddy",
        qty: null,
        index: 44,
        searchParam: "range-caddy", // Index removed from searchParam
        displayName: "Range: Caddy",
      },
      {
        item: "Citan",
        qty: null,
        index: 45,
        searchParam: "range-citan", // Index removed from searchParam
        displayName: "Range: Citan",
      },
      {
        item: "Combo",
        qty: null,
        index: 46,
        searchParam: "range-combo", // Index removed from searchParam
        displayName: "Range: Combo",
      },
      {
        item: "Crafter",
        qty: null,
        index: 47,
        searchParam: "range-crafter", // Index removed from searchParam
        displayName: "Range: Crafter",
      },
      {
        item: "Daily",
        qty: null,
        index: 48,
        searchParam: "range-daily", // Index removed from searchParam
        displayName: "Range: Daily",
      },
      {
        item: "Dmax",
        qty: null,
        index: 49,
        searchParam: "range-dmax", // Index removed from searchParam
        displayName: "Range: Dmax",
      },
      {
        item: "Dobló",
        qty: null,
        index: 50,
        searchParam: "range-doblo", // Index removed from searchParam
        displayName: "Range: Dobló",
      },
      {
        item: "Ducato",
        qty: null,
        index: 51,
        searchParam: "range-ducato", // Index removed from searchParam
        displayName: "Range: Ducato",
      },
      {
        item: "E-Transit",
        qty: null,
        index: 52,
        searchParam: "range-e-transit", // Index removed from searchParam
        displayName: "Range: E-Transit",
      },
      {
        item: "Eqv",
        qty: null,
        index: 53,
        searchParam: "range-eqv", // Index removed from searchParam
        displayName: "Range: Eqv",
      },
      {
        item: "Esprinter",
        qty: null,
        index: 54,
        searchParam: "range-esprinter", // Index removed from searchParam
        displayName: "Range: Esprinter",
      },
      {
        item: "Evito",
        qty: null,
        index: 55,
        searchParam: "range-evito", // Index removed from searchParam
        displayName: "Range: Evito",
      },
      {
        item: "Expert",
        qty: null,
        index: 56,
        searchParam: "range-expert", // Index removed from searchParam
        displayName: "Range: Expert",
      },
      {
        item: "Jumper",
        qty: null,
        index: 57,
        searchParam: "range-jumper", // Index removed from searchParam
        displayName: "Range: Jumper",
      },
      {
        item: "Jumpy",
        qty: null,
        index: 58,
        searchParam: "range-jumpy", // Index removed from searchParam
        displayName: "Range: Jumpy",
      },
      {
        item: "Kangoo",
        qty: null,
        index: 59,
        searchParam: "range-kangoo", // Index removed from searchParam
        displayName: "Range: Kangoo",
      },
      {
        item: "L",
        qty: null,
        index: 60,
        searchParam: "range-l", // Index removed from searchParam
        displayName: "Range: L",
      },
      {
        item: "Master",
        qty: null,
        index: 61,
        searchParam: "range-master", // Index removed from searchParam
        displayName: "Range: Master",
      },
      {
        item: "Movano",
        qty: null,
        index: 62,
        searchParam: "range-movano", // Index removed from searchParam
        displayName: "Range: Movano",
      },
      {
        item: "Navara",
        qty: null,
        index: 63,
        searchParam: "range-navara", // Index removed from searchParam
        displayName: "Range: Navara",
      },
      {
        item: "Nv",
        qty: null,
        index: 64,
        searchParam: "range-nv", // Index removed from searchParam
        displayName: "Range: Nv",
      },
      {
        item: "Primastar",
        qty: null,
        index: 65,
        searchParam: "range-primastar", // Index removed from searchParam
        displayName: "Range: Primastar",
      },
      {
        item: "Pro-Ace",
        qty: null,
        index: 66,
        searchParam: "range-pro-ace", // Index removed from searchParam
        displayName: "Range: Pro-Ace",
      },
      {
        item: "Sprinter",
        qty: null,
        index: 67,
        searchParam: "range-sprinter", // Index removed from searchParam
        displayName: "Range: Sprinter",
      },
      {
        item: "T",
        qty: null,
        index: 68,
        searchParam: "range-t", // Index removed from searchParam
        displayName: "Range: T",
      },
      {
        item: "Tge",
        qty: null,
        index: 69,
        searchParam: "range-tge", // Index removed from searchParam
        displayName: "Range: Tge",
      },
      {
        item: "Townstar",
        qty: null,
        index: 70,
        searchParam: "range-townstar", // Index removed from searchParam
        displayName: "Range: Townstar",
      },
      {
        item: "Trafic",
        qty: null,
        index: 71,
        searchParam: "range-trafic", // Index removed from searchParam
        displayName: "Range: Trafic",
      },
      {
        item: "Transit",
        qty: null,
        index: 72,
        searchParam: "range-transit", // Index removed from searchParam
        displayName: "Range: Transit",
      },
      {
        item: "Transporter",
        qty: null,
        index: 73,
        searchParam: "range-transporter", // Index removed from searchParam
        displayName: "Range: Transporter",
      },
      {
        item: "V-Klasse",
        qty: null,
        index: 74,
        searchParam: "range-v-klasse", // Index removed from searchParam
        displayName: "Range: V-Klasse",
      },
      {
        item: "Vito",
        qty: null,
        index: 75,
        searchParam: "range-vito", // Index removed from searchParam
        displayName: "Range: Vito",
      },
      {
        item: "Vivaro",
        qty: null,
        index: 76,
        searchParam: "range-vivaro", // Index removed from searchParam
        displayName: "Range: Vivaro",
      },
    ],
  },
  Mileage: {
    name: "Mileage (KM)",
    key: "Mileage(KM)",
    subList: [],
  },
  MatriculationYear: {
    name: "Matriculation year",
    key: "MatriculationYear",
    subList: [],
  },
  Price: {
    name: "Price (€)",
    key: "Price(€)",
    subList: [],
  },
  Lease: {
    name: "Lease",
    key: "Lease",
    subList: [
      {
        item: "Yes",
        qty: null,
        index: 0,
        searchParam: "lease-yes", // Index removed from searchParam
        displayName: "Lease: Yes",
      },
    ],
  },
  Chassis: {
    name: "Chassis",
    key: "Chassis",
    subList: [],
  },
  Cabin: {
    name: "Cabin",
    key: "Cabin",
    subList: [],
  },
  Extras: {
    name: "Extras",
    key: "Extras",
    subList: [],
  },
  Drivetrain: {
    name: "Drivetrain",
    key: "Drivetrain",
    subList: [],
  },
  Superstructure: {
    name: "Superstructure",
    key: "Superstructure",
    subList: [],
  },
  RefrigerationUnit: {
    name: "Refrigeration unit",
    key: "RefrigerationUnit",
    subList: [],
  },
  Damaged: {
    name: "Damaged",
    key: "Damaged",
    subList: [
      {
        item: "Yes",
        qty: null,
        index: 0,
        searchParam: "damaged-yes", // Index removed from searchParam
        displayName: "Damaged: Yes",
      },
      {
        item: "No",
        qty: null,
        index: 1,
        searchParam: "damaged-no", // Index removed from searchParam
        displayName: "Damaged: No",
      },
    ],
  },
  DutchTrucks: {
    name: "Dutch trucks",
    key: "DutchTrucks",
    subList: [
      {
        item: "Yes",
        qty: null,
        index: 0,
        searchParam: "dutchtrucks-yes", // Index removed from searchParam
        displayName: "Dutch trucks: Yes",
      },
      {
        item: "No",
        qty: null,
        index: 1,
        searchParam: "dutchtrucks-no", // Index removed from searchParam
        displayName: "Dutch trucks: No",
      },
    ],
  },
};

export const recommended_trucks = [
  {
    id: 0,
    new: false,
    name: "MERCEDES-BENZ ACTROS 1845 LS",
    number: "318678",
    mileage: "845,863 km",
    gearbox: "Automatic",
    price: "17,900",
    matriculationYear: "2016-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 1,
    new: false,
    name: "VOLVO FH 650 XL 6X2 ADR ALCOA'S",
    number: "318824",
    mileage: "907,215 km",
    gearbox: "Automatic",
    price: "27,950",
    matriculationYear: "2015-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "6x2",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318824/VOLVOFH650XL6X2ADRALCOAS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 2,
    new: true,
    name: "MAGYAR SR 34 Ibex-Gardner Denver",
    number: "318200",
    mileage: "",
    gearbox: "",
    price: "25,900",
    matriculationYear: "1997-1",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "3",
    suspensionType: "full air suspension",
    type: "semi_trailer",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318200/MAGYARSR34Ibex-GardnerDenver",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
];

export const comparable_trucks = [
  {
    id: 0,
    new: true,
    name: "MERCEDES-BENZ ACTROS 1845 LS",
    number: "318678",
    mileage: "845,863 km",
    gearbox: "Automatic",
    price: "17,900",
    matriculationYear: "2016-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 1,
    new: false,
    name: "VOLVO FH 650 XL 6X2 ADR ALCOA'S",
    number: "318824",
    mileage: "907,215 km",
    gearbox: "Automatic",
    price: "27,950",
    matriculationYear: "2015-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "6x2",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318824/VOLVOFH650XL6X2ADRALCOAS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 2,
    new: true,
    name: "MAGYAR SR 34 Ibex-Gardner Denver",
    number: "318200",
    mileage: "",
    gearbox: "",
    price: "25,900",
    matriculationYear: "1997-1",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "3",
    suspensionType: "full air suspension",
    type: "semi_trailer",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318200/MAGYARSR34Ibex-GardnerDenver",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
];

export const stocks = [
  {
    id: 0,
    new: true,
    name: "MERCEDES-BENZ ACTROS 1845 LS",
    number: "318678",
    mileage: "845,863 km",
    gearbox: "Automatic",
    price: "17,900",
    matriculationYear: "2016-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 1,
    new: false,
    name: "VOLVO FH 650 XL 6X2 ADR ALCOA'S",
    number: "318824",
    mileage: "907,215 km",
    gearbox: "Automatic",
    price: "27,950",
    matriculationYear: "2015-6",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "6x2",
    axlesCount: "",
    suspensionType: "",
    type: "tractor_unit",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318824/VOLVOFH650XL6X2ADRALCOAS",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
  {
    id: 2,
    new: true,
    name: "MAGYAR SR 34 Ibex-Gardner Denver",
    number: "318200",
    mileage: "",
    gearbox: "",
    price: "25,900",
    matriculationYear: "1997-1",
    currency: "Ghc",
    taxInclusive: false,
    configuration: "",
    axlesCount: "3",
    suspensionType: "full air suspension",
    type: "semi_trailer",
    currencySuffix: "Excl. vat",
    url: "/stocks/vehicle/details/318200/MAGYARSR34Ibex-GardnerDenver",
    images: [
      {
        id: 0,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 1,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
      {
        id: 2,
        source:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        original:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        thumbnail:
          "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
      },
    ],
  },
];

export const defaultImages = [
  {
    index: 0,
    original: image1,
  },
  {
    index: 1,
    original: image2,
  },
  {
    index: 2,
    original: image3,
  },
  {
    index: 3,
    original: image4,
  },
];

export const materialTypes = [
  { index: 0, value: "", label: "Select an option...", disabled: true },
  {
    index: 1,
    label: "Contruction Materials",
    value: "construction materials",
    disabled: false,
  },
  { index: 2, label: "Raw Foods", value: "raw foods", disabled: false },
  {
    index: 3,
    label: "Packaged Foods",
    value: "packaged foods",
    disabled: false,
  },
];

export const blockCourtOptions = [
  { value: "Block-A", label: "Block-A" },
  { value: "Block-B", label: "Block-B" },
  { value: "Block-C", label: "Block-C" },
  { value: "Addis Ababa Court", label: "Addis Ababa Court" },
  { value: "Dar es Salaam Court", label: "Dar es Salaam Court" },
  { value: "Kampala Court", label: "Kampala Court" },
  { value: "Nairobi Court", label: "Nairobi Court" },
];

export const specifications = [
  {
    index: headers.Specification.subList.length + 1,
    item: "Select specification...",
    value: "",
    disable: true,
  },
  ...headers.Specification.subList,
];

export const configurations = [
  {
    index: headers.Configuration.subList.length + 1,
    item: "Select chasis configuration...",
    value: "",
    disable: true,
  },
  ...headers.Configuration.subList,
];

export const suspensionType = [
  {
    index: 0,
    item: "Select suspension type...",
    value: "",
    disable: true,
  },
  {
    index: 1,
    item: "Full air suspension",
    value: "full-air-suspension",
  },
  {
    index: 2,
    item: "Air suspension",
    value: "air-suspension",
  },
  {
    index: 3,
    item: "Hydraulic suspension",
    value: "hydraulic-suspension",
  },
  {
    index: 4,
    item: "Spring suspension",
    value: "spring-suspension",
  },
];

export const brand = [
  {
    index: headers.Brand.subList.length + 1,
    item: "Select brand...",
    value: "",
    disable: true,
  },
  ...headers.Brand.subList,
];

export const emissionStandard = [
  {
    index: 0,
    item: "Select emission standard...",
    value: "",
    disable: true,
  },
  {
    index: 1,
    item: "1",
    value: "1",
  },
  {
    index: 2,
    item: "2",
    value: "2",
  },
  {
    index: 3,
    item: "3",
    value: "3",
  },
  {
    index: 4,
    item: "4",
    value: "4",
  },
  {
    index: 5,
    item: "5",
    value: "5",
  },
  {
    index: 6,
    item: "6",
    value: "6",
  },
];
