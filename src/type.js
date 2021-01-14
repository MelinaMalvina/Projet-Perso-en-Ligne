

// recuperer AVNGER
const titre = document.querySelector('h1').textContent;
const body = document.querySelectorAll('body');

console.log(titre);


// // je parcour le mot
var chars = titre.split('');
// j'affiche une a une les lettres parcourue


    
for(var i= 0; i < chars.length; i++)

{
    var lettre = chars[i];
};






setInterval(function(){    
    var titreCard = document.querySelector('h1');
    titreCard.insertAdjacentHTML('beforeend', '<div>'+ lettre[0] + '</div>');
       }, 3000);
