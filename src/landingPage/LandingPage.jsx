import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"

function LandingPage() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      {/* Footer */}
    </div>
  )
}

export default LandingPage
