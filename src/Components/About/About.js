import React from "react";
import { BsArrowRight } from "react-icons/bs";
function About() {
  return (
    <div className="container about">
      <h1>ABOUT CHICAGO</h1>
      <div className="row">
        <div className="col-lg-5 py-3">
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
          <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"></img>
        </div>
        <div className="col-lg-7">
          <img src="https://graphicdesigno.com/wp-content/uploads/2016/07/What-is-Lorem-ipsum.jpg"></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          </p>
          <a className="bestSeller-showL">
            Learn more <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
