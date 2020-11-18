import { db } from "./firebase";

async function getData(tableName) {
  const data = [];
  const tableRef = db.ref(`/${tableName}`);
  const dataSnapshot = await tableRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    data.push(item);
  });
  console.log(data);
  return data;
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
