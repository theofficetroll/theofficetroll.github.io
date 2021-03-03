import React from 'react';
import './item.css';

// TODO
// Rewrite to reflect portfolio rather than Humble Bundle items
// Once sure how this all should appear, update object in app.js
// Also rewrite app.js to pull data from a JSON store or similar

const Item = (props) => {
  // will need to add itemDetails here
  const { key } = props;

  //temp data
  const itemDetails = {
    availability: "browser",
    feedback: {
      positiveReviews: 100,
      numberOfReviews: 98,
      reviewsFrom: "A little help from my friends",
    }
  }

  return (
    <div className="item-view">
      <div key={key} className="item item-box">
        <div className="image-holder">
          <img src={itemDetails.image} className="image" />
        </div>
        <div className="caption-container">
          {itemDetails.itemName} <br />
          Systems: {itemDetails.availability} <br />
          Good Reviews: {itemDetails.feedback.positiveReviews}% <br />
          Total Reviews: {itemDetails.feedback.numberOfReviews} <br />
          Reviews From: {itemDetails.feedback.reviewsFrom} <br />
        </div>
      </div>
    </div>
  )
}

export default Item;
