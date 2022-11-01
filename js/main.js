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
  entryData.entryId = data.nextEntryId;
  data.entries.unshift(entryData);
  data.nextEntryId++;
  photo.setAttribute('src', photoDefault);
  entryLog.reset();

}

entryLog.addEventListener('submit', submitEntry);

/*
<li>
  <div class="container padding-left"> x
    <div class="row"> x
      <div class="column-half"> x
        <img class="photo object-position" src="images/placeholder-image-square.jpg"> x
      </div>
      <div class="column-half">
        <div>
          <h2>Title</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus suscipit quidem animi iure ipsam. Facere maiores, rerum autem nesciunt voluptates tempora aut consectetur, iure sed aliquid ut? Nesciunt, voluptatibus beatae?
        </p>
      </div>
    </div>
  </div>
</li> */

function renderJournalEntry(entry) {
  var li = document.createElement('li');

  var container = document.createElement('div');
  container.setAttribute('class', 'container padding-left');
  li.appendChild(container);

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  container.appendChild(row);

  var colHalfOne = document.createElement('div');
  colHalfOne.setAttribute('class', 'column-half');
  row.appendChild(colHalfOne);

  var img = document.createElement('img');
  img.className = 'photo';
  img.setAttribute('src', entry.photourl);
  colHalfOne.appendChild(img);

  var colHalfTwo = document.createElement('div');
  colHalfTwo.setAttribute('class', 'column-half');
  row.appendChild(colHalfTwo);

  var div = document.createElement('div');
  colHalfTwo.appendChild(div);

  var title = document.createElement('h2');
  title.textContent = entry.title;
  div.appendChild(title);

  var journalEntry = document.createElement('p');
  journalEntry.textContent = entry.notes;
  colHalfTwo.appendChild(journalEntry);

  return container;
}

var ul = document.querySelector('ul');

function loadJournalEntry(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newEntry = renderJournalEntry(data.entries[i]);
    ul.appendChild(newEntry);
  }
}

window.addEventListener('DOMContentLoaded', loadJournalEntry);
