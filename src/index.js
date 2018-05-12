import style from './index.css'

class Fork {

  static init(e) {
    if (!e) {
      e = document
    }
    for (const ul of e.querySelectorAll('ul.fork')) {
      let fork = new Fork(ul)
      fork.choose()
    }
  }

  constructor(ul) {
    this.ul = ul
    if (this.ul.dataset.forkTimer) {
      this.setTimer(parseInt(this.ul.dataset.forkTimer))
    }
    }

  choose() {
    const currentPos = this.reset()
    const choices = this.ul.querySelectorAll('li')

    let newPos = currentPos
    while (choices.length > 1 && newPos == currentPos) {
      newPos = Math.floor(Math.random() * choices.length)
    }

    const choice = choices[newPos]
    choice.classList.toggle('selected')
    choice.onclick = (e) => {this.choose()}

  }

  reset() {
    let pos = -1
    const forks = this.ul.querySelectorAll('li')
    for (let i = 0; i < forks.length; i++) {
      const fork = forks[i]
      if (fork.classList.contains('selected')) {
        pos = i
      }
      fork.classList.remove('selected')
    }
    return pos
  }

  setTimer(ms) {
    this.timerId = setInterval(() => {this.choose()}, ms)
  }

  resetTimer() {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  Fork.init(document)
})

global.Fork = Fork
