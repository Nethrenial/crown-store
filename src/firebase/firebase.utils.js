import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLtJpTBT2EvvX6_nKrVJx8CNIklu5Ahp4",
  authDomain: "crown-store-4c130.firebaseapp.com",
  databaseURL: "https://crown-store-4c130.firebaseio.com",
  projectId: "crown-store-4c130",
  storageBucket: "crown-store-4c130.appspot.com",
  messagingSenderId: "730662000670",
  appId: "1:730662000670:web:450e579a4cc6a0aa53360f",
  measurementId: "G-J5MYJHBTL7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
