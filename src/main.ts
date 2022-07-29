import { Actor, Body, BoxCollider, Game, Position, Rect, Scene } from './core'
import player from './game/Player/player'
import './style.css'

const game = new Game(400, 300)

function obstacle() {
  const actor = new Actor()
  const pos = new Position(180, 0)
  const rect = new Rect(60, 60, 'blue')
  const body = new Body()
  const collider = new BoxCollider(rect)
  return actor.add(pos, rect, body, collider)
}

const mainScene = () => {
  const scene = new Scene()
  return scene.add(player(), obstacle())
}

game.scene = mainScene()

game.start()
