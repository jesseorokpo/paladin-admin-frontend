// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApGzSvhZN0hluZdBKY_I6EDe_whu5oU4o",
  authDomain: "schoolpaladinng.firebaseapp.com",
  projectId: "schoolpaladinng",
  storageBucket: "schoolpaladinng.appspot.com",
  messagingSenderId: "659939454227",
  appId: "1:659939454227:web:8cf630f13662755c73bee6",
  measurementId: "G-FRF1RKFYYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
