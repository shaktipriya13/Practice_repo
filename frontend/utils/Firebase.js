import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "timoraecommerce.firebaseapp.com",
  projectId: "timoraecommerce",
  storageBucket: "timoraecommerce.firebasestorage.app",
  messagingSenderId: "143371387149",
  appId: "1:143371387149:web:dc4fd3855fe3da56f63044"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider }

