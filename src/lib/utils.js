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
        password: yup.string().required("EmPassword is required"),
    })
    .required();

export const resetSchema = yup
    .object({
        email: yup.string().required("Email is required"),
    })
    .required();

export const requestSchema = yup
    .object({
        firstName: yup
            .string()
            .required("First name is required."),

        lastName: yup
            .string()
            .required("Last name is required."),

        email: yup
            .string()
            .email()
            .required("Email is required.")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is invalid."),
        phoneNumber: yup
            .string()
            .required("Phone number is required.")
            .matches(/^(?:\+?\d{7,15}|0\d{9})$/, "Phone number is invalid"),
        companyName: yup
            .string()
            .required("Company name is required.")
            .matches(/^[A-Za-z]+(?:\s[A-Za-z]{3,}){1,2}$/, "Name is invalid."),
        contactPhone: yup.bool().default(false),
        contactEmail: yup.bool().default(false),
        contactWhatsapp: yup.bool().default(false),
    })
    .required();

export const defaultPlaceholder = "m@example.com";

export const siteName = "Trucks4Rental";
export const domain = "Trucks4Rental.com";

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

        if (Object.prototype.hasOwnProperty.call(headersData, categoryKey) && headersData[categoryKey].subList) {
            const subList = headersData[categoryKey].subList;

            // Iterate through each item in the subList using for...of
            for (const item of subList) {
                // Check if the item's searchParam matches any of the active search parameters
                if (activeSearchParams.includes(item.searchParam)) {
                    displayNames.push({ key: item.displayName, value: item.searchParam });
                    urlNames.push({ key: item.searchParam, value: "true", displayName: item.displayName });
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
    { id: 4, name: "Tipper", file: tipper, padding_y: 5, route: "/stocks?kind-tipper=true" },
    { id: 2, name: "Semi Trailer", file: semi_trailer, padding_y: 5, route: "/stocks?kind-semitrailer=true" },
    { id: 3, name: "Truck", file: truck, padding_y: 5, route: "/stocks?kind-truck=true" },
    { id: 5, name: "Trailer", file: trailer, padding_y: 5, route: "/stocks?kind-trailer=true" },
    { id: 1, name: "Tractor", file: tractor_unit, padding_y: 1, route: "/stocks?kind-tractorunit=true" },
];

export const headers = {
    Promotions: {
        name: "Promotions",
        key: "Promotions",
        subList: [
            {
                item: "New In Stock",
                value: 30,
                index: 0,
                searchParam: "promotions-newinstock", // Index removed from searchParam
                displayName: "Promotions: New In Stock",
            },
            {
                item: "Reduced In Price",
                value: null,
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
                value: null,
                index: 0,
                searchParam: "kleynselection-yes", // Index removed from searchParam
                displayName: "Kleyn Selection: Yes",
            },
            {
                item: "No",
                value: null,
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
                item: "Curtainsider",
                value: 106,
                index: 0,
                searchParam: "specification-curtainsider", // Index removed from searchParam
                displayName: "Specification: Curtainsider",
            },
            {
                item: "Closed Box",
                value: 103,
                index: 1,
                searchParam: "specification-closedbox", // Index removed from searchParam
                displayName: "Specification: Closed Box",
            },
            {
                item: "Frigo",
                value: 99,
                index: 2,
                searchParam: "specification-frigo", // Index removed from searchParam
                displayName: "Specification: Frigo",
            },
            {
                item: "Chassis Cabin",
                value: 29,
                index: 3,
                searchParam: "specification-chassiscabin", // Index removed from searchParam
                displayName: "Specification: Chassis Cabin",
            },
            {
                item: "Bdf System",
                value: 23,
                index: 4,
                searchParam: "specification-bdfsystem", // Index removed from searchParam
                displayName: "Specification: Bdf System",
            },
            {
                item: "Container Transport",
                value: 21,
                index: 5,
                searchParam: "specification-containertransport", // Index removed from searchParam
                displayName: "Specification: Container Transport",
            },
            {
                item: "Hooklift",
                value: 18,
                index: 6,
                searchParam: "specification-hooklift", // Index removed from searchParam
                displayName: "Specification: Hooklift",
            },
            {
                item: "Open With Sideboards",
                value: 16,
                index: 7,
                searchParam: "specification-openwithsideboards", // Index removed from searchParam
                displayName: "Specification: Open With Sideboards",
            },
            {
                item: "Tipper",
                value: 14,
                index: 8,
                searchParam: "specification-tipper", // Index removed from searchParam
                displayName: "Specification: Tipper",
            },
            {
                item: "Car Transport",
                value: 11,
                index: 9,
                searchParam: "specification-cartransport", // Index removed from searchParam
                displayName: "Specification: Car Transport",
            },
            {
                item: "Platform",
                value: 10,
                index: 10,
                searchParam: "specification-platform", // Index removed from searchParam
                displayName: "Specification: Platform",
            },
            {
                item: "Tank",
                value: 7,
                index: 11,
                searchParam: "specification-tank", // Index removed from searchParam
                displayName: "Specification: Tank",
            },
            {
                item: "Lowloader",
                value: 6,
                index: 12,
                searchParam: "specification-lowloader", // Index removed from searchParam
                displayName: "Specification: Lowloader",
            },
            {
                item: "Cable System",
                value: 4,
                index: 13,
                searchParam: "cable-system", // Original searchParam without index
                displayName: "Specification: Cable System",
            },
            {
                item: "Moving Floor",
                value: 4,
                index: 14,
                searchParam: "moving-floor", // Original searchParam without index
                displayName: "Specification: Moving Floor",
            },
            {
                item: "Silo",
                value: 3,
                index: 15,
                searchParam: "silo", // Original searchParam without index
                displayName: "Specification: Silo",
            },
            {
                item: "Tent",
                value: 3,
                index: 16,
                searchParam: "tent", // Original searchParam without index
                displayName: "Specification: Tent",
            },
            {
                item: "Garbage Truck",
                value: 1,
                index: 17,
                searchParam: "garbage-truck", // Original searchParam without index
                displayName: "Specification: Garbage Truck",
            },
            {
                item: "Gully Cleaner Truck",
                value: 1,
                index: 18,
                searchParam: "gully-cleaner-truck", // Original searchParam without index
                displayName: "Specification: Gully Cleaner Truck",
            },
            {
                item: "Road Sweeper",
                value: 1,
                index: 19,
                searchParam: "road-sweeper", // Original searchParam without index
                displayName: "Specification: Road Sweeper",
            },
            {
                item: "Skip Loader",
                value: 1,
                index: 20,
                searchParam: "skip-loader", // Original searchParam without index
                displayName: "Specification: Skip Loader",
            },
            {
                item: "Special",
                value: 1,
                index: 21,
                searchParam: "special", // Original searchParam without index
                displayName: "Specification: Special",
            },
            {
                item: "Closed Van",
                value: null,
                index: 22,
                searchParam: "closed-van", // Original searchParam without index
                displayName: "Specification: Closed Van",
            },
            {
                item: "Compact Panel Van",
                value: null,
                index: 23,
                searchParam: "compact-panel-van", // Original searchParam without index
                displayName: "Specification: Compact Panel Van",
            },
            {
                item: "Passenger Transport",
                value: null,
                index: 24,
                searchParam: "passenger-transport", // Original searchParam without index
                displayName: "Specification: Passenger Transport",
            },
            {
                item: "Pickup",
                value: null,
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
                value: 445,
                index: 0,
                searchParam: "configuration-4x2", // Index removed from searchParam
                displayName: "Configuration: 4X2",
            },
            {
                item: "6X2",
                value: 129,
                index: 1,
                searchParam: "configuration-6x2", // Index removed from searchParam
                displayName: "Configuration: 6X2",
            },
            {
                item: "6X4",
                value: 25,
                index: 2,
                searchParam: "configuration-6x4", // Index removed from searchParam
                displayName: "Configuration: 6X4",
            },
            {
                item: "8X4",
                value: 17,
                index: 3,
                searchParam: "configuration-8x4", // Index removed from searchParam
                displayName: "Configuration: 8X4",
            },
            {
                item: "8X2",
                value: 7,
                index: 4,
                searchParam: "configuration-8x2", // Index removed from searchParam
                displayName: "Configuration: 8X2",
            },
            {
                item: "4X4",
                value: 3,
                index: 5,
                searchParam: "configuration-4x4", // Index removed from searchParam
                displayName: "Configuration: 4X4",
            },
            {
                item: "10X4",
                value: 1,
                index: 6,
                searchParam: "configuration-10x4", // Index removed from searchParam
                displayName: "Configuration: 10X4",
            },
            {
                item: "6X6",
                value: 1,
                index: 7,
                searchParam: "configuration-6x6", // Index removed from searchParam
                displayName: "Configuration: 6X6",
            },
        ],
    },
    EmissionCode: {
        name: "Emission code",
        key: "EmissionCode",
        subList: [
            {
                item: "6",
                value: 537,
                index: 0,
                searchParam: "emissioncode-6", // Index removed from searchParam
                displayName: "Emission code: 6",
            },
            {
                item: "5",
                value: 47,
                index: 1,
                searchParam: "emissioncode-5", // Index removed from searchParam
                displayName: "Emission code: 5",
            },
            {
                item: "4",
                value: 8,
                index: 2,
                searchParam: "emissioncode-4", // Index removed from searchParam
                displayName: "Emission code: 4",
            },
            {
                item: "3",
                value: 19,
                index: 3,
                searchParam: "emissioncode-3", // Index removed from searchParam
                displayName: "Emission code: 3",
            },
            {
                item: "2",
                value: 3,
                index: 4,
                searchParam: "emissioncode-2", // Index removed from searchParam
                displayName: "Emission code: 2",
            },
            {
                item: "1",
                value: 2,
                index: 5,
                searchParam: "emissioncode-1", // Index removed from searchParam
                displayName: "Emission code: 1",
            },
            {
                item: "0",
                value: 230,
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
                value: 2,
                index: 0,
                searchParam: "fueltype-natural", // Index removed from searchParam
                displayName: "Fuel type: Natural",
            },
            {
                item: "Gas",
                value: 2,
                index: 1,
                searchParam: "fueltype-gas", // Index removed from searchParam
                displayName: "Fuel type: Gas",
            },
            {
                item: "Electrical",
                value: 2,
                index: 2,
                searchParam: "fueltype-electrical", // Index removed from searchParam
                displayName: "Fuel type: Electrical",
            },
            {
                item: "Diesel",
                value: 211,
                index: 3,
                searchParam: "fueltype-diesel", // Index removed from searchParam
                displayName: "Fuel type: Diesel",
            },
            {
                item: "Petrol",
                value: null,
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
                value: 136,
                index: 0,
                searchParam: "brand-scania", // Index removed from searchParam
                displayName: "Brand: SCANIA",
            },
            {
                item: "M.A.N.",
                value: 119,
                index: 1,
                searchParam: "brand-man", // Index removed from searchParam
                displayName: "Brand: M.A.N.",
            },
            {
                item: "VOLVO",
                value: 118,
                index: 2,
                searchParam: "brand-volvo", // Index removed from searchParam
                displayName: "Brand: VOLVO",
            },
            {
                item: "DAF",
                value: 107,
                index: 3,
                searchParam: "brand-daf", // Index removed from searchParam
                displayName: "Brand: DAF",
            },
            {
                item: "MERCEDES-BENZ",
                value: 79,
                index: 4,
                searchParam: "brand-mercedes-benz", // Index removed from searchParam
                displayName: "Brand: MERCEDES-BENZ",
            },
            {
                item: "KRONE",
                value: 48,
                index: 5,
                searchParam: "brand-krone", // Index removed from searchParam
                displayName: "Brand: KRONE",
            },
            {
                item: "SCHMITZ",
                value: 47,
                index: 6,
                searchParam: "brand-schmitz", // Index removed from searchParam
                displayName: "Brand: SCHMITZ",
            },
            {
                item: "IVECO",
                value: 37,
                index: 7,
                searchParam: "brand-iveco", // Index removed from searchParam
                displayName: "Brand: IVECO",
            },
            {
                item: "RENAULT",
                value: 34,
                index: 8,
                searchParam: "brand-renault", // Index removed from searchParam
                displayName: "Brand: RENAULT",
            },
            {
                item: "VAN HOOL",
                value: 22,
                index: 9,
                searchParam: "brand-vanhool", // Index removed from searchParam
                displayName: "Brand: VAN HOOL",
            },
            {
                item: "KOGEL",
                value: 12,
                index: 10,
                searchParam: "brand-kogel", // Index removed from searchParam
                displayName: "Brand: KOGEL",
            },
            {
                item: "KELBERG",
                value: 8,
                index: 11,
                searchParam: "brand-kelberg", // Index removed from searchParam
                displayName: "Brand: KELBERG",
            },
            {
                item: "FUSO",
                value: 6,
                index: 12,
                searchParam: "brand-fuso", // Index removed from searchParam
                displayName: "Brand: FUSO",
            },
            {
                item: "GROENEWEGEN",
                value: 5,
                index: 13,
                searchParam: "brand-groenewegen", // Index removed from searchParam
                displayName: "Brand: GROENEWEGEN",
            },
            {
                item: "LAMBERET",
                value: 5,
                index: 14,
                searchParam: "brand-lamberet", // Index removed from searchParam
                displayName: "Brand: LAMBERET",
            },
            {
                item: "CHEREAU",
                value: 4,
                index: 15,
                searchParam: "brand-chereau", // Index removed from searchParam
                displayName: "Brand: CHEREAU",
            },
            {
                item: "NOOTEBOOM",
                value: 4,
                index: 16,
                searchParam: "brand-nooteboom", // Index removed from searchParam
                displayName: "Brand: NOOTEBOOM",
            },
            {
                item: "RENDERS",
                value: 4,
                index: 17,
                searchParam: "brand-renders", // Index removed from searchParam
                displayName: "Brand: RENDERS",
            },
            {
                item: "HOFFMANN",
                value: 3,
                index: 18,
                searchParam: "brand-hoffmann", // Index removed from searchParam
                displayName: "Brand: HOFFMANN",
            },
            {
                item: "PACTON",
                value: 3,
                index: 19,
                searchParam: "brand-pacton", // Index removed from searchParam
                displayName: "Brand: PACTON",
            },
            {
                item: "STAS",
                value: 3,
                index: 20,
                searchParam: "brand-stas", // Index removed from searchParam
                displayName: "Brand: STAS",
            },
            {
                item: "VAN ECK",
                value: 3,
                index: 21,
                searchParam: "brand-vaneck", // Index removed from searchParam
                displayName: "Brand: VAN ECK",
            },
            {
                item: "ASCA",
                value: 2,
                index: 22,
                searchParam: "brand-asca", // Index removed from searchParam
                displayName: "Brand: ASCA",
            },
            {
                item: "FLIEGL",
                value: 2,
                index: 23,
                searchParam: "brand-fliegl", // Index removed from searchParam
                displayName: "Brand: FLIEGL",
            },
            {
                item: "FLOOR",
                value: 2,
                index: 24,
                searchParam: "brand-floor", // Index removed from searchParam
                displayName: "Brand: FLOOR",
            },
            {
                item: "KROMHOUT",
                value: 2,
                index: 25,
                searchParam: "brand-kromhout", // Index removed from searchParam
                displayName: "Brand: KROMHOUT",
            },
            {
                item: "LEGRAS",
                value: 2,
                index: 26,
                searchParam: "brand-legras", // Index removed from searchParam
                displayName: "Brand: LEGRAS",
            },
            {
                item: "NOPA",
                value: 2,
                index: 27,
                searchParam: "brand-nopa", // Index removed from searchParam
                displayName: "Brand: NOPA",
            },
            {
                item: "SCHWARZMUELLER",
                value: 2,
                index: 28,
                searchParam: "brand-schwarzmueller", // Index removed from searchParam
                displayName: "Brand: SCHWARZMUELLER",
            },
            {
                item: "SPITZER",
                value: 2,
                index: 29,
                searchParam: "brand-spitzer", // Index removed from searchParam
                displayName: "Brand: SPITZER",
            },
            {
                item: "ACKERMANN FRUEHAUF",
                value: 1,
                index: 30,
                searchParam: "brand-ackermannfruehauf", // Index removed from searchParam
                displayName: "Brand: ACKERMANN FRUEHAUF",
            },
            {
                item: "BENALU",
                value: 1,
                index: 31,
                searchParam: "brand-benalu", // Index removed from searchParam
                displayName: "Brand: BENALU",
            },
            {
                item: "BURG",
                value: 1,
                index: 32,
                searchParam: "brand-burg", // Index removed from searchParam
                displayName: "Brand: BURG",
            },
            {
                item: "ESTERER",
                value: 1,
                index: 33,
                searchParam: "brand-esterer", // Index removed from searchParam
                displayName: "Brand: ESTERER",
            },
            {
                item: "FAG",
                value: 1,
                index: 34,
                searchParam: "brand-fag", // Index removed from searchParam
                displayName: "Brand: FAG",
            },
            {
                item: "FAYMONVILLE",
                value: 1,
                index: 35,
                searchParam: "brand-faymonville", // Index removed from searchParam
                displayName: "Brand: FAYMONVILLE",
            },
            {
                item: "FELDBINDER",
                value: 1,
                index: 36,
                searchParam: "brand-feldbinder", // Index removed from searchParam
                displayName: "Brand: FELDBINDER",
            },
            {
                item: "FRUEHAUF",
                value: 1,
                index: 37,
                searchParam: "brand-fruehauf", // Index removed from searchParam
                displayName: "Brand: FRUEHAUF",
            },
            {
                item: "GS",
                value: 1,
                index: 38,
                searchParam: "brand-gs", // Index removed from searchParam
                displayName: "Brand: GS",
            },
            {
                item: "HAMMAR",
                value: 1,
                index: 39,
                searchParam: "brand-hammar", // Index removed from searchParam
                displayName: "Brand: HAMMAR",
            },
            {
                item: "HTF",
                value: 1,
                index: 40,
                searchParam: "brand-htf", // Index removed from searchParam
                displayName: "Brand: HTF",
            },
            {
                item: "JUMBO",
                value: 1,
                index: 41,
                searchParam: "brand-jumbo", // Index removed from searchParam
                displayName: "Brand: JUMBO",
            },
            {
                item: "KASSBOHRER",
                value: 1,
                index: 42,
                searchParam: "brand-kassbohrer", // Index removed from searchParam
                displayName: "Brand: KASSBOHRER",
            },
            {
                item: "KLEYN TRAILERS",
                value: 1,
                index: 43,
                searchParam: "brand-kleyntrailers", // Index removed from searchParam
                displayName: "Brand: KLEYN TRAILERS",
            },
            {
                item: "L.A.G.",
                value: 1,
                index: 44,
                searchParam: "brand-lag", // Index removed from searchParam
                displayName: "Brand: L.A.G.",
            },
            {
                item: "LAMBRECHT",
                value: 1,
                index: 45,
                searchParam: "brand-lambrecht", // Index removed from searchParam
                displayName: "Brand: LAMBRECHT",
            },
            {
                item: "LAMBRECHT",
                value: 1,
                index: 46,
                searchParam: "brand-lambrecht", // Index removed from searchParam
                displayName: "Brand: LAMBRECHT",
            },
            {
                item: "LANGENDORF",
                value: 1,
                index: 47,
                searchParam: "brand-langendorf", // Index removed from searchParam
                displayName: "Brand: LANGENDORF",
            },
            {
                item: "MAGYAR",
                value: 1,
                index: 48,
                searchParam: "brand-magyar", // Index removed from searchParam
                displayName: "Brand: MAGYAR",
            },
            {
                item: "MAISONNEUVE",
                value: 1,
                index: 49,
                searchParam: "brand-maisonneuve", // Index removed from searchParam
                displayName: "Brand: MAISONNEUVE",
            },
            {
                item: "MEIERLING",
                value: 1,
                index: 50,
                searchParam: "brand-meierling", // Index removed from searchParam
                displayName: "Brand: MEIERLING",
            },
            {
                item: "MEILLER",
                value: 1,
                index: 51,
                searchParam: "brand-meiller", // Index removed from searchParam
                displayName: "Brand: MEILLER",
            },
            {
                item: "OMAR",
                value: 1,
                index: 52,
                searchParam: "brand-omar", // Index removed from searchParam
                displayName: "Brand: OMAR",
            },
            {
                item: "POLKON",
                value: 1,
                index: 53,
                searchParam: "brand-polkon", // Index removed from searchParam
                displayName: "Brand: POLKON",
            },
            {
                item: "REGIS",
                value: 1,
                index: 54,
                searchParam: "brand-regis", // Index removed from searchParam
                displayName: "Brand: REGIS",
            },
            {
                item: "ROFA",
                value: 1,
                index: 55,
                searchParam: "brand-rofa", // Index removed from searchParam
                displayName: "Brand: ROFA",
            },
            {
                item: "SOR IBERICA",
                value: 1,
                index: 56,
                searchParam: "brand-soriberica", // Index removed from searchParam
                displayName: "Brand: SOR IBERICA",
            },
            {
                item: "SYSTEM TRAILERS",
                value: 1,
                index: 57,
                searchParam: "brand-systemtrailers", // Index removed from searchParam
                displayName: "Brand: SYSTEM TRAILERS",
            },
            {
                item: "TRACON",
                value: 1,
                index: 58,
                searchParam: "brand-tracon", // Index removed from searchParam
                displayName: "Brand: TRACON",
            },
            {
                item: "VOGELZANG",
                value: 1,
                index: 59,
                searchParam: "brand-vogelzang", // Index removed from searchParam
                displayName: "Brand: VOGELZANG",
            },
            {
                item: "VS MONT SRO",
                value: 1,
                index: 60,
                searchParam: "brand-vsmontsro", // Index removed from searchParam
                displayName: "Brand: VS MONT SRO",
            },
            {
                item: "WIESE",
                value: 1,
                index: 61,
                searchParam: "brand-wiese", // Index removed from searchParam
                displayName: "Brand: WIESE",
            },
            {
                item: "BE-COMBI",
                value: null,
                index: 62,
                searchParam: "brand-be-combi", // Index removed from searchParam
                displayName: "Brand: BE-COMBI",
            },
            {
                item: "CITROEN",
                value: null,
                index: 63,
                searchParam: "brand-citroen", // Index removed from searchParam
                displayName: "Brand: CITROEN",
            },
            {
                item: "FIAT",
                value: null,
                index: 64,
                searchParam: "brand-fiat", // Index removed from searchParam
                displayName: "Brand: FIAT",
            },
            {
                item: "FORD",
                value: null,
                index: 65,
                searchParam: "brand-ford", // Index removed from searchParam
                displayName: "Brand: FORD",
            },
            {
                item: "ISUZU",
                value: null,
                index: 66,
                searchParam: "brand-isuzu", // Index removed from searchParam
                displayName: "Brand: ISUZU",
            },
            {
                item: "LANDROVER",
                value: null,
                index: 67,
                searchParam: "brand-landrover", // Index removed from searchParam
                displayName: "Brand: LANDROVER",
            },
            {
                item: "MITSUBISHI",
                value: null,
                index: 68,
                searchParam: "brand-mitsubishi", // Index removed from searchParam
                displayName: "Brand: MITSUBISHI",
            },
            {
                item: "NISSAN",
                value: null,
                index: 69,
                searchParam: "brand-nissan", // Index removed from searchParam
                displayName: "Brand: NISSAN",
            },
            {
                item: "OPEL",
                value: null,
                index: 70,
                searchParam: "brand-opel", // Index removed from searchParam
                displayName: "Brand: OPEL",
            },
            {
                item: "PEUGEOT",
                value: null,
                index: 71,
                searchParam: "brand-peugeot", // Index removed from searchParam
                displayName: "Brand: PEUGEOT",
            },
            {
                item: "TOYOTA",
                value: null,
                index: 72,
                searchParam: "brand-toyota", // Index removed from searchParam
                displayName: "Brand: TOYOTA",
            },
            {
                item: "VELDHUIZEN",
                value: null,
                index: 73,
                searchParam: "brand-veldhuisen", // Index removed from searchParam
                displayName: "Brand: VELDHUIZEN",
            },
            {
                item: "VOLKSWAGEN",
                value: null,
                index: 74,
                searchParam: "brand-volkswagen", // Index removed from searchParam
                displayName: "Brand: VOLKSWAGEN",
            },
        ],
    },
    Range: {
        name: "Range",
        key: "Range",
        subList: [
            {
                item: "R",
                value: 86,
                index: 0,
                searchParam: "range-r", // Index removed from searchParam
                displayName: "Range: R",
            },
            {
                item: "Fh",
                value: 82,
                index: 1,
                searchParam: "range-fh", // Index removed from searchParam
                displayName: "Range: Fh",
            },
            {
                item: "Tgx",
                value: 75,
                index: 2,
                searchParam: "range-tgx", // Index removed from searchParam
                displayName: "Range: Tgx",
            },
            {
                item: "Xf",
                value: 60,
                index: 3,
                searchParam: "range-xf", // Index removed from searchParam
                displayName: "Range: Xf",
            },
            {
                item: "Actros",
                value: 38,
                index: 4,
                searchParam: "range-actros", // Index removed from searchParam
                displayName: "Range: Actros",
            },
            {
                item: "Atego",
                value: 27,
                index: 5,
                searchParam: "range-atego", // Index removed from searchParam
                displayName: "Range: Atego",
            },
            {
                item: "Lf",
                value: 27,
                index: 6,
                searchParam: "range-lf", // Index removed from searchParam
                displayName: "Range: Lf",
            },
            {
                item: "Tgl",
                value: 20,
                index: 7,
                searchParam: "range-tgl", // Index removed from searchParam
                displayName: "Range: Tgl",
            },
            {
                item: "S",
                value: 19,
                index: 8,
                searchParam: "range-s", // Index removed from searchParam
                displayName: "Range: S",
            },
            {
                item: "P",
                value: 17,
                index: 9,
                searchParam: "range-p", // Index removed from searchParam
                displayName: "Range: P",
            },
            {
                item: "Eurocargo",
                value: 16,
                index: 10,
                searchParam: "range-eurocargo", // Index removed from searchParam
                displayName: "Range: Eurocargo",
            },
            {
                item: "Fm",
                value: 16,
                index: 11,
                searchParam: "range-fm", // Index removed from searchParam
                displayName: "Range: Fm",
            },
            {
                item: "D Serie",
                value: 14,
                index: 12,
                searchParam: "range-dserie", // Index removed from searchParam
                displayName: "Range: D Serie",
            },
            {
                item: "G",
                value: 14,
                index: 13,
                searchParam: "range-g", // Index removed from searchParam
                displayName: "Range: G",
            },
            {
                item: "Tgs",
                value: 13,
                index: 14,
                searchParam: "range-tgs", // Index removed from searchParam
                displayName: "Range: Tgs",
            },
            {
                item: "Cf",
                value: 12,
                index: 15,
                searchParam: "range-cf", // Index removed from searchParam
                displayName: "Range: Cf",
            },
            {
                item: "S-Way",
                value: 12,
                index: 16,
                searchParam: "range-s-way", // Index removed from searchParam
                displayName: "Range: S-Way",
            },
            {
                item: "FL",
                value: 11,
                index: 17,
                searchParam: "range-fl", // Index removed from searchParam
                displayName: "Range: FL",
            },
            {
                item: "T Serie",
                value: 11,
                index: 18,
                searchParam: "range-tserie", // Index removed from searchParam
                displayName: "Range: T Serie",
            },
            {
                item: "Stralis",
                value: 8,
                index: 19,
                searchParam: "range-stralis", // Index removed from searchParam
                displayName: "Range: Stralis",
            },
            {
                item: "Antos",
                value: 7,
                index: 20,
                searchParam: "range-antos", // Index removed from searchParam
                displayName: "Range: Antos",
            },
            {
                item: "Tgm",
                value: 7,
                index: 21,
                searchParam: "range-tgm", // Index removed from searchParam
                displayName: "Range: Tgm",
            },
            {
                item: "Arocs",
                value: 5,
                index: 22,
                searchParam: "range-arocs", // Index removed from searchParam
                displayName: "Range: Arocs",
            },
            {
                item: "C Serie",
                value: 4,
                index: 23,
                searchParam: "range-cserie", // Index removed from searchParam
                displayName: "Range: C Serie",
            },
            {
                item: "65",
                value: 2,
                index: 24,
                searchParam: "range-65", // Index removed from searchParam
                displayName: "Range: 65",
            },
            {
                item: "Premium",
                value: 2,
                index: 25,
                searchParam: "range-premium", // Index removed from searchParam
                displayName: "Range: Premium",
            },
            {
                item: "Xb",
                value: 2,
                index: 26,
                searchParam: "range-xb", // Index removed from searchParam
                displayName: "Range: Xb",
            },
            {
                item: "Xg",
                value: 2,
                index: 27,
                searchParam: "range-xg", // Index removed from searchParam
                displayName: "Range: Xg",
            },
            {
                item: "800",
                value: 1,
                index: 28,
                searchParam: "range-800", // Index removed from searchParam
                displayName: "Range: 800",
            },
            {
                item: "Axor",
                value: 1,
                index: 29,
                searchParam: "range-axor", // Index removed from searchParam
                displayName: "Range: Axor",
            },
            {
                item: "B",
                value: 1,
                index: 30,
                searchParam: "range-b", // Index removed from searchParam
                displayName: "Range: B",
            },
            {
                item: "F2000",
                value: 1,
                index: 31,
                searchParam: "range-f2000", // Index removed from searchParam
                displayName: "Range: F2000",
            },
            {
                item: "F90",
                value: 1,
                index: 32,
                searchParam: "range-f90", // Index removed from searchParam
                displayName: "Range: F90",
            },
            {
                item: "Food/ Milk/ Water",
                value: 1,
                index: 33,
                searchParam: "range-foodmilkwater", // Index removed from searchParam
                displayName: "Range: Food/ Milk/ Water",
            },
            {
                item: "Food",
                value: 1,
                index: 34,
                searchParam: "range-food", // Index removed from searchParam
                displayName: "Range: Food",
            },
            {
                item: "High T",
                value: 1,
                index: 35,
                searchParam: "range-hight", // Index removed from searchParam
                displayName: "Range: High T",
            },
            {
                item: "Midlum",
                value: 1,
                index: 36,
                searchParam: "range-midlum", // Index removed from searchParam
                displayName: "Range: Midlum",
            },
            {
                item: "Tga",
                value: 1,
                index: 37,
                searchParam: "range-tga", // Index removed from searchParam
                displayName: "Range: Tga",
            },
            {
                item: "Trakker",
                value: 1,
                index: 38,
                searchParam: "range-trakker", // Index removed from searchParam
                displayName: "Range: Trakker",
            },
            {
                item: "200",
                value: null,
                index: 39,
                searchParam: "range-200", // Index removed from searchParam
                displayName: "Range: 200",
            },
            {
                item: "Amarok",
                value: null,
                index: 40,
                searchParam: "range-amarok", // Index removed from searchParam
                displayName: "Range: Amarok",
            },
            {
                item: "Berlingo",
                value: null,
                index: 41,
                searchParam: "range-berlingo", // Index removed from searchParam
                displayName: "Range: Berlingo",
            },
            {
                item: "Boxer",
                value: null,
                index: 42,
                searchParam: "range-boxer", // Index removed from searchParam
                displayName: "Range: Boxer",
            },
            {
                item: "Cabstar",
                value: null,
                index: 43,
                searchParam: "range-cabstar", // Index removed from searchParam
                displayName: "Range: Cabstar",
            },
            {
                item: "Caddy",
                value: null,
                index: 44,
                searchParam: "range-caddy", // Index removed from searchParam
                displayName: "Range: Caddy",
            },
            {
                item: "Citan",
                value: null,
                index: 45,
                searchParam: "range-citan", // Index removed from searchParam
                displayName: "Range: Citan",
            },
            {
                item: "Combo",
                value: null,
                index: 46,
                searchParam: "range-combo", // Index removed from searchParam
                displayName: "Range: Combo",
            },
            {
                item: "Crafter",
                value: null,
                index: 47,
                searchParam: "range-crafter", // Index removed from searchParam
                displayName: "Range: Crafter",
            },
            {
                item: "Daily",
                value: null,
                index: 48,
                searchParam: "range-daily", // Index removed from searchParam
                displayName: "Range: Daily",
            },
            {
                item: "Dmax",
                value: null,
                index: 49,
                searchParam: "range-dmax", // Index removed from searchParam
                displayName: "Range: Dmax",
            },
            {
                item: "Dobló",
                value: null,
                index: 50,
                searchParam: "range-doblo", // Index removed from searchParam
                displayName: "Range: Dobló",
            },
            {
                item: "Ducato",
                value: null,
                index: 51,
                searchParam: "range-ducato", // Index removed from searchParam
                displayName: "Range: Ducato",
            },
            {
                item: "E-Transit",
                value: null,
                index: 52,
                searchParam: "range-e-transit", // Index removed from searchParam
                displayName: "Range: E-Transit",
            },
            {
                item: "Eqv",
                value: null,
                index: 53,
                searchParam: "range-eqv", // Index removed from searchParam
                displayName: "Range: Eqv",
            },
            {
                item: "Esprinter",
                value: null,
                index: 54,
                searchParam: "range-esprinter", // Index removed from searchParam
                displayName: "Range: Esprinter",
            },
            {
                item: "Evito",
                value: null,
                index: 55,
                searchParam: "range-evito", // Index removed from searchParam
                displayName: "Range: Evito",
            },
            {
                item: "Expert",
                value: null,
                index: 56,
                searchParam: "range-expert", // Index removed from searchParam
                displayName: "Range: Expert",
            },
            {
                item: "Jumper",
                value: null,
                index: 57,
                searchParam: "range-jumper", // Index removed from searchParam
                displayName: "Range: Jumper",
            },
            {
                item: "Jumpy",
                value: null,
                index: 58,
                searchParam: "range-jumpy", // Index removed from searchParam
                displayName: "Range: Jumpy",
            },
            {
                item: "Kangoo",
                value: null,
                index: 59,
                searchParam: "range-kangoo", // Index removed from searchParam
                displayName: "Range: Kangoo",
            },
            {
                item: "L",
                value: null,
                index: 60,
                searchParam: "range-l", // Index removed from searchParam
                displayName: "Range: L",
            },
            {
                item: "Master",
                value: null,
                index: 61,
                searchParam: "range-master", // Index removed from searchParam
                displayName: "Range: Master",
            },
            {
                item: "Movano",
                value: null,
                index: 62,
                searchParam: "range-movano", // Index removed from searchParam
                displayName: "Range: Movano",
            },
            {
                item: "Navara",
                value: null,
                index: 63,
                searchParam: "range-navara", // Index removed from searchParam
                displayName: "Range: Navara",
            },
            {
                item: "Nv",
                value: null,
                index: 64,
                searchParam: "range-nv", // Index removed from searchParam
                displayName: "Range: Nv",
            },
            {
                item: "Primastar",
                value: null,
                index: 65,
                searchParam: "range-primastar", // Index removed from searchParam
                displayName: "Range: Primastar",
            },
            {
                item: "Pro-Ace",
                value: null,
                index: 66,
                searchParam: "range-pro-ace", // Index removed from searchParam
                displayName: "Range: Pro-Ace",
            },
            {
                item: "Sprinter",
                value: null,
                index: 67,
                searchParam: "range-sprinter", // Index removed from searchParam
                displayName: "Range: Sprinter",
            },
            {
                item: "T",
                value: null,
                index: 68,
                searchParam: "range-t", // Index removed from searchParam
                displayName: "Range: T",
            },
            {
                item: "Tge",
                value: null,
                index: 69,
                searchParam: "range-tge", // Index removed from searchParam
                displayName: "Range: Tge",
            },
            {
                item: "Townstar",
                value: null,
                index: 70,
                searchParam: "range-townstar", // Index removed from searchParam
                displayName: "Range: Townstar",
            },
            {
                item: "Trafic",
                value: null,
                index: 71,
                searchParam: "range-trafic", // Index removed from searchParam
                displayName: "Range: Trafic",
            },
            {
                item: "Transit",
                value: null,
                index: 72,
                searchParam: "range-transit", // Index removed from searchParam
                displayName: "Range: Transit",
            },
            {
                item: "Transporter",
                value: null,
                index: 73,
                searchParam: "range-transporter", // Index removed from searchParam
                displayName: "Range: Transporter",
            },
            {
                item: "V-Klasse",
                value: null,
                index: 74,
                searchParam: "range-v-klasse", // Index removed from searchParam
                displayName: "Range: V-Klasse",
            },
            {
                item: "Vito",
                value: null,
                index: 75,
                searchParam: "range-vito", // Index removed from searchParam
                displayName: "Range: Vito",
            },
            {
                item: "Vivaro",
                value: null,
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
                value: null,
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
                value: null,
                index: 0,
                searchParam: "damaged-yes", // Index removed from searchParam
                displayName: "Damaged: Yes",
            },
            {
                item: "No",
                value: null,
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
                value: null,
                index: 0,
                searchParam: "dutchtrucks-yes", // Index removed from searchParam
                displayName: "Dutch trucks: Yes",
            },
            {
                item: "No",
                value: null,
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
        mileage: " 845,863 km",
        gearbox: "Automatic",
        price: "17,900",
        matriculation_year: "2016-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
        ],
    },
    {
        id: 1,
        new: true,
        name: "VOLVO FH 650 XL 6X2 ADR ALCOA'S",
        number: "318824",
        mileage: "907,215 km",
        gearbox: "Automatic",
        price: "27,950",
        matriculation_year: "2015-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "6x2",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
        ],
    },
    {
        id: 2,
        new: false,
        name: "MAGYAR SR 34 Ibex-Gardner Denver",
        number: "318200",
        mileage: "",
        gearbox: "",
        price: "25,900",
        matriculation_year: "1997-1",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "3Axles",
        suspension_type: "full air suspension",
        type: "semi_trailer",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
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
        matriculation_year: "2016-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
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
        matriculation_year: "2015-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "6x2",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318824/VOLVOFH650XL6X2ADRALCOAS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
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
        matriculation_year: "1997-1",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "3Axles",
        suspension_type: "full air suspension",
        type: "semi_trailer",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318200/MAGYARSR34Ibex-GardnerDenver",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
        ],
    },
    {
        id: 3,
        new: false,
        name: "MAGYAR SR 34",
        number: "318200",
        mileage: "",
        gearbox: "",
        price: "25,900",
        matriculation_year: "1997-1",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "configuration",
        number_of_axles: "3Axles",
        suspension_type: "full air suspension",
        type: "semi_trailer",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318200/MAGYARSR34",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1019/1000/600/",
                thumbnail: "https://picsum.photos/id/1019/250/150/",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hrv/600.jpg",
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/250/150/",
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
        matriculation_year: "2016-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318678/MERCEDES-BENZACTROS1845LS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318678/hlv/600.jpg",
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
        matriculation_year: "2015-6",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "6x2",
        number_of_axles: "",
        suspension_type: "",
        type: "tractor_unit",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318824/VOLVOFH650XL6X2ADRALCOAS",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318824/hlv/600.jpg",
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
        matriculation_year: "1997-1",
        currency: "Ghc",
        tax_inclusive: false,
        configuration: "",
        number_of_axles: "3Axles",
        suspension_type: "full air suspension",
        type: "semi_trailer",
        currencySuffix: "Excl. vat",
        url: "/stocks/vehicle/details/318200/MAGYARSR34Ibex-GardnerDenver",
        images: [
            {
                id: 0,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 1,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                originalClass: "featured-slide",
                thumbnailClass: "featured-thumb",
            },
            {
                id: 2,
                source: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                original: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
                thumbnail: "https://d2e5b8shawuel2.cloudfront.net/vehicle/318200/hlv/600.jpg",
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
