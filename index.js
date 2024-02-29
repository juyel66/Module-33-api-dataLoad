function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json())
.then(data =>displayData(data))
}

function displayData(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        console.log(user.name)
    }
}