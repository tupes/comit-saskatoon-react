import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb1MhmrYDk25wp7ue0K0Leb7aECtswjck",
  authDomain: "notes-react-comit.firebaseapp.com",
  databaseURL: "https://notes-react-comit.firebaseio.com",
  projectId: "notes-react-comit",
  storageBucket: "notes-react-comit.appspot.com",
  messagingSenderId: "934027540281",
  appId: "1:934027540281:web:5240c1e55a94b16f665ae8",
  measurementId: "G-N3MSMWKN5G",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const firestore = app.firestore();
export const auth = app.auth();
