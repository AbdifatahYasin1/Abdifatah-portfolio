
//Create two varaible that holding hamburger button and Menu

const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');


//Make event listeners

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  
});


//looping for nav link

document.querySelectorAll('.anchor').forEach((navLink) => navLink.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
   
   
  }));


 










