const teamCard = document.querySelector('.teamCard');
const playerList = document.querySelector('.playerList');
const addIcon = document.querySelector('.fa-plus');

// calls the list item
let li = playerList.childNodes[2];
// creates an input element to add to the list item
let input = document.createElement('input');

let newPlayer;
let newInput;

addIcon.addEventListener('click', ( ) => {
  input =
        `
        <input onclick="event" class="playerInput" placeholder="add player...">
        `
        // adds an input element inside of the list element
  li.innerHTML = input;
});


// checking to see if user clicked enter or clicked the 'add' Icon
input.addEventListener('click', () => {
  li.texContent = input.value;
});
