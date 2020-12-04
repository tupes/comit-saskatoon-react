import { firestore as db } from "../";

export async function getUser(uid) {
  const docRef = await db.collection("users").doc(uid);
  const user = await docRef.get();
  return user.data();
}

export function saveUser(user) {
  db.collection("users").doc(user.uid).set(user);
}
