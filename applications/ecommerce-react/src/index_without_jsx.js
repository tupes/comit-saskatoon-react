import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement(
    "section",
    { id: "baked-salmon" }, React.createElement("h1", null, "Baked Salmon"), React.createElement(
    "ul",
    { className: "ingredients" },
    React.createElement("li", null, "2 lb salmon"), React.createElement("li", null, "5 sprigs fresh rosemary"), React.createElement("li", null, "2 tablespoons olive oil"), React.createElement("li", null, "2 small lemons"), React.createElement("li", null, "1 teaspoon kosher salt"), React.createElement("li", null, "4 cloves of chopped garlic")
    ), React.createElement(
    "section",
    { className: "instructions" },
    React.createElement("h2", null, "Cooking Instructions For You!"), React.createElement("p", null, "Preheat the oven to 375 degrees."), React.createElement("p", null, "Lightly coat aluminum foil with oil."),
    React.createElement("p", null, "Place salmon on foil."), React.createElement(
    "p",
    null,
    "Cover with rosemary, sliced lemons, chopped garlic."
    ), React.createElement(
    "p",
    null,
    "Bake for 15-20 minutes until cooked through."
    ),
    React.createElement("p", null, "Remove from oven.") )
);

ReactDOM.render(App, document.getElementById("root"));