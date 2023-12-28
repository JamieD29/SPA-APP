import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import { routes } from "./app/routes";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
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
