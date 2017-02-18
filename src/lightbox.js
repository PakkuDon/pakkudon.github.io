import lightboxTemplate from './templates/lightbox.hbs';

var LightBox = (function() {
  var lightBox = null;
  var imageElem = null;
  var leftButton = null;
  var rightButton = null;
  var closeButton = null;
  var imageSet = [];
  var current = 0;

  const showImage = () => {
    var currentImage = imageSet[current];
    if (imageElem && currentImage) {
      imageElem.src = currentImage;
    }
  }

  return {
    // Set event handlers
    initialize: function(element) {
      lightBox = element;
      lightBox.innerHTML = lightboxTemplate();
      imageElem = lightBox.querySelector('img');

      leftButton = lightBox.querySelector('.prev-button');
      leftButton.addEventListener('click', e => {
        this.prev();
      });

      rightButton = lightBox.querySelector('.next-button');
      rightButton.addEventListener('click', e => {
        this.next();
      });

      closeButton = lightBox.querySelector('.close-button')
      closeButton.addEventListener('click', e => {
        this.close();
      });

      // Retain focus in lightbox on tab press
      closeButton.addEventListener('keydown', e => {
        if (e.code === 'Tab') {
          e.preventDefault();
          leftButton.focus();
        }
      });
      leftButton.addEventListener('keydown', e => {
        if (e.code === 'Tab' && e.shiftKey) {
          e.preventDefault();
          closeButton.focus();
        }
      })

      lightBox.addEventListener('click', e => {
        if (e.target !== imageElem && e.target.nodeName !== 'BUTTON') {
          this.close();
        }
      })
    },
    show: () => {
      lightBox.classList.add('visible');
      rightButton.focus();
    },
    close: () => {
      lightBox.classList.remove('visible');
    },
    next: () => {
      current = (current + 1) % imageSet.length;
      showImage();
    },
    prev: () => {
      current--;
      if (current < 0) {
        current = imageSet.length - 1;
      }
      showImage();
    },
    setImages: images => {
      imageSet = images;
      current = 0;
      showImage();
    }
  }
})();

module.exports = LightBox;
