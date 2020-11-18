import { db } from "./firebase";

export function addUser(user) {
  const userRef = db.ref(`users/${user.uid}`);
  return userRef.set(user);
}

export function addItemToCart(userId, itemId) {
  const cartRef = db.ref("/cartItems");
  const itemRef = cartRef.push();
  itemRef.set({ userId, itemId });
  return itemRef;
}

export async function getCartItems(userId) {
  const data = [];
  const cartRef = db.ref("/cartItems");
  const dataSnapshot = await cartRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    if (item.userId === userId) {
      data.push(item);
    }
  });
  return data;
}
