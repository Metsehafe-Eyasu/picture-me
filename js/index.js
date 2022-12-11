const form = document.getElementById('post-form');
const dialog = document.getElementById('post-select');
const postsDiv = document.getElementById('posts');
const postText = document.getElementById('text');
const showModal = document.getElementById('show-modal');
const submitBtn = document.getElementById('submitBtn')
const cancel = document.getElementById('cancelBtn')

// Functions
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}




// Event Listeners
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const uploadedImg = form.file.files[0];
    let div = document.createElement('div');
    div.classList.add('post');
    getBase64(uploadedImg).then((data) =>{
        div.innerHTML = `
        <div class="poster">
            <i class="fa-regular fa-circle-user"></i>
            <span class="poster-title">User</span>
        </div>
        <div class="post-img-container">
            <img src="${data}" alt="Post Image" class="post-img">
        </div>
        <div class="post-text">
            <span>User</span>
            <p> ${postText.value} </p>
        </div>
        <div class="post-interaction">
            <div class="left">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-share-nodes"></i>
            </div>
            <div class="right">
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
        `;
        postsDiv.prepend(div);
    })
    dialog.close();
})
showModal.addEventListener('click', e => {
    form.reset();
    dialog.showModal();
})
cancel.addEventListener('click', e => {
    dialog.close();
})