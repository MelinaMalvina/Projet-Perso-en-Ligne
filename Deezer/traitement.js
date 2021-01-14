
    // // titre 
    // agnes.forEach((album) => {
    //     console.log(album.title);

    // });

    // // cover
    // agnes.forEach((album) => {
    //     console.log(album.album.cover);
    // });

    // // // preview 
    // agnes.forEach((album) => {
    //     console.log(album.preview);
    // })
    // // nombre duration
    // agnes.forEach((album) => {
    //     console.log(album.duration);
    // })

//     // ajoute le titre d'une musique
//     var titreCard = document.querySelector('#titre');
//     titreCard.insertAdjacentHTML('beforeend', '<div>'+ agnes[1].title + '</div>');

//     // ajout la cover de la musique 
//    var coverCard = document.querySelector("#cover"); 
//     coverCard.innerHTML='<img src="'+agnes[1].album.cover+'">';


//    // ajout d'un extrait de musique 
//     var musiqueCard = document.querySelector('#musique'); 
//     musiqueCard.innerHTML='<audio controls src="'+ agnes[1].preview +'"></audio>'; 





// ajouter une card dans du JAVAScript 
// var ajoutCard = document.querySelector('#nextCard'); 
// ajoutCard.innerHTML= ' <div class="card-group" style="width : 20rem"><div class="card"> <div class="card-header" id="titre"> <div>'+ agnes[1].title + '</div> </div><div class="card-body"><h3 class="card-title" id="cover">Titre de la première carte</h5><img src="'+ agnes[1].album.cover +'">   </div><div class="card-footer" id="musique"><audio controls src="'+ agnes[1].preview +'"></audio></div></div></div>';

// faire en sorte d'ajouté plusieur carte avec une boucle

for (var i = 0; i < agnes.length; i++) {
    console.log(i);
    var ajoutCard = document.querySelector('#nextCard'); 
    ajoutCard.innerHTML += ' <div class="card-group" style="width : 20rem"><div class="card"> <div class="card-header" id="titre"> <div>'+ agnes[i].title + '</div> </div><div class="card-body"><h3 class="card-title" id="cover"></h5><img src="'+ agnes[i].album.cover +'">   </div><div class="card-footer" id="musique"><audio controls src="'+ agnes[i].preview +'"></audio></div></div></div>';
};  
