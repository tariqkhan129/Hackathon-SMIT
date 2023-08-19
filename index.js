import { collection, addDoc ,  getDoc, getDocs , deleteDoc , doc,  updateDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { app,auth, db } from "./firebase.mjs";

const querySnapshot = await getDocs(collection(db, "posts"));
var posts = document.getElementById('posts');

querySnapshot.forEach((doc) => {
    posts.innerHTML += `<div class="result">
    <div class="text">
    <img src="https://c8.alamy.com/comp/2G7FT77/default-avatar-photo-placeholder-grey-profile-picture-icon-man-in-t-shirt-2G7FT77.jpg">
    <div><h1>${doc.data().title}</h1>
    <h6>
    Tariq Khan 19-Aug-2023 
    </h6></div></div>
     <p>${doc.data().Description}</p>

    <div class="btn"><button>See all from this User</button></div>
    </div>`
    
});