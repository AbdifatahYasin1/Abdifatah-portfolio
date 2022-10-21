
//Create two varaible that holding hamburger button and Menu

const hamburger = document.querySelector('.ham-btn');
const navMenu = document.querySelector('.nav-menu');


//Make event listeners

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('activ');
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


 
 
  //Local storage 

  const getData = JSON.parse(window.localStorage.getItem('data'));

   document.querySelector('#name').value = getData.name;
   document.querySelector('#email').value =getData.email;
   document.querySelector("#textArea").value=getData.text;

 

  form.addEventListener('submit', (event) =>{

   event.preventDefault();

   const nameField = document.querySelector('#name').value;
  const emailField = document.querySelector('#email').value;
  const textAreaField= document.querySelector("#textArea").value;

  const data = {
    name: nameField,
    email:emailField,
    text:textAreaField

  }
  console.log(data);

window.localStorage.setItem('data',JSON.stringify(data));

   
   
    
    });




