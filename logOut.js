import { auth } from "./firebase.mjs"
import { signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const btn =document.getElementById('logOut')

btn.addEventListener('click', ()=>{

    signOut(auth).then(() => {
        alert('You Have Successfully LogOut Your Account')

        window.location.href='./index.html'
    }).catch((error) => {
        // An error happened.
    });
})