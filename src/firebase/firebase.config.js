// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkcAStdqQ9GZuyX3yIEqIE88pfNPShf0I",
  authDomain: "module-51-46929.firebaseapp.com",
  projectId: "module-51-46929",
  storageBucket: "module-51-46929.appspot.com",
  messagingSenderId: "525064088515",
  appId: "1:525064088515:web:1c751a0e909e72df3e2b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
