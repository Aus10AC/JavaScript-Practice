const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const mute = document.querySelector('.mute');
const unmute = document.querySelector('.unmute');


play.addEventListener('click', () => {
  pause.style.display = "inline";
  play.style.display = "none";
})

pause.addEventListener('click', () => {
  play.style.display = "inline";
  pause.style.display = "none";
})

mute.addEventListener('click', () => {
  mute.style.display = "none";
  unmute.style.display = "inline";
})

unmute.addEventListener('click', () => {
  mute.style.display = "inline";
  unmute.style.display = "none";
})
