import React from "react";

import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";

export default function Items(props) {
  return (
    <>
      <ItemCategories />
      <ItemsList handleAddToCartClick={props.handleAddToCartClick} />
    </>
  );
}
