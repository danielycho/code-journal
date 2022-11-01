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
  var entryData = {};
  entryData.title = entryLog.elements.title.value;
  entryData.photourl = entryLog.elements.photourl.value;
  entryData.notes = entryLog.elements.notes.value;
  entryData.EntryID = 0;
  entryData.EntryID++;
  data.nextEntryId++;
  data.entries.push(entryData);
  photo.setAttribute('src', photoDefault);
  entryLog.reset();

}

entryLog.addEventListener('submit', submitEntry);
