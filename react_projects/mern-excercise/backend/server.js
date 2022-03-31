//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
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
//const analytic = firebase_analytics.getAnalytics(app);
console.log(app);
//console.log(analytic);
//console.log(firebase_analytics);
//const analytic = getAnalytics(app);
//console.log(analytic);
