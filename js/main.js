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
  var newSubmit = renderJournalEntry(entryData);
  ul.prepend(newSubmit);
}

entryLog.addEventListener('submit', submitEntry);

/*
<li>
    <div class="row"> x
      <div class="column-half"> x
        <img class="photo" src="images/placeholder-image-square.jpg"> x
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
</li> */

function renderJournalEntry(entry) {
  var li = document.createElement('li');

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  li.appendChild(row);

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
  div.className = 'div-style';
  colHalfTwo.appendChild(div);

  var title = document.createElement('h2');
  var edit = document.createElement('i');
  edit.className = 'fa-regular fa-pen-to-square fa-2x';
  title.textContent = entry.title;
  div.appendChild(title);
  div.appendChild(edit);

  var journalEntry = document.createElement('p');
  journalEntry.textContent = entry.notes;
  colHalfTwo.appendChild(journalEntry);

  return row;
}

var ul = document.querySelector('ul');

function loadJournalEntry(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newEntry = renderJournalEntry(data.entries[i]);
    ul.appendChild(newEntry);
  }
}

window.addEventListener('DOMContentLoaded', loadJournalEntry);

// If I click new-entry-button it should bring up journal-form
// ul should be hidden
// If I click nav-style it should bring up entries.
// ul should be visible
// journal form should be hidden

var entries = document.querySelector('#entries');
var newEntry = document.querySelector('.new-entry-button');
var allView = document.querySelectorAll('.view');
var saveButton = document.querySelector('#save-button');

function viewSwitch(event) {
  for (var i = 0; i < allView.length; i++) {
    if (allView[i].getAttribute('data-view') === event.target.getAttribute('data-view')) {
      allView[i].className = 'view';
    } else {
      allView[i].className = 'view hidden';
    }
  }
}

saveButton.addEventListener('click', viewSwitch);
entries.addEventListener('click', viewSwitch);
newEntry.addEventListener('click', viewSwitch);

// function handleEdit(event) {
//   console.log('event.target is', event.target);
//   console.log('event.target.tagName is', event.target.tagName);

//   var closest = event.target.closest('ul');
//   if (event.target.tagName === 'I') {
//     console.log('closest parent is', closest);
//   }
// }

// ul.addEventListener('click', handleEdit);
