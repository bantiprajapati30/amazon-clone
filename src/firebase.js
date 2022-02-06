/** @format */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
require("firebase/auth");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQz_psLHvUSQiArv26UJPM8eH7ClYfWhI",
  authDomain: "clone-9035b.firebaseapp.com",
  databaseURL: "https://clone-9035b-default-rtdb.firebaseio.com",
  projectId: "clone-9035b",
  storageBucket: "clone-9035b.appspot.com",
  messagingSenderId: "222322427338",
  appId: "1:222322427338:web:c2ae9261569ff35a23bb33",
  measurementId: "G-NK0DC1K0YD",
});
const auth = firebase.auth();
export { auth };
