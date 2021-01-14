var course = document.querySelector('#userInput');
var button = document.querySelector('button');



var courseListe = [];

console.log(course.value);



button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(course.value);
    courseListe.push(course.value);
    var afficherListe = document.querySelector('#maListeDeCourse ul');
    afficherListe.insertAdjacentHTML('beforeend', '<li> '+ course.value + '</li>');

});

button.addEventListener('click',() => {
    courseListe.remove();
});
