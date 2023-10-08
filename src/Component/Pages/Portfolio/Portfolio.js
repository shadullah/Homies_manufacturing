import React from "react";
import { Link } from "react-router-dom";
import mypic from '../../../Images/My.jpg'

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-14 font-bold">Portfolio</h1>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={mypic}
            className="max-w-sm rounded-lg shadow-2xl mx-10"
          />
          <div className="">
            <h1 className="text-5xl mb-3">Shad Ullah Sakib</h1>
            <h3 className="text-3xl font-medium mb-3">Email: hexaalif@gmail.com</h3>
            <h5 className="text-xl font-bold mb-3">Education: Department of Mathematics, SUST</h5>
            <p className="text-xl font-bold">Projects: <br /> </p>
            <p className="underline"><a href="https://dr-sarkar-25ed1.web.app/" target={`_blank`}>1. Dr-Sarkar, Family Doctor Near You</a> <br /> <a href="https://car-hunter.netlify.app/" target={`_blank`}>2. Car Hunter</a> <br /> <a href="https://tech-wala.netlify.app/" target={`_blank`}>3. Tech-wala</a></p>
            <p className="text-xl font-medium pt-3">Skills : React, NodeJs, ExpressJs, MongoDb, Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
