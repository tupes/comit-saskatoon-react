import { db } from "./firebase";

export function addUser(user) {
  const usersRef = db.ref("/users");
  const userRef = usersRef.push();
  userRef.set(user);
  return userRef;
}

export function addItemToCart(userId, itemId) {
  const cartRef = db.ref("/cartItems");
  const itemRef = cartRef.push();
  itemRef.set({ userId, itemId });
  return itemRef;
}
