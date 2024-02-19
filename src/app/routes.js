import ProductDetails from "../landingPage/pages/ProductDetails";
import Home from "../landingPage/pages/Home";
import Product from "../landingPage/pages/Products";
import Services from "../landingPage/pages/Services";


export const routes = [
  { path: "/", component: Home },
  { path: "/product-details", component: ProductDetails},
  { path: "/products", component: Product },
  { path: "/services", component: Services}
];