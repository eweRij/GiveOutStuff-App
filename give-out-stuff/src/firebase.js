import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc5IzhWzrw7OpbCdkFwN4-Vyc35uSen3o",
  authDomain: "giveoutstuff-644d6.firebaseapp.com",
  databaseURL: "https://giveoutstuff-644d6.firebaseio.com",
  projectId: "giveoutstuff-644d6",
  storageBucket: "giveoutstuff-644d6.appspot.com",
  messagingSenderId: "696136453060",
  appId: "1:696136453060:web:699864fd1884933e153291",
  measurementId: "G-VTQP64K4YJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   });

// firebase
//   .auth()
//   .signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
