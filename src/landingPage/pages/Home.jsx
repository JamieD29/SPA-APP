import SlickStuff from "../components/slick/Slick";
import Carousel_Sec from "../components/carousel/CarouselSec";
import messageTherapy from "../../assets/beautiful-hands-with-cream.jpg";
import sliderSecond from "../../assets/banner/slide-3.jpg";
import { Button, Typography } from "@material-tailwind/react";
import AppointmentForm from "../components/forms/appointmentForm/AppointmentForm";

function Home() {
  

  return (
    <>
      <Carousel_Sec />
      <section className="py-10 flex justify-center">
        <div className="container">
          <h1 className="py-12 text-center text-3xl font-bold uppercase">
            Best Seller
          </h1>
          <SlickStuff />
        </div>
      </section>
      <section className="bg-red-100 px-16">
        <h1 className="pt-12 text-center text-3xl font-bold uppercase">
          Body and Soul Together
        </h1>
        <div className="grid grid-cols-5 gap 4">
          <div className="col-span-2 p-10">
            <img src={messageTherapy} className="w-full rounded-md" alt="" />
          </div>
          <div className="col-span-3 flex items-center pl-4 pr-4">
            <div className="container">
              <h1 className="uppercase font-bold">Massage Therapy</h1>
              <p className="text-white font-normal my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                in. Id at voluptate quibusdam facere, blanditiis impedit
                incidunt optio molestias dignissimos totam, debitis iusto
                magnam, nam consectetur amet? Dolor atque laboriosam error
                corrupti. Exercitationem officiis cumque, et, inventore
                provident assumenda mollitia nemo labore itaque doloribus quasi
                recusandae sapiente soluta. Facilis!
              </p>
              <Button color="white">Read more</Button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-white px-16">
        <h1 className="pt-12 text-center text-3xl font-bold uppercase">
          Body and Soul Together
        </h1>
        <div className="grid grid-cols-5 gap 4">
          <div className="col-span-3 flex items-center pl-4 pr-4">
            <div className="container">
              <h1 className="uppercase font-bold">Massage Therapy</h1>
              <p className="text-black font-normal my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                in. Id at voluptate quibusdam facere, blanditiis impedit
                incidunt optio molestias dignissimos totam, debitis iusto
                magnam, nam consectetur amet? Dolor atque laboriosam error
                corrupti. Exercitationem officiis cumque, et, inventore
                provident assumenda mollitia nemo labore itaque doloribus quasi
                recusandae sapiente soluta. Facilis!
              </p>
              <Button color="pink">Read more</Button>
            </div>
          </div>
          <div className="col-span-2 p-10">
            <img src={messageTherapy} className="w-full rounded-md" alt="" />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-red-100 px-16">
        <h1 className="pt-12 text-center text-3xl font-bold uppercase">
          Body and Soul Together
        </h1>
        <div className="grid grid-cols-5 gap 4">
          <div className="col-span-2 p-10">
            <img src={messageTherapy} className="w-full rounded-md" alt="" />
          </div>
          <div className="col-span-3 flex items-center pl-4 pr-4">
            <div className="container">
              <h1 className="uppercase font-bold">Massage Therapy</h1>
              <p className="text-white font-normal my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                in. Id at voluptate quibusdam facere, blanditiis impedit
                incidunt optio molestias dignissimos totam, debitis iusto
                magnam, nam consectetur amet? Dolor atque laboriosam error
                corrupti. Exercitationem officiis cumque, et, inventore
                provident assumenda mollitia nemo labore itaque doloribus quasi
                recusandae sapiente soluta. Facilis!
              </p>
              <Button color="white">Read more</Button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="discount_remind">
        <div
          className="py-24 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${sliderSecond})` }}
        >
          <div className="container">
            <div className="inset-0 grid h-full w-full items-center ">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  className="mb-4 text-3xl text-white md:text-4xl lg:text-5xl"
                >
                  50% OFF Aroma and Jet Hydrotherapy!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 font-light!important"
                >
                  Donec vel sapien augue integer urna turpis cursus porta,
                  mauris sed augue luctus dolor velna auctor congue tempus an
                  integer
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="pink">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sign up form */}
      <section className="py-10">
        <div className="flex justify-center">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}

export default Home;
