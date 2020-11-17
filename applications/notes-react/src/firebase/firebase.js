import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIrt-lu6NBlNVFzGyH85Mp-WAWULy6L34",
    authDomain: "comit-react-saskatoon-sur.firebaseapp.com",
    databaseURL: "https://comit-react-saskatoon-sur.firebaseio.com",
    projectId: "comit-react-saskatoon-sur",
    storageBucket: "comit-react-saskatoon-sur.appspot.com",
    messagingSenderId: "863239192691",
    appId: "1:863239192691:web:1fb6a08c767e805d46aa06"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const db=firebaseApp.database();