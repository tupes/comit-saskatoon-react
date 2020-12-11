import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import Note from "../../components/Note";

Enzyme.configure({ adapter: new Adapter() });

describe("Note", function () {
  describe("rendering", function () {
    it("should render an article element", function () {});
  });
});
