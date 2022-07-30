import {
  Actor,
  Body,
  BoxCollider,
  Game,
  isJustPressed,
  Position,
  Rect,
  Scene,
} from './core'
import player from './game/Player/player'
import Dialog from './game/utils/Dialog'
import './style.css'
const sizeCell = 60

export const game = new Game(32 * 60, 18 * 60)

function obstacle() {
  const actor = new Actor()
  const pos = new Position(180, 10)
  const rect = new Rect(60, 60, 'blue')
  const body = new Body()
  const collider = new BoxCollider(rect)
  return actor.add(pos, rect, body, collider)
}

function cell(x: number, y: number, size: number) {
  const actor = new Actor()
  const pos = new Position(x + 1, y + 1)
  const rect = new Rect(size - 2, size - 2, 'grey')
  return actor.add(pos, rect)
}

const dialogBox = new Dialog({ paddingTop: 20, paddingBottom: 20 })

const mainScene = () => {
  const scene = new Scene()
  for (let y = 0; y < game.height; y += sizeCell) {
    for (let x = 0; x < game.width; x += sizeCell) {
      scene.add(cell(x, y, sizeCell))
    }
  }

  scene.onUpdate = () => {
    if (isJustPressed('Enter'))
      dialogBox.open('coucou ça va ? Est-ce que ça fonctionne ?', scene)
  }

  return scene.add(player(), obstacle())
}

game.scene = mainScene()

game.start()
