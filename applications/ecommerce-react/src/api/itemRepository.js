import axios from "axios";

const host = "http://localhost:4000";

export async function addItemToCart(userId, itemId, token) {
  const url = `${host}/cart`;
  const response = await axios.post(url, { userId, itemId, token });
  return response.data;
}

async function getData(resource) {
  const url = `${host}/${resource}`;
  const response = await axios.get(url);
  return response.data;
}

export function getItems() {
  return getData("items");
}

export function getItemCategories() {
  return getData("itemCategories");
}

export function getItemFields() {
  return getData("itemFields");
}
