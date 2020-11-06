export function getItems() {
  return [
    {
      id: 1,
      name: "Soccer ball",
      price: 44.0,
      description: "The best soccer ball ever!",
      image: "imgs/soccer/ball.png",
      category: "soccer",
    },
    {
      id: 2,
      name: "Tubing raft",
      price: 624.0,
      description: "Have some extreme fun being pulled in this raft!",
      image: "imgs/watersports/tube.png",
      category: "watersports",
    },
    {
      id: 3,
      name: "Chess board and pieces",
      price: 499.0,
      description: "finest wood",
      image: "imgs/boardgames/woodenSet.png",
      category: "boardgames",
    },
    {
      id: 4,
      name: "Team Canada soccer jersey",
      price: 591.0,
      description:
        "Display your national pride with this authentic Team Canada soccer jersey!",
      image: "imgs/soccer/shirtCanada.png",
      category: "soccer",
    },
    {
      id: 5,
      name: "Goggles",
      price: 396.0,
      description:
        "Top-of-the-line goggles for the most extreme of watersports!",
      image: "imgs/watersports/sunglass.png",
      category: "watersports",
    },
  ];
}

export function getItemFields() {
  return ["name", "price", "category"];
}
