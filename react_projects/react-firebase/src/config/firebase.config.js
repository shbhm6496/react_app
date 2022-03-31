import { firebase } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAypOv04A94oixbONFaggd5fYuOCXIdt08",
  authDomain: "react-firebase-e8449.firebaseapp.com",
  projectId: "react-firebase-e8449",
  storageBucket: "react-firebase-e8449.appspot.com",
  messagingSenderId: "777627822823",
  appId: "1:777627822823:web:1d804f63135493bd1ad042",
  measurementId: "G-JW3ZGY69DB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
