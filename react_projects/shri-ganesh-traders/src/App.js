import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { Col, Container, Form, Row } from "react-bootstrap";
//import { getDatabase } from "firebase/database";
import Product from "./components/Product";
// import { useEffect, useState } from "react";
import logo from "./data/images/non_stick.jpg";
// import LoginPage from "./components/LoginPage";
//import LoginSignUp from "./components/customer/LoginSignup";
// import BusinessHome from "./components/business/BusinessHome";
// import BusinessHeader from "./components/business/BusinessHeader";
// import BusinessSubHeaderOrder from "./components/business/BusinessSubHeaderOrder";
// import BusinessSubHeaderProducts from "./components/business/BusinessSubHeaderProducts";
import Footer from "./components/Footer";
import BusinessProduct from "./components/business/BusinessProducts";
import Add_Data from "./components/admin/Add_Data";
import AddCategory from "./components/admin/AddCategory";

//import loginModal from "./components/loginModal";
const firebaseConfig = {
  // apiKey: "AIzaSyBDwx02gZK559UJp4OEQPA-dG3YrHwwrgo",
  // authDomain: "shri-ganesh-traders.firebaseapp.com",
  // databaseURL:
  //   "https://shri-ganesh-traders-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "shri-ganesh-traders",
  // storageBucket: "shri-ganesh-traders.appspot.com",
  // messagingSenderId: "206670033112",
  // appId: "1:206670033112:web:573f56f3ececfffe3627ad",
  // measurementId: "G-0GHMK6HKD6",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// let product_list;
// async function getData(db) {
//   const data = collection(db, "demo");
//   const list = await getDocs(data);
//   product_list = list.docs.map((doc) => doc.data());
// }
// console.log("proucts" + product_list);
// const analytics = getAnalytics(app);

// console.log(analytics);
// console.log(app);
// import Body from "./components/Body.js";
function App() {
  // const [products, setProducts] = useState([]);
  // getData(db);
  console.log();
  return (
    <div>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col>
          <Add_Data />
        </Col>
        <Col>
          <AddCategory />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}
export default App;
