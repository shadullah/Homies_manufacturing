import React, { useState, useEffect } from "react";
import Review from "../Review/Review";
import user from "../../../../Images/user.png";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://homies-manufacturer-website-server-main-tan.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <h1 className="text-5xl text-primary font-bold text-center my-28">
        Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
