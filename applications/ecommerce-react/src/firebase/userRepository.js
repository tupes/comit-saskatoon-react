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
