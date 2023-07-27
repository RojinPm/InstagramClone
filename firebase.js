// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNgfqZHkdczVF7ZDo3xdNOo2E2iGRnvK4",
  authDomain: "insta-clone-c39a3.firebaseapp.com",
  projectId: "insta-clone-c39a3",
  storageBucket: "insta-clone-c39a3.appspot.com",
  messagingSenderId: "820267625609",
  appId: "1:820267625609:web:d6f3a5e2032cf78374ea58"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage=getStorage();

export { app, db, storage };
