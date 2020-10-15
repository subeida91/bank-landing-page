const btnhamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector("body");

let navigationAnimation = function(){

if(header.classList.contains('open')){ //close hamburger menu
  header.classList.remove("open");
  fadeElems.forEach(function(element){
      body.classList.remove('noscroll');
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
  });
}
else { //open hamburger menu
    header.classList.add("open");
    fadeElems.forEach(function(element){
        body.classList.add('noscroll');
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
        
});
};
}

btnhamburger.onclick = navigationAnimation;