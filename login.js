// // Login
// window.login=()=>{
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
   
//     if (!/\S+@\S+\.\S+/.test(email)) {
//         alert("Invalid email address");
//         return;
//     }

  
//     if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
//         alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character and be at least 8 characters long");
//         return;
//     }
    
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     })
    
//     Toast.fire({
//         icon: 'success',
//         title: 'Login successfully'
//     }).then(()=>{
//         location.replace('index.html');
//     })
    
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     })
    
//     Toast.fire({
//         icon: 'error',
//         title: errorMessage
//     })
// })

// }



import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { auth } from "./firebase.mjs";
const signin =document.getElementById('login-btn')
signin.addEventListener('click', ()=>{
    const email= document.getElementById('email').value
    const password= document.getElementById('password').value


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login Succesful")
    window.location.href='./dashboard.html'

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Something went Wrong")
  });
});