import { Outlet } from "react-router-dom"
import NavbarWithMegaMenu from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";

function LandingPage() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage
