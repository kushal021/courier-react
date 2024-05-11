import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel
      className="mx-auto"
      showThumbs={false}
      width={"none"}
      emulateTouch={true}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      swipeable={true}
      autoPlay
      infiniteLoop
    >
      <div className=" mx-auto p-1">
        <div className="max-h-[700px] relative">
          <div className="absolute  w-full h-full max-h-[700px] bg-black/40 text-gray-200 flex flex-col justify-center">
            <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              {" "}
              <span className="text-orange-500">Foods </span>Delivered
            </h1>
          </div>
          <img
            className="w-full max-h-[700px] object-cover"
            src="https://neighbourexpress.com/wp-content/uploads/2020/10/neighbourexpress2.jpg"
            alt="#"
          />
        </div>
      </div>
      <div className="mx-auto p-4 ">
        <div className="max-h-[700px] relative">
          <div className="absolute  w-full h-full max-h-[700px] bg-black/40 text-gray-200 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              {" "}
              <span className="text-orange-500">Foods </span>Delivered
            </h1>
          </div>
          <img
            className="w-full max-h-[700px] object-cover"
            src="https://neighbourexpress.com/wp-content/uploads/2020/10/neighbourexpress3.jpg"
            alt="#"
          />
        </div>
      </div>
      <div className="mx-auto p-4 ">
        <div className="max-h-[700px] relative">
          <div className="absolute  w-full h-full max-h-[700px] bg-black/40 text-gray-200 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
              {" "}
              <span className="text-orange-500">Foods </span>Delivered
            </h1>
          </div>
          <img
            className="w-full max-h-[700px] object-cover"
            src="https://neighbourexpress.com/wp-content/uploads/2020/10/neighbourexpress_service_1.jpg"
            alt="#"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
