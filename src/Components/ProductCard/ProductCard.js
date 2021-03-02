import React from "react";
import LoginButtons from "../LoginButtons/LoginButtons";
import "./ProductCard.style.css";

function ProductCard({ image, name, testDriveAvailable }) {
  return (
    <div className="productCard">
      <div className="productCard__photo">
        <img src={image} alt={name} className="productCard__photo__img" />
      </div>
      <h2 className="productCard__name">{name}</h2>
      <div className="productCard__actions">
        <LoginButtons name="ORDER" isTopButton />
        {testDriveAvailable && <LoginButtons name="TEST DRIVE" />}
      </div>
      <div className="productCard__info">
        <span className="productCard__info__span">Request a Call </span>to speak
        with product specialist, value your trade-in or apply for leasing.
      </div>
    </div>
  );
}

export default ProductCard;
