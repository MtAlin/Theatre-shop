import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import FilterAccordion from "./FilterAccordion";
import SortFilterAccordion from "./SortFilterAccordion";
import SellerCart from "./SellerCard";

function BestSeller({ products, link }) {
  const [value, setValue] = useState({
    search: "",
    range: 350,
  });

  const [checkbox, setCheckBox] = useState({
    small: false,
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSmallPrice = (price) => {
    setCheckBox({ ...checkbox, small: price });
  };

  const handleHighPrice = (price) => {
    setCheckBox({ ...checkbox, high: price });
  };

  const filtered = products.filter((item) => {
    if (item.price < value.range)
      return item.title.toLowerCase().includes(value.search.toLowerCase());
  });

  const handleSort = () => {
    const strAscending = [...filtered].sort((a, b) => {
      if (checkbox.small) {
        return a.price - b.price;
      }
      if (checkbox.high) {
        return b.price - a.price;
      }
    });
    return strAscending;
  };

  return (
    <div className="seller-container">
      <div className="seller-search">
        <input
          className="sellerSearch-input"
          type="search"
          name="search"
          placeholder={`Search`}
          onChange={(e) => handleValue(e)}
        ></input>
        <button className="sellerBtn-search">
          <BsSearch />
        </button>
      </div>
      <div className="sellerDetail-row">
        <div className="sellerFilter-col-3  ">
          <div id="accordion">
            <FilterAccordion handleValue={handleValue} value={value} />
          </div>
          <SortFilterAccordion
            checkbox={checkbox}
            handleHighPrice={handleHighPrice}
            handleSmallPrice={handleSmallPrice}
          />
        </div>
        <div className="sellerCart-col-9">
          <div className="sellerCart-row">
            {handleSort().map((product) => (
              <SellerCart product={product} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
