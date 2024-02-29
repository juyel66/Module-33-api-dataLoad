function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => comments(data))
}

function comments(display){
    const commentContainer=document.getElementById('commentContainer')
    for(const comment_data of display){
        const commentValue=document.createElement('div')
        console.log(comment_data)
        commentValue.classList.add('comment_data')
        commentValue.innerHTML=`<h1>postId:-${commentValue.postId}</h1>
        <p>All description: ${commentValue.body}</p>`
        commentContainer.appendChild(commentValue)


        
    }

}
// another way 

const loadComment2 = async() => {
   try{
    const res =await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.jfson();
    console.log(data)
   }
   catch(error){
    console.log('please load your data')
   }
}

