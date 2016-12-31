import lightboxTemplate from './templates/lightbox.hbs';

var LightBox = (function() {
  var lightBox = null;
  var imageElem = null;
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

      var leftButton = lightBox.querySelector('.prev-button');
      leftButton.addEventListener('click', e => {
        this.prev();
      });

      var rightButton = lightBox.querySelector('.next-button');
      rightButton.addEventListener('click', e => {
        this.next();
      });

      var closeButton = lightBox.querySelector('.close-button')
      closeButton.addEventListener('click', e => {
        this.close();
      });
    },
    show: () => {
      lightBox.classList.add('visible');
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
