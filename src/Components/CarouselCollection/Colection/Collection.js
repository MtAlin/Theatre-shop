import React from "react";
import CollectionCard from "./CollectionCard";
import ColData from "./CollectionData";
function Collection() {
  return (
    <div className="container py-5">
      <h1>COLLECTION</h1>
      <div className="row">
        {ColData.map((item, index) => (
          <div key={index} className="col-lg-6">
            <CollectionCard categories={item.adclass} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
