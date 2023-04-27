import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAlTeiOeriZ2b1EiqFDz3pHhO2AAI54nsk",
  authDomain: "react-netflix-clonne.firebaseapp.com",
  projectId: "react-netflix-clonne",
  storageBucket: "react-netflix-clonne.appspot.com",
  messagingSenderId: "834663141033",
  appId: "1:834663141033:web:5b4e81d58355bbbe4963b8",
  measurementId: "G-7Y6J66EMW3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);