'use strict';

document.querySelector('#upload-file').addEventListener('change', function () {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadSelectImage = document.querySelector('#upload-select-image');

  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');

  document.querySelector('.upload-form-cancel').addEventListener('click', function () {
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');
  });

  var image = document.querySelector('.filter-image-preview');
  var filters = document.querySelectorAll('input[name="upload-filter"]');

  for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', function (event) {
      image.className = 'filter-image-preview ' + 'filter-' + event.target.value;
    });
  }

  var btnPlus = document.querySelector('.upload-resize-controls-button-inc');
  var btnMinus = document.querySelector('.upload-resize-controls-button-dec');
  var imageSize = document.querySelector('.upload-resize-controls-value');


  btnMinus.addEventListener('click', function () {
    if (!(parseInt(imageSize.value, 10) === 25)) {
      imageSize.value = parseInt(imageSize.value, 10) - 25 + '%';
      image.style.transform = 'scale(0.' + parseInt(imageSize.value, 10) + ')';
    }
  });

  btnPlus.addEventListener('click', function () {
    if (!(parseInt(imageSize.value, 10) >= 75)) {
      imageSize.value = parseInt(imageSize.value, 10) + 25 + '%';
      image.style.transform = 'scale(0.' + parseInt(imageSize.value, 10) + ')';
    } else if (((parseInt(imageSize.value, 10) === 75))) {
      imageSize.value = parseInt(imageSize.value, 10) + 25 + '%';
      image.style.transform = 'scale(1)';
    }
  });
});
