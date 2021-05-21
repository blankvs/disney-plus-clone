import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVN9-ilV2NVtIe-e_AEH1dWyjqFSI_CBI",
  authDomain: "green-clone.firebaseapp.com",
  projectId: "green-clone",
  storageBucket: "green-clone.appspot.com",
  messagingSenderId: "338425963643",
  appId: "1:338425963643:web:64e1f2688525b337642ede",
  measurementId: "G-DEYMFWE1N0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
