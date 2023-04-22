import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
function BlackSales() {
  return (
    <div className="container blackSales ">
      <div className="row">
        <div className="col-lg-6 align">
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            </p>
            <p>Laborum numquam blanditiis harum quisquam </p>
            <Link className="btn btn-outline-dark " to="/costumes">
              Road to catalog <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 blackSales-img "></div>
      </div>
    </div>
  );
}

export default BlackSales;
