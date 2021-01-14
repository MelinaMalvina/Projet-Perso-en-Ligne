console.log('hello');




const roundPhoto = document.querySelector('img');




roundPhoto.addEventListener("click", (even) => {
 roundPhoto.className ="round-photo";

});

roundPhoto.addEventListener("mouseenter", (even) => {
    roundPhoto.className="shadow";
});