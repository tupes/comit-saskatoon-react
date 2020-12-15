import { shallow } from "enzyme";
import React from "react";
import Items from "../components/Items";

describe("Items", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Items />);
  });

  it("should render an element with a class of main", () => {
    const result = wrapper.exists(".main");
    expect(result).toBe(true);
  });

  it("should render an ItemCategories component", () => {
    const result = wrapper.exists("ItemCategories");
    expect(result).toBe(true);
  });

  it("should render an ItemList component", () => {
    const result = wrapper.exists("ItemsList");
    expect(result).toBe(true);
  });
});
