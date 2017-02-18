require('normalize.css/normalize.css');
require('./stylesheets/style.scss');
import fetch from 'isomorphic-fetch';
import projectTemplate from './templates/project-stub.hbs';
import tagListTemplate from './templates/tag-list.hbs';
import LightBox from './lightbox';
import smoothScroll from 'smoothscroll';

// Initialize lightbox
LightBox.initialize(document.querySelector('.lightbox'));

const navbar = document.querySelector('nav');
// Enable smooth scroll on nav links
navbar.addEventListener('click', e => {
  if (e.target.matches('a')) {
    var targetElem = document.querySelector(e.target.dataset['scrollTarget']);
    smoothScroll(targetElem);
  }
});

// Enable sticky nav on scroll
const header = document.querySelector('#home');
console.dir(header);
window.addEventListener('scroll', e => {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('fixed')
  }
  else {
    navbar.classList.remove('fixed');
  }
});

// Load project data
fetch('/src/data/projects.json')
  .then(res => res.json())
  .then(projects => {
    var projectListElem = document.querySelector('.project-list');
    var projectStubs = projects.map(project => {
      var html = projectTemplate({ project });
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      var showImages = images => {
        LightBox.setImages(images);
        LightBox.show();
      };

      var thumbnail = tempDiv.querySelector('.project-thumbnail');
      thumbnail.addEventListener('click', () => showImages(project.image_set));
      thumbnail.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          showImages(project.image_set);
        }
      });

      return tempDiv.firstChild;
    });

    projectStubs.forEach(stub => projectListElem.appendChild(stub));
  });

// Load skill data
fetch('/src/data/skills.json')
  .then(res => res.json())
  .then(skills => {
    var skillListsElem = document.querySelector('.skill-lists');
    var keys = Object.keys(skills);
    var tagLists = keys.map(key => tagListTemplate({
      title: key,
      tags: skills[key]
    }));
    skillListsElem.insertAdjacentHTML('beforeend', tagLists.join(''));
  });
