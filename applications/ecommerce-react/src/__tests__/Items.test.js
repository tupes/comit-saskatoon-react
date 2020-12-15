import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Items from "../components/Items";

Enzyme.configure({ adapter: new Adapter() });

describe("Items", () => {
  describe("rendering", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Items />);
    });

    it("should render a ItemCategories component", () => {
      const result = wrapper.exists("ItemCategories");
      expect(result).toBe(true);
    });

    it("should render a ItemsList component", () => {
      const result = wrapper.exists("ItemsList");
      expect(result).toBe(true);
    });
  });
});
