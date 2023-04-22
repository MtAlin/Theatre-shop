import React from "react";
import { useDispatch } from "react-redux";
import { handleFav } from "../../redux/product";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductCard({ product, link, sale, color }) {
  const dispatch = useDispatch();

  return (
    <div className="container py-2 product-card">
      <div className="row">
        <div className="col ">
          <div className="card">
            <div>
              <div className="productCard-flex">
                <p className={color}>{sale}</p>
                <p
                  className="heart-fav"
                  onClick={() => dispatch(handleFav(product))}
                >
                  {product.fav ? <BsFillHeartFill /> : <BsHeart />}
                </p>
              </div>
            </div>
            <Link to={`/${link}/${product.id}`}>
              <img className="card-img-top" src={product.image} />
            </Link>
            <div className="card-body">
              <h5>{product.title}</h5>
              <p className="card-text pb-2">{product.text}</p>
              <p>
                <b>${product.price}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
