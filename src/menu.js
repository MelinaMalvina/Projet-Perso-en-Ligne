// let menu = document.querySelector('#menu'); 

// menu.className = "fixed-position";



// menu.addEventListener('scroll', (even) => {
    
   
//    });


    
  
    let menu = document.querySelector("#menu");
    // on mémorise la position de nav
    let posititionBase = menu.offsetTop;

    function sticky(){
      // position du curseur au scroll
      var posCurseur = this.pageYOffset;

      // je teste la différence de distance entre le scroll et nav
      if(posititionBase-posCurseur<1){
        menu.style.position = "fixed";
       menu.style.top = 0;
        menu.style.zIndex = 999;
        menu.className = "fixed-position"
      }
      if(posCurseur<70){
        menu.style.position = "relative";
      }
    }

    // evenement
    window.addEventListener("scroll", sticky);
 