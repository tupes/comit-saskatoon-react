import { db } from "./firebase";

export async function getUser(uid) {
  const userRef = db.ref(`users/${uid}`);
  const userSnapshot = await userRef.once("value");
  return userSnapshot.val();
}

export function addUser(user) {
  const userRef = db.ref(`users/${user.uid}`);
  return userRef.set(user);
}

export function addItemToCart(userId, itemId) {
  const cartRef = db.ref(`users/${userId}/cart`);
  const itemRef = cartRef.push();
  itemRef.set({ itemId, quantity: 1 });
  return itemRef;
}

export async function getCartItems(userId) {
  const data = [];
  const cartRef = db.ref(`users/${userId}/cart`);
  const dataSnapshot = await cartRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    data.push(item);
  });
  return data;
}
