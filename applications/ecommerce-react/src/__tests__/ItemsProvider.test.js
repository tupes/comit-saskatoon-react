import { shallow } from "enzyme";
import React from "react";
import ItemsProvider from "../components/ItemsProvider";
import * as itemRepository from "../firebase/itemRepository";

jest.mock("../firebase/itemRepository");

describe("ItemsProvider", () => {
  let items;
  let wrapper;

  beforeEach(() => {
    items = [
      {
        id: 1,
        name: "Soccer ball",
        price: 44,
        description: "The best soccer ball ever!",
        image: "imgs/soccer/ball.png",
        category: "soccer",
      },
      {
        id: 2,
        name: "Tubing raft",
        price: 624,
        description: "Have some extreme fun being pulled in this raft!",
        image: "imgs/watersports/tube.png",
        category: "watersports",
      },
    ];
    itemRepository.getItems.mockResolvedValue(items);
    wrapper = shallow(<ItemsProvider />);
  });

  it("should call getItems and update state with the result when rendered", () => {
    const result = wrapper.state.items;
    expect(result.length).toBe(2);
  });
});
