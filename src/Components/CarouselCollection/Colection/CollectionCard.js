import React from "react";

function CollectionCard({ categories, item }) {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col ">
          <div
            className="card collection-img"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="card-body">
              <a href="#" className={`btn btn-primary ${categories}`}>
                {item.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
