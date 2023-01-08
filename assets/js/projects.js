const projectList = [
  {
    title: 'World Population Tracker',
    imageLink: './assets/images/worldp1.JPG',
    technologies: ['ReactJS', 'React-Redux', 'Jest'],
    description: '[World Population Tracker] is a go-to source website for accurate and up-to-date information on the worldwide population.It is an easy-to-use website that offers a wealth of data and insights on population trends and demographics for continents and countries around the world, all presented in a clear and visually engaging format.',
    link: { href: 'https://github.com/YKerroum/World-Population-Tracker', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/World-Population-Tracker.git', value: 'See Github' },
    demoLink: { href: 'https://world-population-tracker.onrender.com/', value: 'See Demo' },
  },
  {
    title: 'Space Travel Hub',
    imageLink: './assets/images/space1.JPG',
    technologies: ['ReactJS', 'React-Redux', 'Jest'],
    description: '🪐Space Travel Hub🪐 is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    link: { href: 'https://github.com/YKerroum/spaceTravelHub', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/spaceTravelHub.git', value: 'See Github' },
    demoLink: { href: 'spacetravelhub.onrender.com/', value: 'See Demo' },
  },
  {
    title: 'African Conference on Education 2022',
    imageLink: './assets/images/ACE2022.jpg',
    technologies: ['HTML/CSS', 'JavaScript', 'GithubPages'],
    description: 'That was my first effort, dedicated to a continental event taking place in my country.',
    link: { href: 'https://github.com/YKerroum/The-1st-African-Conference-on-Education', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/The-1st-African-Conference-on-Education.git', value: 'See Github' },
    demoLink: { href: 'https://ykerroum.github.io/The-1st-African-Conference-on-Education/', value: 'See Demo' },
  },

  {
    title: 'New movies',
    imageLink: './assets/images/movi1.JPG',
    technologies: ['JavaScript', 'BabelJS', 'Webpack'],
    description: "New movies is a website that has two versions (desktop and mobile) and allows users to check the number of movies and interact by giving a like to their favorite movies and checking for other users' comments, as well as adding their own.",
    link: { href: 'https://github.com/YKerroum/New-movies', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/New-movies.git', value: 'See Github' },
    demoLink: { href: 'https://ykerroum.github.io/New-movies/dist/', value: 'See Demo' },
  },
  {
    title: 'Awesome Books',
    imageLink: './assets/images/awesome1.JPG',
    technologies: ['HTML/CSS', 'LuxonJS', 'JavaScript'],
    description: 'This website was an excellent learning experience for me because I used JavaScript to produce and manage approximately 90% of the website, as well as OOP, modules, and local storage. The website allows visitors to see, add, and delete books from a list, as well as provide contact information.',
    link: { href: 'https://github.com/YKerroum/Awesome-Books', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/Awesome-Books.git', value: 'See Github' },
    demoLink: { href: 'https://ykerroum.github.io/Awesome-Books/', value: 'See Demo' },
  },
  {
    title: 'To Do List',
    imageLink: './assets/images/todo1.JPG',
    technologies: ['JavaScript', 'Webpack', 'jest'],
    description: 'This is a to-do list website that allows visitors to browse, add, modify, and remove tasks from a list, as well as check a task as finished and clear all completed tasks. I utilized JavaScript with OOP and modules in this project, as well as Jest to test its functionality and Webpack to bundle it and handle dependencies.',
    link: { href: 'https://github.com/YKerroum/To-Do-list', value: 'See project' },
    githubLink: { href: 'https://github.com/YKerroum/To-Do-list.git', value: 'See Github' },
    demoLink: { href: 'https://ykerroum.github.io/To-Do-list/dist/', value: 'See Demo' },
  },
];
const projectsContainer = document.querySelector('#projects-list');

let slideIndex = 1;

function showSlides(n) {
  let ind;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('demo');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (ind = 0; ind < slides.length; ind += 1) {
    slides[ind].style.display = 'none';
  }
  for (ind = 0; ind < dots.length; ind += 1) {
    dots[ind].className = dots[ind].className.replace(' activeS', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activeS';
}

function fillPopup(i) {
  const projectPopup = projectList[i];
  document.querySelector('#modal-container').innerHTML = `
 <div id="modal">
     <div id="modal-head"> 
        <div id="modal-close">
            <i id="Modal-close-button" class="fa fa-times fa-lg" onClick="popupClose()"></i>
        </div>
        <div id="modal-top-buttons">
          <div id="modal-title">
             <h3>${projectPopup.title}</h3>
          </div>
          <div id="modal-tech">
             <ul class="modal-tech-list">
               <li><button type="button">${projectPopup.technologies[0]}</button></li>
               <li><button type="button">${projectPopup.technologies[1]}</button></li>
               <li><button type="button">${projectPopup.technologies[2]}</button></li>
             </ul>
         </div>
      </div>
     </div>
      <div id="modal-slideshow">
        <div class="mySlides">
           <img src=${projectPopup.imageLink} alt="project 1 image" />
        </div>
        <div class="mySlides">
             <img src=${projectPopup.imageLink} alt="project 2 image" />
        </div>
        <div class="mySlides">
           <img src=${projectPopup.imageLink} alt="project 3 image" />
        </div> 
        <div class="mySlides">
           <img src=${projectPopup.imageLink} alt="project 4 image" />
        </div>

         <a class="prev">&#10094;</a>
             <a class="next">&#10095;</a>

        <div class="row">
          <div class="column">
             <img class="demo cursor" src=${projectPopup.imageLink} alt="The Woods">
          </div>
          <div class="column">
              <img class="demo cursor" src=${projectPopup.imageLink} alt="Cinque Terre">
          </div>
          <div class="column">
               <img class="demo cursor" src=${projectPopup.imageLink} alt="Mountains and fjords">
          </div>
          <div class="column">
             <img class="demo cursor" src=${projectPopup.imageLink} alt="Northern Lights">
          </div>
       </div>
       </div>
        <div id="modal-footer">
        <div id="modal-description">
        ${projectPopup.description}
        </div>
        <div id="modal-foot-buttons">
          <ul class="tech-list">
            <li>
                <button class="bouton color-blue" type="button">
                    <span>See live</span>
                  <i class="fa fa-external-link fa-2x" aria-hidden="true"></i>
                </button>
            </li>
            <li>
                  <button class="bouton color-blue" type="button">
                      <span>See source</span>
                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </button>
            </li>
          </ul>
        </div>
        <div id="modal-next-previous">
           <ul id="previous-next">
              <li>
              <button>
                  <i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
                          <span>Previous project</span>
              </button>
              </li>
              <li>
              <button>
                  <span>next project</span>
                <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
              </button>
            </li> 
          </ul>
          </div>
        </div>
    </div>
`;
  showSlides(slideIndex);
}

const generateProjectsList = () => {
  projectList.forEach((data, index) => {
    projectsContainer.innerHTML += `
    <div id="project${index}" class="projects">
    <img class="work-image" src=${data.imageLink} alt="${data.title}'s picture">
    <div class="work-description background-blue">
      <div class="work-title">
      <h3 class="title-projects">${data.title}</h3>
      </div>
      <div class="work-tech">
      <ul class="tech-list">
        <li><button class="bouton color-blue" type="button">${data.technologies[0]}</button></li>
        <li><button class="bouton color-blue" type="button">${data.technologies[1]}</button></li>
        <li><button class="bouton color-blue" type="button">${data.technologies[2]}</button></li>
      </ul>
      </div>
      <div class="work-see">
          <button class="bouton-see background-blue" type="button" onClick="eventListLoad(${index})"><span>See this project</span><button>
      </div>
    </div>
  </div>
`;
  });
};

function eventListLoad(index1) {
  document.querySelector('#modal-container').classList.toggle('popup');
  document.querySelector('body').classList.toggle('popup');
  fillPopup(index1);
}

window.onload = () => {
  fillPopup(0);
  projectsContainer.innerHTML = '';
  generateProjectsList();
  const projectsContainersList = document.querySelectorAll('.projects');
  projectsContainersList.forEach((_, index) => {
    eventListLoad(index);
  });
};

function popupClose() {
  document.querySelector('#modal-container').classList.toggle('popup');
  document.querySelector('body').classList.toggle('popup');
}

document.querySelector('#Modal-close-button').onclick(popupClose);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
document.querySelector('.next').onclick = plusSlides(1);
document.querySelector('.prev').onclick = plusSlides(-1);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
const thumb = document.querySelectorAll('.demo');
thumb.forEach((image, index) => {
  image.onclick = currentSlide(index + 1);
});
