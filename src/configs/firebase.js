// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDKPCaTOZc5L0CZdJEmCCvLfucJ2pou0aw",
  authDomain: "social-authentication-63923.firebaseapp.com",
  projectId: "social-authentication-63923",
  storageBucket: "social-authentication-63923.appspot.com",
  messagingSenderId: "296521178645",
  appId: "1:296521178645:web:fbd7b9a03a3d460be0381c",
  measurementId: "G-4DECV9CQ9M",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
