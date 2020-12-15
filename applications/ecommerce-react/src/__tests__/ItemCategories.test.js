import { shallow } from "enzyme";
import React from "react";
import ItemCategories from "../components/ItemCategories";

describe("ItemCategories", () => {
  let itemCategories;
  let handleSelectCategory;
  let realUseContext;
  let useContextMock;
  let wrapper;

  beforeEach(() => {
    itemCategories = ["category1", "example2"];
    handleSelectCategory = jest.fn();
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
    useContextMock.mockReturnValue({
      itemCategories,
      handleSelectCategory,
    });
    wrapper = shallow(<ItemCategories />);
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it("should render an ul element", () => {
    const result = wrapper.type();
    expect(result).toBe("ul");
  });

  it("should render a li element for each item category", () => {
    const result = wrapper.find("li");
    expect(result.length).toBe(2);
  });

  it("should call handleSelectCategory with the correct category when the button is clicked", () => {
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(handleSelectCategory.mock.calls.length).toBe(1);
    expect(handleSelectCategory.mock.calls[0][0]).toBe(itemCategories[0]);
  });
});
