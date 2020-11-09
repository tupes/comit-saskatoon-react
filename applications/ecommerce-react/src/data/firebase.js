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
const db = fire.database();

export async function getItems() {
  const items = [];
  const itemsRef = db.ref("items/");
  const dataSnapshot = await itemsRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    items.push(item);
  });
  return items;
}
