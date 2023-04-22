import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCart, handleDelete } from "../../../redux/product";
function Favorite() {
  const productFav = useSelector((state) => state.counter.favArray);
  const dispatch = useDispatch();

  return (
    <div className=" container">
      <div className="row">
        {productFav.map((item, index) => (
          <div key={index} className="col-lg-6 ">
            <div class="card">
              <img class="card-img-top" src={item.image} />
              <div class="card-body">
                <h6>{item.title}</h6>
                <p class="card-text">{item.text}</p>
                <p>{item.price}</p>
                <button onClick={() => dispatch(handleCart(index))}>
                  Ad to cart
                </button>
                <button
                  onClick={() =>
                    dispatch(handleDelete({ indexs: index, id: item.id }))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
