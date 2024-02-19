import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import { routes } from "./app/routes";
import Login from "./landingPage/pages/Login";
import SignUp from "./landingPage/pages/Signup";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<LandingPage />}>
            {routes.map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
