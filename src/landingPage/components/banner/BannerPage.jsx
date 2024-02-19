/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import productBanner from "../../../assets/banner/product-banner.jpg"
function BannerPage(props) {
  return (
    <div
      className="relative flex justify-center items-center w-full h-80 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(" + productBanner + ")" }}
    >
      <div className="absolute w-full h-full bg-black opacity-70"></div>

      <div className="relative">
        <Typography variant="h1" className="text-white ">
          {props.title}
        </Typography>
      </div>
    </div>
  );
}

export default BannerPage
