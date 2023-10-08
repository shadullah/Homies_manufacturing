import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVyy414LoM2CsZv-XHRtzHO76p4g35uCg",
  authDomain: "homies-2234f.firebaseapp.com",
  projectId: "homies-2234f",
  storageBucket: "homies-2234f.appspot.com",
  messagingSenderId: "3171463736",
  appId: "1:3171463736:web:c92ebf866d868f4ef0accd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
