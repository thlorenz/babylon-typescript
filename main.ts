import Game from './lib/game'

window.addEventListener('DOMContentLoaded', initGame)

function removeExistingCanvas() : void {
  const els : HTMLCollection = document.body.children
  if (els.length > 0) document.body.removeChild(els.item(0) as Node)
}

function initCanvas() : HTMLCanvasElement {
  removeExistingCanvas()
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  return canvas
}

function initGame() : void {
  const canvas = initCanvas()
  const game = new Game(canvas)
  game
    .createScene()
    .animate()
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function accept() {
    initGame()
  })
}
