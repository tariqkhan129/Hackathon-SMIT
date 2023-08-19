import { collection, addDoc, getDoc, getDocs, deleteDoc, doc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { db, auth } from "./firebase.mjs";

const querySnapshot = await getDocs(collection(db, "posts"));
var posts = document.getElementById('posts');

document.getElementById('dashboard-btn').addEventListener('click', async () => {
    var title = document.getElementById('title').value;
    var Description = document.getElementById('Description').value;
    try {
        const uid = auth.currentUser.uid;
        await addDoc(collection(db, "posts"), {
            title: title,
            Description: Description,
            // postedDate: new Date(),
            userId: uid
        });
        // this function will reload the page automatically, we don't need to refresh the page to show the result
        window.location.reload();
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

const postDelete = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "posts", id));
    // this function will reload the page automatically, we don't need to refresh the page to show the result of deleted item 
    window.location.reload();
}
window.postDelete = postDelete;

const postUpdate = async (id) => {
    console.log(id);
    const updateList = doc(db, "posts", id);
    var updatedTitle = prompt('Enter Your Updated Title');
    var updatedDescription = prompt('Enter Your Updated Description');
    // Set the "capital" field of the city 'DC'
    await updateDoc(updateList, {
        title: updatedTitle,
        Description: updatedDescription
    }).then(() => {
        // this function will reload the page automatically, we don't need to refresh the page to show the result of updated item 
        window.location.reload();
    });
}
window.postUpdate = postUpdate;

const user = auth.currentUser;
const userPostsQuery = query(collection(db, "posts"), where("userId", "==", user.uid));
const userPostsSnapshot = await getDocs(userPostsQuery);








userPostsSnapshot.forEach((doc) => {
    // console.log(doc.data)
    posts.innerHTML += `<div class="result">
    <div class="text">
    <img src="https://c8.alamy.com/comp/2G7FT77/default-avatar-photo-placeholder-grey-profile-picture-icon-man-in-t-shirt-2G7FT77.jpg">
    <div><h1>${doc.data().title}</h1>
    <h6>
    Tariq Khan 19-Aug-2023
    </h6></div></div>
     <p>${doc.data().Description}</p>

    <div class="btn"><button onclick='postDelete("${doc.id}")'>Delete</button><button onclick='postUpdate("${doc.id}")'>Update</button></div>
    </div>`
});