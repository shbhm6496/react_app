const exprees = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//import { initializeApp, intitializeApp } from "firebase/app";

require("dotenv").config();
const port = 5000;

app.use(cors());

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

const app = intitializeApp(firebaseConfig);
const analytic = getAnalytic(app);
console.log(analytic);
//app.use(exprees.json());

//const uri = process.env.ATLAS_URI;
const uri = process.env.ATLAS_URI1;
//const uri = process.env.FIREBASE_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connecttion = mongoose.connection;

connecttion.once("open", (err) => {
  console.log("MongoDb database conneciton establushed succesfully");
  console.log(err);
});

app.listen(port, () => {
  console.log("Server is runnig on the port:", port);
});
