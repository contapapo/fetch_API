document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getAPI);

let output = document.querySelector('#output');

function getText(){
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            output.innerHTML = data;
        })
        .catch(err => output.innerHTML = err);
}

function getJSON(){
    fetch('test.json')
        .then(res => res.json())
        .then(data => {
            let out = '';
            data.forEach(function(post){
                out += `<li>${post.body}</li>`
            })
            output.innerHTML = out;
        })
        .catch(err => output.innerHTML = err);
}

function getAPI(){
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            let out = '';
            let i = 1;
            data.forEach(function(user){
                out += `<li>${i++} - ${user.login}</li>`
            })
            output.innerHTML = out;
        })
        .catch(err => output.innerHTML = err)
}