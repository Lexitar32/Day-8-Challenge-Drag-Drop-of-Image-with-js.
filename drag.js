const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

// Loop through Empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'fill';
  }, 0);
}

// function dragEnd() {
//   this.className += ' same';
// }

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop(e) {
  e.preventDefault();
  this.className = 'empty';
  this.append(fill);
}