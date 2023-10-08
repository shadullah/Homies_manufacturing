import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import OrderModal from "./OrderModal";

const Purcess = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState(null);
  const [prices, setPrice] = useState(0);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery("purcess", () =>
    fetch(
      `https://homies-manufacturer-website-server-main-tan.vercel.app/product/${id}`
    ).then((res) => res.json())
  );
  // https://homies-manufacturer-website-server-main-tan.vercel.app/product

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.massage);
  }
  const { name, img, Minimum_Order, Stock, price } = product;

  const handleQuantity = (e) => {
    e.preventDefault();

    const quantity = e.target.quantity.value;

    if (quantity >= Minimum_Order && quantity <= Stock) {
      setQuantity(quantity);
      const divide = price / Minimum_Order;
      const prices = divide * quantity;
      setPrice(prices);
    } else {
      toast.error("Please enter a valid quantity!");
    }
    e.target.reset();
  };

  const handleSetOrder = () => {
    const order = {
      productName: name,
      userName: user.displayName,
      email: user.email,
      quantity,
      prices,
      paid: false,
    };
    setOrder(order);
  };

  return (
    <>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 border-primary">Purcess</span>
      </h3>
      <div className="flex justify-center items-center my-7">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img className="h-36" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h4 className="text-sm font-bold">Unit Price: ${price}</h4>
            <p className="text-xs font-bold">Stock: {Stock}</p>
            <p className="text-xs font-bold">Minimum Order: {Minimum_Order}</p>
            {quantity !== 0 && (
              <p>
                You order quantity: {quantity} <br />{" "}
                <small className="text-sky-500">You can change quantity</small>
              </p>
            )}
            {prices !== 0 && (
              <p className="text-xs font-bold">Total price: ${prices}</p>
            )}
            <form onSubmit={handleQuantity} className="my-2 flex">
              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                class="input input-bordered input-xs w-full max-w-xs"
              />
              <input type="submit" value="Add" class="btn btn-xs btn-primary" />
            </form>
            <div className="card-actions justify-center">
              <label
                for="order-modal"
                disabled={quantity === 0}
                onClick={handleSetOrder}
                className="btn btn-primary"
              >
                Place Order
              </label>
            </div>
          </div>
          {order && <OrderModal order={order} setOrder={setOrder}></OrderModal>}
        </div>
      </div>
    </>
  );
};

export default Purcess;
