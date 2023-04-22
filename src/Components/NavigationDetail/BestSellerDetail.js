import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DetailCard from "./DetailCard";

function BestSellerDetail({ products }) {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { id } = useParams();

  let selectedItem = products.find((element) => element.id == id);

  return (
    <>
      <DetailCard
        counter={counter}
        dispatch={dispatch}
        selectedItem={selectedItem}
      />
    </>
  );
}

export default BestSellerDetail;
