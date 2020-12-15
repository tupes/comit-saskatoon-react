import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import React from "react";
import ItemCategories from "../components/ItemCategories";

Enzyme.configure({ adapter: new Adapter() });

const itemCategories = [
  "all",
  "watersports",
  "soccer",
  "basketball",
  "hockey",
  "boardgames",
];

describe("ItemCategories", () => {
  describe("rendering", () => {
    let realUseContext;
    let useContextMock;
    let wrapper;

    beforeEach(() => {
      realUseContext = React.useContext;
      useContextMock = React.useContext = sinon.stub();
      useContextMock.returns({
        itemCategories,
        handleSelectCategory: () => null,
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

    it("should render a list item for each item category", () => {
      const result = wrapper.find("li");
      expect(result.length).toBe(itemCategories.length);
    });
  });
});
