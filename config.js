import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD6pgFsF-9o-2m1GZpl-I9oNkqkm4za87U",
  authDomain: "project71-2b977.firebaseapp.com",
  projectId: "project71-2b977",
  storageBucket: "project71-2b977.appspot.com",
  messagingSenderId: "1075927806945",
  appId: "1:1075927806945:web:7720e22f0f61d2ea0c58a0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
