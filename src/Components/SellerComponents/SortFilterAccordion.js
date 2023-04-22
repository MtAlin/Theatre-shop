import React from "react";
import { MdOutlineSort } from "react-icons/md";

function SortFilterAccordion({ handleHighPrice, handleSmallPrice, checkbox }) {
  return (
    <div id="accordion2">
      <div id="headingOne">
        <button
          className="btn btn-link"
          data-toggle="collapse"
          href="#sortBy"
          role="button"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div className="sortIcon">
            <MdOutlineSort className="MdOutlineSort" />
            <p> Sort By</p>
          </div>
        </button>
      </div>
      <div
        className="collapse multi-collapse "
        id="sortBy"
        data-parent="#accordion2"
      >
        <div className="sortBy">
          <label>
            <input
              type="checkbox"
              value={checkbox.small}
              onChange={() => handleSmallPrice(!checkbox.small)}
            />
            <span> Cel mai mic pret</span>
          </label>

          <label>
            <input
              type="checkbox"
              value={checkbox.high}
              onChange={() => handleHighPrice(!checkbox.high)}
            />
            <span> Cel mai mare pret</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SortFilterAccordion;
