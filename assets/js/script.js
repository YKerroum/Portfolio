function mobileMenuIcon() {
    var hamburger=document.querySelector("#menu");
  var hamburgerIcon=document.querySelector("#nav-bar2");
  var listOfMenu=document.querySelectorAll(".box-menu");
  var container=document.querySelector("#box1");
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (!mediaQuery.matches) {
    container.classList.toggle("activated");
    hamburger.classList.toggle("activated");
      if(hamburgerIcon.className.includes("fa-bars")){
        hamburgerIcon.className="fa fa-times fa-lg";
      }
      else {
        hamburgerIcon.className="fa fa-bars fa-lg";
      }
      for(let i=0; i<listOfMenu.length; i++) {
      listOfMenu[i].classList.toggle("activated");
      }
  }
}

function resetElements() {
  if(hamburgerIcon.className.includes("fa-times")){
    hamburgerIcon.className= "fa fa-bars fa-lg";
  }
  if(hamburger.className.includes("activated")){
    hamburger.classList.toggle("activated");
  }
  if(container.className.includes("activated")){
    container.classList.toggle("activated");
  }
   for(let i=0; i<listOfMenu.length; i++) {
   if(container.className.includes("activated")){
  listOfMenu[i].classList.toggle("activated");
   }
}
}


function checkMediaQuery() {
 
  if (window.innerWidth > 768) {
  resetElements();
  }
}

window.addEventListener("resize", checkMediaQuery());