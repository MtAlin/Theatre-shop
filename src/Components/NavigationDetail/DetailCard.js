import React from "react";
import { handleDetail, increment, decrement } from "../../redux/product";
import { BsHeart, BsArrowRight, BsPlus, BsDash } from "react-icons/bs";

function DetailCard({ counter, selectedItem, dispatch }) {
  return (
    <div className="selerDetail-container">
      <div className="selerDetail-row">
        <div className="selerDetail-col-8">
          <img src={selectedItem.image} className="selerDetail-size"></img>
        </div>
        <div className="selerDetail-col-4">
          <div className="seleDetail-subRow">
            <div className="py-3">
              <h1>{selectedItem.title}</h1>
              <h4>
                <b>${selectedItem.price}</b>
              </h4>
            </div>

            <div className="sellerDetail-action">
              <div className="sellerDetail-count">
                <button
                  className="sellerDetail-operator"
                  onClick={() => {
                    dispatch(
                      decrement({
                        num: 1,
                        price: selectedItem.price,
                        id: selectedItem.id,
                      })
                    );
                  }}
                >
                  <BsDash />
                </button>
                <span>{counter}</span>
                <button
                  className="sellerDetail-operator"
                  onClick={() => {
                    dispatch(
                      increment({
                        num: 1,
                        price: selectedItem.price,
                        id: selectedItem.id,
                      })
                    );
                  }}
                >
                  <BsPlus />
                </button>
              </div>
              <button
                className="btn btn-outline-dark sellerDetail-add"
                onClick={() => dispatch(handleDetail(selectedItem))}
              >
                Ad to cart
                <BsArrowRight />
              </button>
              <p className="sellerDetail-fav">
                <BsHeart /> <span>Ad to wishlist</span>
              </p>
            </div>
            <p className="sellerDetail-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
