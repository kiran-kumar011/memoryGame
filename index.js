// random li generator
let firstFlip = null;
let secondFlip = null;
let movesAndTime = document.querySelector('.movesAndTime');
let container = document.querySelector(".container");
console.dir(container);
const lists = document.querySelector('ul');
const listElm = [`<li class="card" data-type='bomb'><i class="fas fa-bomb"></i></li>`,
  `<li class="card" data-type='gem'><i class="fas fa-gem"></i></li>`,
  `<li class="card" data-type='bicycle'><i class="fas fa-bicycle"></i></li>`,
  `<li class="card" data-type='bolt'><i class="fas fa-bolt"></i></li>`,
  `<li class="card" data-type='plane'><i class="fas fa-paper-plane"></i></li>`,
  `<li class="card" data-type='jet'><i class="fas fa-fighter-jet"></i></li>`,
  `<li class="card" data-type='leaf'><i class="fab fa-canadian-maple-leaf"></i></li>`,
  `<li class="card" data-type='anchor'><i class="fas fa-anchor"></i></li>`,
  `<li class="card" data-type='bomb'><i class="fas fa-bomb"></i></li>`,
  `<li class="card" data-type='gem'><i class="fas fa-gem"></i></li>`,
  `<li class="card" data-type='bicycle'><i class="fas fa-bicycle"></i></li>`,
  `<li class="card" data-type='bolt'><i class="fas fa-bolt"></i></li>`,
  `<li class="card" data-type='plane'><i class="fas fa-paper-plane"></i></li>`,
  `<li class="card" data-type='jet'><i class="fas fa-fighter-jet"></i></li>`,
  `<li class="card" data-type='leaf'><i class="fab fa-canadian-maple-leaf"></i></li>`,
  `<li class="card" data-type='anchor'><i class="fas fa-anchor"></i></li>`];

lists.innerHTML = listElm.sort(value => 0.5 - Math.random()).join('');
var isFlipped = false;
var pass = null;

function displayCard(e) {
  const type = e.target;
  console.log(e.target);
  if (e.target.className === 'card' && !isFlipped) {
    e.target.classList.add('cardDisabled');
    compareElm(type);
  }
}
var moves = 0;

function compareElm(elm) {
  if (firstFlip === null) {
    firstFlip = elm;
    return;
  } else if (secondFlip === null) {
    secondFlip = elm;
    moves = moves + 1;
    if (firstFlip.dataset.type !== secondFlip.dataset.type) {
      const firstFlipcopy = firstFlip; const secondFlipcopy = secondFlip;
      setTimeout(() => {
        firstFlipcopy.classList.remove('cardDisabled');
        secondFlipcopy.classList.remove('cardDisabled');
        isFlipped = !isFlipped;
      }, 1000);
      firstFlip = null;
      secondFlip = null;
      isFlipped = !isFlipped;
    } else if (firstFlip.dataset.type === secondFlip.dataset.type) {
      firstFlip = null;
      secondFlip = null;
      pass += 0;
      clear();
    }
  }
  function clear() {
    if(pass === 8) {
      console.log("hello");
      container.innerHTML = "";
      container.innerHTML = `<h1>You won</h1>`;
      clearInterval(displayTime, 0)
    }
  }
  const movesCount = document.querySelector('.movesCount');
  movesCount.textContent = `${moves} Moves`;
  movesAndTime.appendChild(movesCount);
}
setInterval(displayTime, 1000);
lists.addEventListener('click', displayCard);

// displaying the timer
let counter = 0;
const timer = document.querySelector('.timer');

function convertSeconds(s) {
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return `${min} min : ${sec} sec`;
}
function displayTime() {
  counter++;
  timer.textContent = convertSeconds(counter);
}
