import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardStuff from "../card/Card-Stuff";
const SlickStuff = () => {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 1,
 };

  return (
    <div>
      <Slider {...settings}>
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
        <CardStuff />
      </Slider>
    </div>
  );
};

export default SlickStuff;
