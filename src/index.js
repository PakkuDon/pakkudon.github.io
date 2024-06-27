require('normalize.css/normalize.css');
require('./stylesheets/style.css');
const projectTemplate = require('./templates/project-stub.hbs');
const LightBox = require('./lightbox');
const smoothScroll = require('smoothscroll');
const projects = require('./data/projects');
const skills = require('./data/skills');

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
window.addEventListener('scroll', e => {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('fixed')
  }
  else {
    navbar.classList.remove('fixed');
  }
});

// Display project data
var projectListElem = document.querySelector('.project-list');
var projectStubs = projects.reverse().map(project => {
  var html = projectTemplate({ project });
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  var showProject = project => {
    LightBox.setProject(project);
    LightBox.show();
  };

  var thumbnail = tempDiv.querySelector('.project-thumbnail');
  thumbnail.addEventListener('click', () => showProject(project));
  thumbnail.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      showProject(project);
    }
  });

  return tempDiv.firstChild;
});

projectStubs.forEach(stub => projectListElem.appendChild(stub));

// Display skill data
var skillListsElem = document.querySelector('.skill-lists');
var keys = Object.keys(skills);
var tagLists = keys.map(key => `
  <div class="tag-list">
    <h3>${key}</h3>
    ${skills[key].map(skill => `<div class="tag">${skill}</div>`).join('')}
  </div>
`)
skillListsElem.insertAdjacentHTML('beforeend', tagLists.join(''));
