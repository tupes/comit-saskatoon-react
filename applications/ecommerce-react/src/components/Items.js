import React from "react";

import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";

export default function Items(props) {
  return (
    <>
      <ItemCategories
        categories={props.categories}
        handleSelectCategory={props.handleSelectCategory}
      />
      <ItemsList
        items={props.items}
        handleAddToCartClick={props.handleAddToCartClick}
      />
    </>
  );
}
