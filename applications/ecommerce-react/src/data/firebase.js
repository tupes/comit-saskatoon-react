import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB_ax0Ciyf80Boe2QNBOjY6h9ST8hDmIJ4",
  authDomain: "comit-saskatoon-react.firebaseapp.com",
  databaseURL: "https://comit-saskatoon-react.firebaseio.com",
  projectId: "comit-saskatoon-react",
  storageBucket: "comit-saskatoon-react.appspot.com",
  messagingSenderId: "531293621989",
  appId: "1:531293621989:web:2f97b90c88eeb64d3a0e0c",
  measurementId: "G-33ZY9FPVV0",
};

const fire = firebase.initializeApp(config);
const auth = fire.auth();
const db = fire.database();

export function createUserWithEmailAndPassword(email, password) {
  auth.createUserWithEmailAndPassword(email, password);
}

export function signInWithEmailAndPassword(email, password) {
  auth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  auth.signOut();
}

export function sendPasswordResetEmail(email) {
  auth.sendPasswordResetEmail(email);
}

export function updatePassword(password) {
  auth.currentUser.updatePassword(password);
}

export async function getItems() {
  const items = [];
  const itemsRef = db.ref("items/");
  const dataSnapshot = await itemsRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    items.push(item);
  });
  console.log(items);
  return items;
}
