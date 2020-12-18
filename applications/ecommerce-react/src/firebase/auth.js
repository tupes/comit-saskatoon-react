import { auth } from "./firebase";

export function createUserWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}

export function getToken() {
  return auth.currentUser.getIdToken(true);
}
