var photoInput = document.querySelector('#photo-url');
var photo = document.querySelector('.photo');

function handlePhoto(event) {
  photo.setAttribute('src', event.target.value);
}

photoInput.addEventListener('input', handlePhoto);
