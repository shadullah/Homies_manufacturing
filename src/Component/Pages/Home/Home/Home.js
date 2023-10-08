import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../../Hooks/useProducts";
import Product from "../../Product/Product";
import Banner from "../Banner/Banner";
import CEO from "../CEO/CEO";
import Info from "../Info/Info";
import Summary from "../Summary/Summary";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const [products] = useProducts();
  return (
    <div className="px-16">
      <Banner></Banner>
      <Info></Info>
      <div>
        <h1 className="text-5xl text-center my-28">Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <div className="text-center">
          <Link to="/product">
            <button className="btn btn-primary my-10">See all</button>
          </Link>
        </div>
      </div>
      <Summary></Summary>
      <CEO></CEO>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
