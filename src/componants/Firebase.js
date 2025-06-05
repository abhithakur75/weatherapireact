import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/web-extension"; 
const firebaseConfig = {
  apiKey: "AIzaSyBMLUKyjuyATqtWMfvQaMnChBz0qHatPwg",
  authDomain: "weatherapi-f8ad7.firebaseapp.com",
  projectId: "weatherapi-f8ad7",
  storageBucket: "weatherapi-f8ad7.appspot.com",
  messagingSenderId: "1039933298090",
  appId: "1:1039933298090:web:7cc934f26d0ccc99b1c7d3",
  measurementId: "G-Z5C5SJFYNH"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const analytics = getAnalytics(app);

export default app;

