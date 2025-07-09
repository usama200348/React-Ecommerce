import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFpcQ-p-zce4ROqo_Z6MHdmTYLUi0DVRw",
  authDomain: "loginsignup-7e02d.firebaseapp.com",
  projectId: "loginsignup-7e02d",
  storageBucket: "loginsignup-7e02d.firebasestorage.app",
  messagingSenderId: "172861721334",
  appId: "1:172861721334:web:6a5afbd94c582008747ad7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;