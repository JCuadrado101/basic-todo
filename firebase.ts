import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3E5hTwdFQpNnZmucODmCkkbx_ZNn93Fw",
  authDomain: "todo-app-ab488.firebaseapp.com",
  projectId: "todo-app-ab488",
  storageBucket: "todo-app-ab488.appspot.com",
  messagingSenderId: "550635337958",
  appId: "1:550635337958:web:bde24082ee9056da9a2327",
  measurementId: "G-MSXHNX3YXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);