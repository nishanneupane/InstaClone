import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyDMrafxpmp0Z2zwmDzTbCmAyuntgDYUrKM",

    authDomain: "instagram-f50cd.firebaseapp.com",

    projectId: "instagram-f50cd",

    storageBucket: "instagram-f50cd.appspot.com",

    messagingSenderId: "513332771334",

    appId: "1:513332771334:web:13446429ab74135dde2187"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
