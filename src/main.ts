import { Actor, Game, Position, Rect, Scene } from './core'
import { drawGrid, grid } from './game/datas/grid'
import player from './game/actors/player'
import { CELLSIZE, DEBUG, FULLHEIGHT, FULLWIDTH } from './game/settings'
import './style.css'

export const game = new Game(FULLWIDTH, FULLHEIGHT)

function cell(x: number, y: number, size: number) {
  const border = 2
  const actor = new Actor()
  const pos = new Position(x + border / 2, y + border / 2)
  const rect = new Rect(size - border, size - border, 'white')
  return actor.add(pos, rect)
}

const mainScene = () => {
  const scene = new Scene()
  if (DEBUG) {
    for (let y = 0; y < game.height; y += CELLSIZE) {
      for (let x = 0; x < game.width; x += CELLSIZE) {
        scene.add(cell(x, y, CELLSIZE))
      }
    }
  }
  drawGrid(grid, scene)
  return scene.add(
    player()
    // obstacle(scene),
    // item(
    //   {
    //     x: 3,
    //     y: 3,
    //     name: 'truc',
    //     sound: jumpFx,
    //     dialog: 'cool un truc',
    //     display: new Sprite(keySprite),
    //   },
    //   scene
    // ),
    // item(
    //   {
    //     x: 2,
    //     y: 2,
    //     name: 'truc',
    //     dialog: `chouette j'ai trouvé un coeur qui bouge`,
    //     display: new Anim(heartSprite, [0, 1]),
    //   },
    //   scene
    // )
  )
}

game.scene = mainScene()

game.start()
