import React from "react";
import { urlFor } from "../sanity";

function Review({ review }) {
  console.log(review);
  return (
    <div className="review-box">
      <h1>{review.rating}</h1>
      <h2>{review.traveller.name}</h2>
      <img
        src={urlFor(review.traveller.image)
          .width(64)
          .height(64)
          .crop("focalpoint")}
      />
    </div>
  );
}

export default Review;
