
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyATyA7QPXF3qzrxB2TTXvy1IwdVElrpR6Q",

  authDomain: "turismo-96684.firebaseapp.com",

  projectId: "turismo-96684",

  storageBucket: "turismo-96684.appspot.com",

  messagingSenderId: "107933533047",

  appId: "1:107933533047:web:3db03214bab2be30d75772"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)