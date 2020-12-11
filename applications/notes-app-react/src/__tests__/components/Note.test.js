import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
// import ReactMarkdown from "react-markdown";
import Note, { StyledNote } from "../../components/Note";

Enzyme.configure({ adapter: new Adapter() });

describe("Note", () => {
  describe("rendering", () => {
    let wrapper;
    let note;

    beforeEach(() => {
      note = {
        id: 1,
        author: "Mark",
        createdDate: "2020-12-05T00",
        content: "Here is some test content",
      };
      wrapper = shallow(<Note note={note} />);
    });

    it("should render the component", () => {
      const result = wrapper.exists(StyledNote);
      expect(result).toBe(true);
    });

    it("should render the note's content in a markdown component", () => {
      const result = wrapper.find("ReactMarkdown");
      expect(result.props().source).toEqual(note.content);
    });
  });
});
