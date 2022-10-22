const Information = [
  {
  id: 'btn-1',
  img: { src: './images/Snapshoot Portfolio.png', alt: 'tonic project preview',},
  title: 'Tonic',
  list: ['CANOPY', 'Back End', '2015'],
  content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod consequuntur maiores impedit, qui ducimus. Tenetur beatae quasi possimus error ea fuga illo blanditiis totam ratione nemo et voluptatem explicabo ipsum, consectetur natus animi numquam magni molestias magnam aliquid suscipit.',
  technologies: ['HTML',  'CSS','Ruby and Rails','Javascript','github', 'bootstrap',],
},
{
  id: 'btn-2',
  img: {src: './images/Portfolio.png',alt: 'Multi-Post Stories project preview'},
  title: 'Multi-Post Stories',
  list: ['FACEBOOK', 'Full Stack Dev', '2015'],
  content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod consequuntur maiores impedit, qui ducimus. Tenetur beatae quasi possimus error ea fuga illo blanditiis totam ratione nemo et voluptatem explicabo ipsum, consectetur natus animi numquam magni molestias magnam aliquid suscipit.',
  technologies: [ 'HTML', 'Ruby on Rails', 'CSS', 'Javascript', 'github', 'bootstrap'],
},
{
  id: 'btn-3',
  img: {src: './images/Portfoli33.png',alt: 'Facebook 360 project preview'},
  title: 'Facebook 360',
  list: ['CANOPY', 'BACKEND DEV', '2015'],
  content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod consequuntur maiores impedit, qui ducimus. Tenetur beatae quasi possimus error ea fuga illo blanditiis totam ratione nemo et voluptatem explicabo ipsum, consectetur natus animi numquam magni molestias magnam aliquid suscipit.',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript', 'github', 'bootstrap',
  ],
},
{
  id: 'btn-4',
  img: {src: './images/Snapshoot Portfolio55.png',alt: 'Uber Navigation project preview',},
  title: 'Uber Navigation',
  list: ['UBER', 'Lead Developer', '2018'],
  content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod consequuntur maiores impedit, qui ducimus. Tenetur beatae quasi possimus error ea fuga illo blanditiis totam ratione nemo et voluptatem explicabo ipsum, consectetur natus animi numquam magni molestias magnam aliquid suscipit.',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript', 'github', 'bootstrap'],
},
];



const PopupElement = document.querySelector('.Popup-section');

function CreatePop() {
Information.forEach((item) => {
  PopupElement.innerHTML += `
  
<div class="Popup-container" data="${item.id}">
<i class="close" style="font-size:24px">&#x2716;</i>
<h2>${item.title}</h2> 


<ul class="PopUp-item">
  <li class="canopy">${item.list[0]}</li>
  <li>${item.list[1]}</li>
  <li>${item.list[2]}</li>
</ul>
<div class="PopUp-data">
  <img class="images-content" src="${item.img.src}" alt="${item.img.alt}" />
  <div class="popUp-info">
    <p>
      ${item.content}
     
    </p>
    <div class="popup-info">
      <ul class="popup-detail">
        <li>${item.technologies[0]}</li>
        <li>${item.technologies[1]}</li>
        <li>${item.technologies[2]}</li>
        <li>${item.technologies[3]}</li>
        <li>${item.technologies[4]}</li>
        <li>${item.technologies[5]}</li>
      </ul>
      <hr>
      <div class="PopUp-button">
        <button class="big-button href="">See Live</button>
        <button class="big-button  href="">See Source</button>
      </div>
    </div>
  </div>
</div>
</div>


  `;
});
}

CreatePop();

const previewContainer = document.querySelector('.Popup-section');
const previewBox = previewContainer.querySelectorAll('.Popup-container');

// displaying popup-window

document
.querySelectorAll('.big-button')
.forEach((project) => {
  project.onclick = () => {
      previewContainer.style.display = 'flex';

      const ButtonName = project.getAttribute('data-name');

      previewBox.forEach((preview) => {
          const data = preview.getAttribute('data');

          if (ButtonName === data) {
              preview.classList.add('active');
          }
      });
  };
});

// closing popup-window

previewBox.forEach((end) => {
end.querySelector('.close').onclick = () => {
  end.classList.remove('active');
  previewContainer.style.display = 'none';
};
});



