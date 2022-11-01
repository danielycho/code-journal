var photoInput = document.querySelector('#photourl');
var photo = document.querySelector('.photo');
var photoDefault = 'images/placeholder-image-square.jpg';

function handlePhoto(event) {
  photo.setAttribute('src', event.target.value);
}

photoInput.addEventListener('input', handlePhoto);

var entryLog = document.querySelector('#entry');

function submitEntry(event) {
  event.preventDefault();
  var singleData = {
    title: $title.value,
    photoURL: $imageLink.value,
    notes: $notes.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(singleData);
  // var entryData = {};
  // entryData.title = entryLog.elements.title.value;
  // entryData.photourl = entryLog.elements.photourl.value;
  // entryData.notes = entryLog.elements.notes.value;
  // entryData.entryId = data.nextEntryId;
  // console.log(typeof entryData, typeof data.entries);
  // console.log(entryData);
  // data.entries.unshift(entryData);
  // data.nextEntryId++;
  photo.setAttribute('src', photoDefault);
  entryLog.reset();

}

entryLog.addEventListener('submit', submitEntry);

var $imageLink = document.querySelector('input[name="photourl"]');
var $notes = document.querySelector('textarea[name = "notes"]');

var $title = document.querySelector('input[name="title"]');
