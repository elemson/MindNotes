import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyArbSF685X3AS9ka1P0RzjluD8senctfSo",
  authDomain: "mind-93188.firebaseapp.com",
  projectId: "mind-93188",
  storageBucket: "mind-93188.appspot.com",
  messagingSenderId: "370246247325",
  appId: "1:370246247325:web:88bbc96a5aa28e32bc4574"
}

firebase.initializeApp(config);

export default firebase.database();