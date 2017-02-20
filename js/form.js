'use strict';

var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadOverlay = document.querySelector('.upload-overlay');
var formCansel = uploadOverlay.querySelector('.upload-form-cancel');

formCansel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

var image = uploadOverlay.querySelector('.filter-image-preview');
var filters = uploadOverlay.querySelectorAll('input[name="upload-filter"]');

for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', function (event) {
    image.className = 'filter-image-preview ' + 'filter-' + event.target.value;
  });
}

var btnPlus = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
var btnMinus = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
var imageSize = uploadOverlay.querySelector('.upload-resize-controls-value');

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

uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
});
