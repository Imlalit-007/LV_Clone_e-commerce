import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { BtnToggleClickProvider } from "../context/BtnToggleClick/BtnToggleClick.jsx";
import { MenuProvider } from "../context/MenuContext/MenuContext.jsx";

function Layout() {
  console.log("layout rendered");
  return (
    <BtnToggleClickProvider>
      <div className='layout'>
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <Outlet />
        <Footer />
      </div>
    </BtnToggleClickProvider>
  );
}

export default Layout;
