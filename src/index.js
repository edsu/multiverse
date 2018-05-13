import style from './index.css'

class Multiverse {

  static init(e) {
    if (!e) {
      e = document
    }
    for (const ul of e.querySelectorAll('ul.multiverse')) {
      let multiverse = new Multiverse(ul)
      multiverse.choose()
    }
  }

  constructor(ul) {
    this.ul = ul
    if (this.ul.dataset.multiverseTimer) {
      this.setTimer(parseInt(this.ul.dataset.multiverseTimer))
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
    const multiverses = this.ul.querySelectorAll('li')
    for (let i = 0; i < multiverses.length; i++) {
      const multiverse = multiverses[i]
      if (multiverse.classList.contains('selected')) {
        pos = i
      }
      multiverse.classList.remove('selected')
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
  if (! global.__MULTIVERSE_LOADED) {
    Multiverse.init(document)
    global.__MULTIVERSE_LOADED = true
  }
})

global.Multiverse = Multiverse
