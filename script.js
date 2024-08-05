const titleNode = document.querySelector('.js-input-title');
const titleLenNode = document.querySelector('.input-title-len')
const descNode = document.querySelector('.js-input-desc');
const descLenNode = document.querySelector('.input-desc-len')
const publishBtnNode = document.querySelector('.publish-btn');
const postsNode = document.querySelector('.posts');

let posts = [];

titleNode.addEventListener('input', function() {
    titleLenNode.innerText = titleNode.value.length
})

descNode.addEventListener('input', function() {
    descLenNode.innerText = descNode.value.length
})

publishBtnNode.addEventListener('click', function() {
    // получить пост от пользователя
    let postFromUser = getPostFromUser();
    // записать пост от пользователя
    addPost(postFromUser);
    // отрисовать пост от пользователя
    renderPosts();
    // очистить введенные данные
    clear();
})

function getPostFromUser() {
    const postTime = getTime()
    return {
        title: titleNode.value,
        desc: descNode.value,
        time: postTime,
    } 
}

function addPost(data) {
    posts.push(data)
    console.log(posts)
}

function renderPosts() {
    let postsHTML = '';
    posts.forEach(post => {
        postsHTML += `
            <div>
                <p class="post-time">${post.time}</p>
                <p class="post-title">${post.title}</p>
                <p class="post-desc">${post.desc}</p>
            </div>
        `
    });

    postsNode.innerHTML = postsHTML;
}

function getTime() {
    const time = new Date()
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let day = time.getDate()
    let hour = time.getHours()
    let mins = time.getMinutes()
    if (day < 10) { day = `0${day}`}
    if (month < 10) { month = `0${month}`}
    if (hour < 10) { hour = `0${hour}`}
    if (mins < 10) { mins = `0${mins}`}

    return `${day}.${month}.${year} ${hour}:${mins}`
}

function clear() {
    titleNode.value = '';
    descNode.value = '';
}