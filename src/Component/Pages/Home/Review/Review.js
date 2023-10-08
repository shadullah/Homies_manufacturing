import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg p-10 bg-base-100 shadow-xl text-justify">
      <div className="card-body">
        <div>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 my-5">
              <img src={review.img} alt="." />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
