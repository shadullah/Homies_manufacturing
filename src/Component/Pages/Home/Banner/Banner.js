import React from "react";
import banner from "../../../../Images/Banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg"
      style={{
        background: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold text-orange-400">
            HOMIE'S IS THE NAME OF BELIEVE
          </h1>
          <p className="mb-5 text-white">
            We are the Homie's. Where you get your best production supply's,
            Deliveries and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
