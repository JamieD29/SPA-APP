import { Outlet } from "react-router-dom"
import NavbarWithMegaMenu from "./components/navbar/NavBar";

function LandingPage() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Outlet />
      {/* Footer */}
    </div>
  );
}

export default LandingPage
