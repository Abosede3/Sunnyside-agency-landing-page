const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.hamburger');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close(){
  mainMenu.style.top = '100%';
}