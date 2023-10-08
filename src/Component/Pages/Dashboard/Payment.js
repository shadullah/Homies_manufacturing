import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L43dfGgmy1kWOC8dtDwkCEeaijq6wRdTPnj4bZ0TdiRHuqjRTa2VaWmG7gSOMEeXX92KkuDmM17tYbEzMdh2YeV004r2r5mbJ"
);

const Payment = () => {
  const { paymentId } = useParams();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["orders", paymentId], () =>
    fetch(
      `https://homies-manufacturer-website-server-hexaalif.vercel.app/orders/${paymentId}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.massage);
  }

  const { userName, productName, quantity, price } = order;

  return (
    <>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 border-primary">Payment</span>
      </h3>

      <div className="flex justify-center items-center my-10">
        <div className="card w-50 max-w-md bg-gray-200 shadow-xl my-12">
          <div className="card-body">
            <p className="text-primary text-lg font-bold">Hello! {userName}</p>
            <h2 className="card-title">Please Pay for {productName}</h2>
            <p>
              Quantity:{" "}
              <span className="text-primary font-bold">{quantity}</span>
            </p>
            <p className="font-bold">
              Please pay: <span className="text-primary "> ${price}</span>
            </p>
          </div>
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
