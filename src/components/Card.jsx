import React from "react";

const Card = ({ slink, headtxt, img, text, colr }) => {
  return (
    <div className="card" style={{ backgroundColor: colr }}>
      <h1>{headtxt}</h1>
      <figure>
        <img src={img} alt="" />
      </figure>
      <p>{text}</p>
      <a href={slink}>Click to View</a>
    </div>
  );
};

export default Card;
