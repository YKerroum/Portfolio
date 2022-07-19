const hamburger = document.querySelector('#menu');
const hamburgerIcon = document.querySelector('#nav-bar2');
const listOfMenu = document.querySelectorAll('.box-menu');
const container = document.querySelector('#box1');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const sections = document.querySelectorAll('.sections');
const navList = document.querySelectorAll('.box-menu');
const topSection = document.querySelector('#hello');

window.onscroll = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 90) {
      current = section.getAttribute('id');
    }
  });

  navList.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};

function mobileMenuIcon() {
  if (!mediaQuery.matches) {
    topSection.classList.toggle('activated');
    container.classList.toggle('activated');
    hamburger.classList.toggle('activated');
    if (hamburgerIcon.className.includes('fa-bars')) {
      hamburgerIcon.className = 'fa fa-times fa-lg';
    } else {
      hamburgerIcon.className = 'fa fa-bars fa-lg';
    }
    for (let i = 0; i < listOfMenu.length; i += 1) {
      listOfMenu[i].classList.toggle('activated');
    }
  }
}

document.querySelectorAll('.change-menu').forEach((link) => link.addEventListener('click', mobileMenuIcon));

function resetElements() {
  if (hamburgerIcon.className.includes('fa-times')) {
    hamburgerIcon.className = 'fa fa-bars fa-lg';
  }
  if (topSection.className.includes('activated')) {
    topSection.classList.toggle('activated');
  }
  if (hamburger.className === 'activated') {
    hamburger.classList.toggle('activated');
  }
  if (container.className === 'activated') {
    container.classList.toggle('activated');
  }
  for (let j = 0; j < listOfMenu.length; j += 1) {
    if (listOfMenu[j].className.includes('activated')) {
      listOfMenu[j].classList.toggle('activated');
    }
  }
}

function checkMediaQuery() {
  if (window.innerWidth > 768) {
    resetElements();
  }
}

window.addEventListener('resize', checkMediaQuery);