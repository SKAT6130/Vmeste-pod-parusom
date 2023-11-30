let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkThemeButton.onclick = function() {
  darkThemeButton.classList.add('active');
  document.body.classList.add('dark');
  lightThemeButton.classList.remove('active');
}
lightThemeButton.onclick = function() {
  darkThemeButton.classList.remove('active');
  document.body.classList.remove('dark');
  lightThemeButton.classList.add('active');
}
