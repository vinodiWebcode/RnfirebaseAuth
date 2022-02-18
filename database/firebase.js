// database/firebaseDb.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaNztduInYGtXFVDq4NOnHnilHtm7RTQU",
  authDomain: "rnfirebaseauth-ab8fd.firebaseapp.com",
  projectId: "rnfirebaseauth-ab8fd",
  storageBucket: "rnfirebaseauth-ab8fd.appspot.com",
  messagingSenderId: "747867705745",
  appId: "1:747867705745:web:edc9ed71abf84d93354a30"
};

firebase.initializeApp(firebaseConfig);

export default firebase;