const http = require("http");

const data = require("./data.json");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url.startsWith("/items")) {
    const items = data.items;
    const content = JSON.stringify(items);
    res.end(content);
  } else if (req.url.startsWith("/itemCategories")) {
    const itemCategories = data.itemCategories;
    const content = JSON.stringify(itemCategories);
    res.end(content);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Resource not found");
  }
});

server.listen(4000);
console.log("Started server on port 4000");
