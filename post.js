function LoadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    console.log(postContainer)
    for(const post of posts){
        const postDiv = document.createElement('div');
        console.log(post)
        postDiv.classList.add('post')
        postDiv.innerHTML= `
        <h4>User-${post.userId}</h5>
        <h5>Post:  ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
       
    }

}
LoadData()

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function createAPost(){

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}