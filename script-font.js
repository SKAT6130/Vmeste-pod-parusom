let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

sansSerifButton.onclick = function () {
  sansSerifButton.classList.add('active');
  serifButton.classList.remove('active');
  document.body.classList.remove('serif');
}
serifButton.onclick = function () {
  sansSerifButton.classList.remove('active');
  serifButton.classList.add('active');
  document.body.classList.add('serif');
}