import { Outlet } from "react-router";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function Root() {
 return (
  <>
   <Header />
   <div className="bg-gray-100 p-4"  >
    <Outlet />
   </div>

   <Footer />
  </>
 );
}

export default Root;
