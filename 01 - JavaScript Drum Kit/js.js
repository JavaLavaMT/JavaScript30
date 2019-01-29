function cleart() {
  let keys = document.querySelectorAll('.key')
  keys.forEach((key) => {
    key.classList.remove('playing')
  })
}

const sound = event => {
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  let sounds = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  let keys = document.querySelectorAll('.key')

  if (!sounds) return;

  sounds.currentTime = 0;
  sounds.play();
  key.classList.add('playing');

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTran)
  })

}

function removeTran (event) {
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing')
}

window.addEventListener('keydown', sound);
