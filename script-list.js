let cards = document.querySelector('.cards');
let cardListButton = document.querySelector('.card-view-button-list');
let cardGridButton = document.querySelector('.card-view-button-grid');

cardListButton.onclick = function () {
  cards.classList.add('list');
  cardListButton.classList.add('active');
  cardGridButton.classList.remove('active');
}

cardGridButton.onclick = function () {
  cards.classList.remove('list');
  cardListButton.classList.remove('active');
  cardGridButton.classList.add('active');
  
}