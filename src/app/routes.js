import ProductDetails from "../landingPage/pages/ProductDetails";
import Home from "../landingPage/pages/Home";
import Services from "../landingPage/pages/Services";


export const routes = [
  { path: "/", component: Home },
  { path: "/product-details", component: ProductDetails},
  { path: "/services", component: Services}
];