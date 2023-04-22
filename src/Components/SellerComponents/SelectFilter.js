import React from "react";

function SelectFilter({ handleValue, value }) {
  return (
    <div className="category-select">
      <button
        className="btn btn-link"
        data-toggle="collapse"
        href="#categorySelect"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Collection
      </button>
      <div className="collapse " id="categorySelect">
        <div className="range-slider box">
          <select
            value={value.select}
            name="select"
            onChange={(e) => handleValue(e)}
          >
            <option>All</option>
            <option>BestSeller</option>
            <option>Outlet</option>
            <option>NewArrivals</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectFilter;
