const grid = document.getElementById('gridContainer');
const mainHeader = document.getElementById('mainHeader');
const sideMenu = document.getElementById('sideMenu');
const chat = document.getElementById('chat');
const main = document.getElementById('main');
const spotify = document.getElementById('spotify');
const sideContainer = document.getElementById('sideContainer');

// Creates new SubMenu
const subMenu = document.createElement('section');
subMenu.setAttribute("id", "subMenu");
subMenu.innerHTML = "subMenu";
subMenu.style.boxShadow =

// Keep Spotify closed until interaction
spotify.style.display = "none";

sideMenu.addEventListener('click', (event) => {
  if ( event.target === sideContainer.childNodes[1]) {
    grid.appendChild(subMenu);
    chat.style.gridColumn = "5 / 24";
  }
  if ( event.target === sideContainer.childNodes[7].nextElementSibling ) {
    sideMenu.style.gridRow = "3 / 38";
    subMenu.style.gridRow = "3 / 38";
    chat.style.gridRow = "3 / 38";
    spotify.style.display = "block";
  }
});
