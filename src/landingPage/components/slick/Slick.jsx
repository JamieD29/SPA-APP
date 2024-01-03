import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardStuff from "../card/Card-Stuff";
const SlickStuff = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
