
const projectData = [
  {
    id: 'p-1',
    img: {
      src:'./images/Snapshoot Portfolio.png',
     
      alt: 'tonic project preview',
    },
    title: 'Tonic',
    type: ['CANOPY', 'Back End', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML',
      'CSS',
      'Ruby and Rails',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-2',
    img: {
      src: './images/Portfolio.png',
      alt: 'Multi-Post Stories project preview',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-3',
    img: {
      src: './images/Portfoli33.png',
      alt: 'Facebook 360 project preview',
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-4',
    img: {
      src: './images/Snapshoot Portfolio55.png',
      alt: 'Uber Navigation project preview',
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
];

const projectElement = document.querySelector('.preview-section');

function renderProjects() {
  projectData.forEach((data) => {
    projectElement.innerHTML += `
        
      <div class="preview-container" data-target="${data.id}">
      <i class="close" style="font-size:24px">&#x2716;</i>
      <h2>${data.title}</h2> 
     
      
      <ul class="preview-stack-item">
        <li class="canopy">${data.type[0]}</li>
        <li>${data.type[1]}</li>
        <li>${data.type[2]}</li>
      </ul>
      <div class="preview-data">
        <img class="photo-m" src="${data.img.src}" alt="${data.img.alt}" />
        <div class="preview-info">
          <p>
            ${data.description}
           
          </p>
          <div class="preview-secondary-info">
            <ul class="preview-detail">
              <li>${data.technologies[0]}</li>
              <li>${data.technologies[1]}</li>
              <li>${data.technologies[2]}</li>
              <li>${data.technologies[3]}</li>
              <li>${data.technologies[4]}</li>
              <li>${data.technologies[5]}</li>
            </ul>
            <hr>
            <div class="preview-button">
              <button href="">See Live</button>
              <button href="">See Source</button>
            </div>
          </div>
        </div>
      </div>
    </div>


        `;
  });
}

renderProjects();

const previewContainer = document.querySelector('.preview-section');
const previewBox = previewContainer.querySelectorAll('.preview-container');

document
.querySelectorAll('.big-button')
  .forEach((project) => {
    project.onclick = () => {
      previewContainer.style.display = 'flex';

      const name = project.getAttribute('data-name');

      previewBox.forEach((preview) => {
        const target = preview.getAttribute('data-target');

        if (name === target) {
          preview.classList.add('active');
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector('.close').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});





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





