import React from "react";
import ReactPlayer from "react-player";

export default (props) => {
  return (
    <div className="container py-5 ">
      <div className="row mx-1">
        <div className="col player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};
