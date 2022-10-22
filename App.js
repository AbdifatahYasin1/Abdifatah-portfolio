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




  //form validation in javascript
 
  const form = document.querySelector('.form');

  form.addEventListener('submit', (element) =>{
    const email = document.querySelector('.email').value;
    element.preventDefault();
    if(email.toLowerCase() === email){
      form.submit();
    } else {
      document.querySelector('.alert').textContent='please use lowercase !';
    }
  })


 



 
  //Local storage code

  const getData = JSON.parse(window.localStorage.getItem('data'));

   document.querySelector('#name').value = getData.name;
   document.querySelector('#email').value =getData.email;
   document.querySelector("#textArea").value=getData.text;

//  on submit section

  form.addEventListener('submit', (e) =>{

   e.preventDefault();

   const nameArea = document.querySelector('#name').value;
  const emailArea = document.querySelector('#email').value;
  const textFieldArea= document.querySelector("#textArea").value;

  const data = {
    name: nameArea,
    email:emailArea,
    text:textFieldArea

  }
  // displaying data

  console.log(data);

window.localStorage.setItem('data',JSON.stringify(data));

   
    
  
      
    
    });





