import React from 'react';
import "./Card.css"

const Card = ({ e }) => {
  return (
    <div className="card">
      <img src={e.Banner} alt={e.CourseTitle} className="card-banner" />
      <div className="card-details">
        <div className="card-category">{e.Category}</div>
        <h2 className="card-title">{e.CourseTitle}</h2>
        <p className="card-description">{e.CourseDescription}</p>
        <div className="card-info">
          <div className="card-price">Price: {e.CoursePrice}</div>
          <div className="card-duration">Duration: {e.CourseDuration}</div>
          <div className="card-language">Language: {e.CourseLanguage}</div>
        </div>
        <button className="card-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default Card;