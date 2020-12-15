const data = require("./data.json");

async function getItems(req, res, next) {
  const { offset = 0, limit = 25, tag } = req.query;

  try {
    const items = data.items.filter((item) => !tag || item.tags.includes(tag));
    res.json(items);
  } catch (err) {
    next(err);
  }
}

async function getItem(req, res, next) {
  const id = Number(req.params.id);

  try {
    const item = data.items.find((item) => item.id === id);
    if (item) {
      res.json(item);
    } else {
      return next();
    }
  } catch (err) {
    next(err);
  }
}

async function getItemCategories(req, res) {
  res.json({ message: "Resource not implemented yet" });
}

module.exports = {
  getItems,
  getItem,
  getItemCategories,
};
