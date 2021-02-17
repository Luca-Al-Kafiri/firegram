import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACefydO2aeDnJ7_rbM_L2k1KCMinwl6hs",
  authDomain: "luca-firegram-90abd.firebaseapp.com",
  databaseURL: "https://luca-firegram-90abd-default-rtdb.firebaseio.com",
  projectId: "luca-firegram-90abd",
  storageBucket: "luca-firegram-90abd.appspot.com",
  messagingSenderId: "1097499872624",
  appId: "1:1097499872624:web:10730ad29041f46415d3b5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
