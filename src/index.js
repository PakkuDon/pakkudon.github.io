require('normalize.css/normalize.css');
require('./stylesheets/style.scss');
import fetch from 'isomorphic-fetch';
import projectTemplate from './templates/project-stub.hbs';
import tagListTemplate from './templates/tag-list.hbs';
import LightBox from './lightbox';

// Load project data
fetch('/src/data/projects.json')
  .then(res => res.json())
  .then(projects => {
    var projectListElem = document.querySelector('.project-list');
    var projectStubs = projects.map(project => projectTemplate({ project }));
    projectListElem.insertAdjacentHTML('beforeend', projectStubs.join(''));
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

// Initialize lightbox
LightBox.initialize(document.querySelector('.lightbox'));
