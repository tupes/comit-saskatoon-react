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

export function addNoteToUser(userId, content) {
  const notesRef = db.ref(`notes/${userId}`);
  const itemRef = notesRef.push();
  itemRef.set({ content });
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
