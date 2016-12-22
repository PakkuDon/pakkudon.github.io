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
      imageElem = lightBox.querySelector('img');

      var leftButton = document.createElement('button');
      leftButton.type = 'button';
      leftButton.classList.add('prev-button');
      leftButton.addEventListener('click', e => {
        this.prev();
      });
      leftButton.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';

      var rightButton = document.createElement('button');
      rightButton.type = 'button';
      rightButton.classList.add('next-button');
      rightButton.addEventListener('click', e => {
        this.next();
      });
      rightButton.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';

      var closeButton = document.createElement('button');
      closeButton.type = 'button';
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', e => {
        this.close();
      });
      closeButton.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;

      lightBox.insertBefore(leftButton, lightBox.firstChild);
      lightBox.appendChild(rightButton);
      lightBox.appendChild(closeButton);
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
