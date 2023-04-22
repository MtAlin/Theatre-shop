import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SellerCard from "../SellerComponents/SellerCard";
import FilterAccordion from "../SellerComponents/FilterAccordion";
import SortFilterAccordion from "../SellerComponents/SortFilterAccordion";

function Costumes({ link }) {
  const dispatch = useDispatch();
  const sellerData = useSelector((state) => state.counter.sellerData);
  const [value, setValue] = useState({
    search: "",
    range: 700,
    select: "All",
  });
  const [checkbox, setCheckBox] = useState({
    small: false,
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSmallPrice = (props) => {
    setCheckBox({ ...checkbox, small: props });
  };
  const handleHighPrice = (props) => {
    setCheckBox({ ...checkbox, high: props });
  };

  let selectedItem = [];

  for (const category of sellerData) {
    selectedItem = selectedItem.concat(category.items);
  }
  let selected = selectedItem.filter((item) => {
    if (value.select !== "All") {
      return item.categorie === value.select;
    }
    return item;
  });

  let filtered = selected.filter((item) => {
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
      return filtered;
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
          {/* filter accordion */}
          <FilterAccordion handleValue={handleValue} value={value} />
          {/* sort accordion */}
          <SortFilterAccordion
            handleHighPrice={handleHighPrice}
            handleSmallPrice={handleSmallPrice}
            checkbox={checkbox}
          />
        </div>
        <div className="sellerCart-col-9">
          <div className="sellerCart-row">
            {handleSort().map((costum, index) => (
              <SellerCard product={costum} link="costumeDetail" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Costumes;
