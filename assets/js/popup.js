const projectList = [
  {
    title: 'My First Project',
    imageLink: './assets/images/project1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? <br>Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus? Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
    link: { href: '#', value: 'See project' },
    githubLink: { href: '#', value: 'See Github' },
    demoLink: { href: '#', value: 'See Demo' },
  },
  {
    title: 'My Second Project',
    imageLink: './assets/images/project2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus?  <br> Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
    link: { href: '#', value: 'See project' },
    githubLink: { href: '#', value: 'See Github' },
    demoLink: { href: '#', value: 'See Demo' },
  },
  {
    title: 'My Third Project',
    imageLink: './assets/images/project3.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus? Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
    link: { href: '#', value: 'See project' },
    githubLink: { href: '#', value: 'See Github' },
    demoLink: { href: '#', value: 'See Demo' },
  },
  {
    title: 'My Fourth Project',
    imageLink: './assets/images/project4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus? Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
    link: { href: '#', value: 'See project' },
    githubLink: { href: '#', value: 'See Github' },
    demoLink: { href: '#', value: 'See Demo' },
  },
];
const projectsContainersList = document.querySelectorAll('.projects');
window.onload = () => {
  projectsContainersList.forEach((container, index) => {
    container.querySelector('.work-image').src = projectList[index].imageLink;
    container.querySelector('.title-projects').innerHTML = projectList[index].title;
    container.querySelectorAll('.tech-list button').forEach((button, i) => {
      button.innerHTML = projectList[index].technologies[i];
    });
  });
};

function fillPopup(i) {
  const projectPopup = projectList[i];
  document.querySelector('#modal-title h3').innerHTML = projectPopup.title;
  const techButtons = document.querySelectorAll('#modal-tech button');
  techButtons.forEach((button, j) => {
    button.innerHTML = projectPopup.technologies[j];
  });
  const projectImages = document.querySelectorAll('#modal-slideshow img');
  projectImages.forEach((image) => {
    image.src = projectPopup.imageLink;
  });
  document.querySelector('#modal-description').innerHTML = projectPopup.description;
}

let slideIndex = 1;
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('demo');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' activeS', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activeS';
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
document.querySelector('.next').onclick = plusSlides(1);
document.querySelector('.prev').onclick = plusSlides(-1);
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
const thumb = document.querySelectorAll('.demo');
thumb.forEach((image, index) => {
  image.onclick = currentSlide(index + 1);
});

const popupButton = document.querySelectorAll('.bouton-see');
popupButton.forEach((button, index) => {
  button.onclick = () => {
    document.querySelector('#modal-container').classList.toggle('popup');
    document.querySelector('body').classList.toggle('popup');
    fillPopup(index);
  };
});

document.querySelector('#modal-close i').onclick = () => {
  document.querySelector('#modal-container').classList.toggle('popup');
  document.querySelector('body').classList.toggle('popup');
};
