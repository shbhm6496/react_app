import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import Addfile from "./component/AddFile";

function App() {
  // Import the functions you need from the SDKs you need

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

  async function signin() {
    //var provider = new GoogleAuthProvider();
    //signin().then((data) => console.log(data));
    signInWithPopup(getAuth(), new GoogleAuthProvider());
    // signInWithEmailAndPassword(getAuth(),"shbhm96@gmail.com","Shubham garg 25");
  }
  function signOut() {
    signOut(getAuth());
  }
  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL;
  }
  function getUserName() {
    return getAuth().currentUser.displayName;
  }
  async function saveMessage() {
    var textMessage = "Hey Duniya";
    try {
      await addDoc(collection(getFirestore(), "messages "), {
        name: "shiqb",
        text: textMessage,
        profile_pic: "svacno.png",
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log("Error in writing data ", error);
    }
  }
  function limit(vallue) {
    return 2;
  }
  function loadMessages() {
    const recentMessageQuery = query(
      collection(getFirestore(), "messages"),
      orderBy("timestamp", "desc"),
      limit(12)
    );
    onSnapshot(recentMessageQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type == "removed") {
          //deleteMessage(change.doc.id);
          console.log("delete message");
        } else {
          console.log("show message");
          // var message = change.doc.data();
          // displayMessage(
          //   change.doc.id,
          //   message.timeStamp,
          //   message.name,
          //   message.text,
          //   message.profile_pic
          // );
        }
      });
    });
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //react-google-login
  const clientId = "";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogOutButton, setShowLogoutnButton] = useState(false);
  const onLoginSucess = (res) => {
    console.log(res);
    setShowLoginButton(false);
    setShowLogoutnButton(true);
  };
  const onLoginFailure = (res) => {
    console.log(res);
  };
  const onLogoutSuccessHandler = (props) => {
    alert("sign Out sunesfully");
    setShowLoginButton(true);
    setShowLogoutnButton(false);
  };
  return (
    <div>
      <Addfile />
      <button onClick={signin}>Helo</button>
      <button onClick={saveMessage}>Helo</button>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onLoginSucess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
      {/* {showLoginButton ? (
       
      ) : null}
      {showLogOutButton ? (
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccessHandler}
        />
      ) : null} */}
    </div>
  );
}

export default App;
