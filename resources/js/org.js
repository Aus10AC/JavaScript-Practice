const teamCard = document.querySelector('.teamCard');
const playerList = document.querySelector('.playerList');
const addIcon = document.querySelector('.fa-plus');

let button = playerList.childNodes[3];
button.style.display = "none";
// creates an input element to add to the list item
let input = document.createElement('input');

addIcon.addEventListener('click', () => {
  let li = playerList.childNodes[2];
  let lis = playerList.childNodes[1];
  input =
        `
        <input onclick="event" type="text" id="a" class="playerInput" placeholder="add player...">
        `
        // adds an input element inside of the list element
  li.innerHTML = input;
  playerList.removeChild(lis);
  playerList.style.textAlign = "center";
  button.style.display = "inline-block";
  return input;
});

// captures value
button.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[1];
  ul.innerHTML = 'asdf';
})

// checking to see if user clicked enter or clicked the 'add' Icon
