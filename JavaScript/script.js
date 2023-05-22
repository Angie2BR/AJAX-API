const btn = document.querySelector('#btn');
const output = document.querySelector('.container');
console.log(btn);

const url = 'temp1.json';

btn.addEventListener('click', ()=>{
    console.log('Clicked!');
    fetch(url).then(res => res.json()).then(data => {
        output.innerHTML = JSON.stringify(data);
    })
})

