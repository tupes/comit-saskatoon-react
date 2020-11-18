import { auth } from "./firebase";

function getUserData(authUser, email) {
  return { email, uid: authUser.user.uid, cart: [] };
}

export async function createUserWithEmailAndPassword(email, password) {
  const authUser = await auth.createUserWithEmailAndPassword(email, password);
  return getUserData(authUser, email);
}

export async function signInWithEmailAndPassword(email, password) {
  const authUser = await auth.signInWithEmailAndPassword(email, password);
  return getUserData(authUser, email);
}

export function signOut() {
  return auth.signOut();
}
