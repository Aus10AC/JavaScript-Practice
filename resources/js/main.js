const dropdownButton = document.getElementById('dropbtn');
const menu = document.getElementById('dropdown');

const openNav = () => {
  menu.style.display = "block";
}

const closeNav = () => {
  menu.style.display = "none";
}

const click = dropdownButton.addEventListener('click', (event) => {
  openNav();
})
