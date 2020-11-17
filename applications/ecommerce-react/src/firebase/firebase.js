import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_ax0Ciyf80Boe2QNBOjY6h9ST8hDmIJ4",
  authDomain: "comit-saskatoon-react.firebaseapp.com",
  databaseURL: "https://comit-saskatoon-react.firebaseio.com",
  projectId: "comit-saskatoon-react",
  storageBucket: "comit-saskatoon-react.appspot.com",
  messagingSenderId: "531293621989",
  appId: "1:531293621989:web:2f97b90c88eeb64d3a0e0c",
  measurementId: "G-33ZY9FPVV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const db = firebaseApp.database();
