
let num = (Math.floor(Math.random() * 50)) + 1;
const genButton = document.getElementById('generate');
const numSpan = document.getElementById('num');

genButton.addEventListener('click', ()=> {
    numSpan.textContent = num;
    num = (Math.floor(Math.random() * 50)) + 1;
});


