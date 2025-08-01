import logo from "../assets/logo.png";
import { useNavigate } from "react-router";

const Logo = ({ width,  center = "items-center"}) => {
 const navigate = useNavigate();
 const validWidth = width;

 return (
  <div className={`flex flex-col ${center}`}>
   <img
    src={logo}
    alt="Trucks4Rental Logo"
    className={`object-cover w-${validWidth} md:w-${validWidth} h-auto`}
    width={validWidth}
    onClick={() => {
     navigate("/");
    }}
    onKeyDown={(e) => {
     if (e.key === "Enter" || e.key === " ") {
      navigate("/");
     }
    }}
   />
  </div>
 );
};

export default Logo;
