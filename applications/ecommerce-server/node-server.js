const http = require("http");
const querystring = require("querystring");

const data = require("./data.json");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  let content;

  if (req.url.startsWith("/items")) {
    const inputQuerystring = req.url.split("?").slice(1).join("");
    const { tag, limit, offset } = querystring.parse(inputQuerystring);
    console.log(tag);
    content = data.items.filter((item) => !tag || item.tags.includes(tag));
  } else if (req.url === "/itemCategories") {
    content = data.itemCategories;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Resource not found");
  }

  res.end(JSON.stringify(content));
});

server.listen(4000);
console.log("Starting server on port 4000");
