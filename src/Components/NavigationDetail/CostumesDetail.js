import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DetailCard from "./DetailCard";

function CostumesDetail({ costumes }) {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { coatId } = useParams();

  let selectedItem;
  for (const category of costumes) {
    selectedItem = category.items.find((element) => element.id == coatId);
    if (selectedItem) break;
  }

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

export default CostumesDetail;
