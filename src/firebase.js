// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig =
{
  apiKey: "AIzaSyBneacKznJ7XuEWlBL9imBnXM3rRH_7C5Q",
  authDomain: "frontclone-a6937.firebaseapp.com",
  projectId: "frontclone-a6937",
  storageBucket: "frontclone-a6937.appspot.com",
  messagingSenderId: "1003351316281",
  appId: "1:1003351316281:web:2a02a865139102d109fae8",
  measurementId: "G-11G72NGC5T"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };