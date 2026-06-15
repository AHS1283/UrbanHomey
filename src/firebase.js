import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCMLpWL7BmKS_9lUveSkSEGhnYbVKCNTAE",
  authDomain: "urbanhomey-e47f2.firebaseapp.com",
  projectId: "urbanhomey-e47f2",
  storageBucket: "urbanhomey-e47f2.firebasestorage.app",
  messagingSenderId: "302278509458",
  appId: "1:302278509458:web:eda8c9aaedf8be47ebf74b",
  measurementId: "G-354GLXQZBK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);