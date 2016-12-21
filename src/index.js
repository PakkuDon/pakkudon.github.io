require('normalize.css/normalize.css');
require('./stylesheets/style.scss');
import fetch from 'isomorphic-fetch';
import projectTemplate from './templates/project-stub.hbs';

var projectListElem = document.querySelector('.project-list');

fetch('/src/data/projects.json')
  .then(res => res.json())
  .then(projects => {
    var projectStubs = projects.map(project => projectTemplate({ project }));
    projectListElem.insertAdjacentHTML('beforeend', projectStubs.join(''));
  });

console.log(`Hello this is ${'dog'}`);
