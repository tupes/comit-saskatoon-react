import { db } from "./firebase";

export async function getItems() {
  const items = [];
  const itemsRef = db.ref("/items");
  const dataSnapshot = await itemsRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    items.push(item);
  });
  console.log(items);
  return items;
}
