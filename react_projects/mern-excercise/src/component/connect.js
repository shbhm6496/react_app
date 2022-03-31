import react from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
const connect = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAzCTXA-sBuXN8m-64v6LSf9W67zdfkYow",
    authDomain: "mern-stack-demo.firebaseapp.com",
    databaseURL: "https://mern-stack-demo-default-rtdb.firebaseio.com",
    projectId: "mern-stack-demo",
    storageBucket: "mern-stack-demo.appspot.com",
    messagingSenderId: "769866177116",
    appId: "1:769866177116:web:b1b1d0a33122e07918a499",
    measurementId: "G-HQ9H82NDT8",
  };
  const app = initializeApp(firebaseConfig);
  //const analytic = getAnalytics(app);
  console.log(app);
  async function signIn() {
    var provider = new GoogleAuthProvider();
    console.log(provider);
    await signInWithPopup(getAuth(), provider);
  }
  const messageText = "Helllo World";
  async function saveMessage(messageText) {}
};
export default connect;
