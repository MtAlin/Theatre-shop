import React from "react";
import { handleFav } from "../../redux/product";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function SellerCart({ product, link }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="sellerCart-col" key={product.id}>
      <div className="card">
        <div className="heart-fav"></div>
        <div className="productCard-flex">
          <p className={product.color}>{product.new}</p>
          <p className="heart-fav" onClick={() => dispatch(handleFav(product))}>
            {product.fav ? <BsFillHeartFill /> : <BsHeart />}
          </p>
        </div>
        <Link to={`/${link}/${product.id}`}>
          <img className="card-img-top" src={product.image} />
        </Link>
        <div className="card-body">
          <h6>{product.title}</h6>
          <p className="card-text">{product.text}</p>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SellerCart;
