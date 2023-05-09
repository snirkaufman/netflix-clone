import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaKD1OuWTaH0PEdtuCc0ZY9EMEgtSAx9Y",
  authDomain: "netflix-clone-9d4d6.firebaseapp.com",
  projectId: "netflix-clone-9d4d6",
  storageBucket: "netflix-clone-9d4d6.appspot.com",
  messagingSenderId: "341952761078",
  appId: "1:341952761078:web:7b6901d5f33c59894430d7",
  measurementId: "G-8ZXMP2V0TF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
