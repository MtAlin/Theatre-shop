import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Subscribe() {
  return (
    <div className="container subscribe py-5">
      <div className="row">
        <div className="col-lg m-0 py-3">
          <h1>Subscribe to Chicago</h1>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
          <div className="input-container">
            <input placeholder="Enter your email adress"></input>
            <button>
              <BsArrowRight className="translate" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
