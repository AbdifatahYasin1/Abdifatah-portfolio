const data = [
  {image:"images/Portfoli33.png", title:"Tonic", info :['FACEBOOK',' Backend Dev','2015'], descript:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
  technologies :['Html',' css','Javascript']
},

{image:"images/Portfoli33.png", title:"Multi-Post Stories", info :['FACEBOOK',' Full stack Dev','2015'], descript:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
technologies :['Html',' css','Javascript']
},

{image:"images/Portfoli33.png", title:"Facebook 360", info :['FACEBOOK',' Full stack Dev','2015'], descript:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
technologies :['Html',' css','Javascript']
},

{image:"images/Portfoli33.png", title:"Uber Navigation", info :['FACEBOOK',' Full stack Dev','2015'], descript:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
technologies :['Html',' css','Javascript']
}

]
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




  



 










