//import connect from "./component/connect.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  async function signIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    //console.log("lnslnx");
  }
  function signOutUser() {
    signOut(getAuth());
  }
  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL;
  }
  function getUserName() {
    return getAuth().currentUser.displayName;
  }
  function isUserSignIn() {
    return !!getAuth().currentUser;
  }
  async function saveMessage(messageText) {
    try {
      await addDoc(collection(getFirestore(), "messages"), {
        name: getUserName(),
        text: messageText,
        profilePicUrl: getProfilePicUrl(),
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log("Errror writing new message to firebase database", error);
    }
  }
  return (
    <div>
      <button onClick={signIn}>NHelo Worfld</button>
      <button onClick={saveMessage}>Hey There</button>
    </div>
  );
}

export default App;
