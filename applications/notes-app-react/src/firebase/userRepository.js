import { db } from "./";

export async function getUser(uid) {
  const userRef = db.ref(`users/${uid}`);
  const userSnapshot = await userRef.once("value");
  return userSnapshot.val();
}

export function saveUser(user) {
  const userRef = db.ref(`users/${user.uid}`);
  return userRef.set(user);
}

export function addNoteToUser(userId, content) {
  const notesRef = db.ref(`notes/${userId}`);
  const itemRef = notesRef.push();
  itemRef.set({ content });
  return itemRef;
}
