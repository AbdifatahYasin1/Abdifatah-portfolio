
//Create two varaible that holding hamburger button and Menu

const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');


//Make event listeners

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  
});


//looping for all nav links

document.querySelectorAll('.anchor').forEach((navLinkEvent) => navLinkEvent.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
   
   
  }));


 










