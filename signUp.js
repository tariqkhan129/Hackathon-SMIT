
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { auth,app,db } from "./firebase.mjs";
import { doc, setDoc   } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

const btn=document.getElementById("signup-btn");

btn.addEventListener('click',()=>{
    const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeatPassword").value;

        if (firstName.length > 20 ) {
                  alert("First Name must be atmost 20 characters");
                  return;
              }
              if (firstName.length < 3 ) {
                  alert(" First Name must be atleast 3 characters");
                  return;
              }
              if (lastName.length > 20 ) {
                  alert("Last Name must be atmost 20 characters");
                  return;
              }
              if (lastName.length < 1 ) {
                  alert(" Last Name must be atleast 1 characters");
                  return;
              }
          

              if (!/(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
                alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long");
                return;
            }

              const userdata={
                firstNamename:firstName,
                lastName:lastName,
                email:email,
                password:password,
            }
      
createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    try {
      const docRef = await setDoc(doc(db, "users", user.uid),{

          
          ...userdata,
         user:user.uid
          
      } 
      );
      console.log("Document written with ID: ", user.uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // ...
    console.log(user);
   
    alert("Sign up Succesful")
    window.location.href='./login.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    
    console.log(errorMessage , errorCode);
    if (password !== repeatPassword) {
      alert("passwords do not match.");
    }
    else{

    
    alert("Something went Wrong while sign Up")}
  });
});
    