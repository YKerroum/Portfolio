const projectList = [
  {
    title: 'My First Project',
    imageLink: './assets/images/project1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus? Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
    link: { href: '#', value: 'See project' },
    githubLink: { href: '#', value: 'See Github' },
    demoLink: { href: '#', value: 'See Demo' },
  },
  {
    title: 'My Second Project',
    imageLink: './assets/images/project2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero in. Praesentium reprehenderit aspernatur ea. Tempora delectus reprehenderit provident hic? Quia commodi eum eligendi aut veniam voluptatibus, itaque distinctio, voluptas ducimus corporis repellat libero ipsum accusamus voluptate alias qui aliquid, nemo repellendus non necessitatibus? Tempora qui, nemo reiciendis quaerat sint debitis dolores sed hic assumenda voluptatum id voluptas quia temporibus. Iusto quos quo delectus ex quae, veniam nihil molestiae fugiat ab aspernatur quibusdam dicta esse excepturi corporis, numquam dignissimos cum! Quisquam dignissimos obcaecati optio architecto? Sint, culpa, fugiat vitae et placeat atque amet incidunt consectetur quo nisi, recusandae reiciendis ducimus.',
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
