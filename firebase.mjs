 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyDQ2HyxfePyROtTckX8Z5miRgnbBO_hnH8",
    authDomain: "smit-mini-hackathon-86ba0.firebaseapp.com",
    projectId: "smit-mini-hackathon-86ba0",
    storageBucket: "smit-mini-hackathon-86ba0.appspot.com",
    messagingSenderId: "356470699233",
    appId: "1:356470699233:web:b267d501a827b32f58b3a0",
    measurementId: "G-5JD125FY97"
  };
 // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export  const analytics = getAnalytics(app);
  export const auth=getAuth(app);
  export const db=getFirestore(app);
  export const storage=getStorage(app);
//   export {app,auth,db,storage};