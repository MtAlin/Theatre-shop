import React from "react";
import { FiAlignCenter } from "react-icons/fi";
import SelectFilter from "./SelectFilter";

function PriceRangeFilter({ handleValue, value }) {
  return (
    <div id="accordion">
      <div id="headingOne">
        <button
          class="btn btn-link"
          data-toggle="collapse"
          href="#filterBy"
          role="button"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <div className="sortIcon">
            <FiAlignCenter className="FiAlignCenter" />
            <p> Filter By</p>
          </div>
        </button>
      </div>
      <div
        class="collapse multi-collapse"
        id="filterBy"
        data-parent="#accordion"
      >
        {/* price range filter */}
        <div className="price-range">
          <button
            class="btn btn-link"
            data-toggle="collapse"
            href="#rangeFilter"
            role="button"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Price
          </button>
          <div class="collapse multi-collapse" id="rangeFilter">
            <div class="range-slider">
              <input
                class="range-slider__range"
                type="range"
                name="range"
                value={value.range}
                min="111"
                max="600"
                onChange={(e) => handleValue(e)}
              />
              <span class="range-slider__value">{value.range}</span>
            </div>
          </div>
        </div>
        {/* select accordion  */}
        <SelectFilter handleValue={handleValue} value={value} />
      </div>
    </div>
  );
}

export default PriceRangeFilter;
