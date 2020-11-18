import { auth } from "./firebase";

function getUserData(authUser, email) {
  return { email, uid: authUser.user.uid, cart: [] };
}

export async function createUserWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export async function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}
