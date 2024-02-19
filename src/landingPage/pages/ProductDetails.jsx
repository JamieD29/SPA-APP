
import { useState } from "react";
import BannerPage from "../components/banner/BannerPage";

function ProductDetails() {
  const [amount, setAmount] = useState(1);

  return (
    <div>
     <BannerPage title="Product Details"/>

      {/* Details */}
      <section className="py-10 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <img
                    className="object-contain w-full lg:h-full"
                    src="https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  {/* <span className="px-2.5 py-0.5 text-xs text-pink-600 bg-pink-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                    New Arrival
                  </span> */}
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    SKIN CLEANING SERUM
                  </h2>

                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>$ 10</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $ 20
                    </span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description :
                  </h2>
                  <p className="text-gray-700">
                    Con un ammortizzazione incredibile per sostenerti in tutti i
                    tuoi chilometri, Invincible 3 offre un livello di comfort
                    elevatissimo sotto il piede per aiutarti a dare il massimo
                    oggi, domani e oltre. Questo modello incredibilmente
                    elastico e sostenitivo, è pensato per dare il massimo lungo
                    il tuo percorso preferito e fare ritorno a casa carico di
                    energia, in attesa della prossima corsa.
                  </p>
                </div>
                <hr />
                <div className="mb-6 "></div>
                <div className="flex flex-wrap items-center mb-6">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button
                          onClick={() =>
                            setAmount((prev) => (prev === 1 ? prev : prev - 1))
                          }
                          className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                        >
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <span className="px-6 py-2 rounded-lg">{amount}</span>
                        <button
                          onClick={() => setAmount((prev) => prev + 1)}
                          className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-pink-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggest */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172"
                  alt="Front of men&#039;s Basic Tee in black."
                  className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Serum
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            {/*  */}
            <div className="group relative">
              <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172"
                  alt="Front of men&#039;s Serum in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Serum
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172"
                  alt="Front of men&#039;s Serum in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Serum
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 shadow-sm aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172"
                  alt="Front of men&#039;s Serum in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Serum
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
