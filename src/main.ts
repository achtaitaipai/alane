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

const dialogBox = new Dialog({ paddingTop: 20, paddingBottom: 20 })

function obstacle(scene: Scene) {
  const actor = new Actor()
  const pos = new Position(180, 10)
  const rect = new Rect(60, 60, 'blue')
  const body = new Body()
  const collider = new BoxCollider(rect)
  collider.onCollide.add(() => {
    console.log('oeoeoe')
    dialogBox.open('salut Comment ça va ? bien ou quoi ?', scene)
  })
  return actor.add(pos, rect, body, collider)
}

function cell(x: number, y: number, size: number) {
  const actor = new Actor()
  const pos = new Position(x + 1, y + 1)
  const rect = new Rect(size - 2, size - 2, 'grey')
  return actor.add(pos, rect)
}

const mainScene = () => {
  const scene = new Scene()
  for (let y = 0; y < game.height; y += sizeCell) {
    for (let x = 0; x < game.width; x += sizeCell) {
      scene.add(cell(x, y, sizeCell))
    }
  }

  scene.onUpdate = () => {}

  return scene.add(player(), obstacle(scene))
}

game.scene = mainScene()

game.start()
