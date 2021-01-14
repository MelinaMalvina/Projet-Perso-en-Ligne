let banniere = document.querySelector('.brief'); 

banniere.insertAdjacentHTML('beforeend', '<div class="color"> EUH MAGNIFIQUE BANNIERE ? </div>')


let banniereRecup = document.querySelector('.color');



let button = document.querySelector('.color');

button.insertAdjacentHTML('beforeend', '<button class="button">OK</button>');



const clickButton = document.querySelector('button'); 

clickButton.addEventListener('click' , (even) => {
    banniereRecup.remove(); 
})

