

// recuperer AVNGER
var titre = document.querySelector('h2').textContent;
const body = document.querySelectorAll('body');

console.log(titre);


// // je parcour le mot
var chars = titre.split('');
// j'affiche une a une les lettres parcourue


    
// var titre2 = ["o","p","q"];

// for(var i= 0; i < chars.length; i++)

// {

// setInterval(function(){    

//     var titreCard = document.querySelector('h1');
//     titreCard.insertAdjacentHTML('beforeend', '<div>'+ lettre[i] + '</div>');
//        }, 3000);
//     var lettre =+ chars[i];
// };


chars.forEach((letter, i) => {
           setTimeout(() => {
               writeChar(letter)
           }, i * 1000);
});
    

function writeChar(char) {
    var ajoutLettre = document.querySelector('#nextlettre'); 
    ajoutLettre.innerHTML +=  char ;
}



  


