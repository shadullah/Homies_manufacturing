import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const { name, img, price, Stock, Minimum_Order, about } = product;
  let navigate = useNavigate();

  const handleBuyBtn = (_id) => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl border-2 border-orange-400 rounded-md">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h4 className="text-xl text-bold">Price: {price}</h4>
        <b>Stock: {Stock}</b>
        <b>Minimum Order: {Minimum_Order}</b>
        <p>{about}</p>
        <div className="card-actions">
          <button
            onClick={() => handleBuyBtn(product._id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
