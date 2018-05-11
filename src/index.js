import style from './index.css'

function init() {
  for (const ul of document.querySelectorAll('ul.fork')) {
    initFork(ul)
  }
}

function initFork(ul) {
  const currentPos = resetFork(ul)
  selectFork(ul, currentPos)
}

function resetFork(ul) {
  let pos = -1
  const forks = ul.querySelectorAll('li')
  for (let i = 0; i < forks.length; i++) {
    const fork = forks[i]
    if (fork.classList.contains('selected')) {
      pos = i
    }
    fork.classList.remove('selected')
  }
  return pos
}

function selectFork(ul, currentPos) {
  const forks = ul.querySelectorAll('li')
  let newPos = currentPos
  while (forks.length > 1 && newPos == currentPos) {
    newPos = Math.floor(Math.random() * forks.length)
  }

  const fork = forks[newPos]
  fork.classList.toggle('selected')
  fork.onclick = (e) => {initFork(e.target.parentElement)}
}

document.addEventListener('DOMContentLoaded', init)
