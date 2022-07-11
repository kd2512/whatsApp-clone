import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmlPyNXrz_81Js6OKX977CXRsj1lnUD70",
  authDomain: "whaatsapp-clone.firebaseapp.com",
  projectId: "whaatsapp-clone",
  storageBucket: "whaatsapp-clone.appspot.com",
  messagingSenderId: "951322038587",
  appId: "1:951322038587:web:405bb3899813cb398f671e",
  measurementId: "G-NZ3QZ912BJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
