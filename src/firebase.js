import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA2DTAXSWf-geAGZO1VHmXGEFdaBRT1BYg",
  authDomain: "jhanekriswedding2027.firebaseapp.com",
  databaseURL:
    "https://jhanekriswedding2027-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jhanekriswedding2027",
  storageBucket: "jhanekriswedding2027.firebasestorage.app",
  messagingSenderId: "354558224388",
  appId: "1:354558224388:web:1337bbcbe0018268bd2d51",
  measurementId: "G-L8XBRDFX39",
});

export const auth = app.auth();
export const db = app.database();
export default app;
