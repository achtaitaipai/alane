import {
  Actor,
  Anim,
  Body,
  BoxCollider,
  GridController,
  isPressed,
  Position,
} from '../../../core'
import { alanSide } from '../../loading'
import { CELLSIZE } from '../../settings'
import AnimManager from '../../utils/AnimManager'
import { playerAnims } from './animations'

export default function player(x: number, y: number) {
  const actor = new Actor()
  const pos = new Position(x * CELLSIZE, y * CELLSIZE)
  const anim = new Anim(alanSide, [0, 1, 2, 3])
  const collider = new BoxCollider(anim)
  const body = new Body()
  const controller = new GridController(60, 30)

  const animManager = new AnimManager(anim, playerAnims)
  animManager.idle('bottom')

  controller.onChangeDir = (dir) => {
    if (controller.walking) animManager.changeAnim(dir)
    else animManager.idle(dir)
  }
  controller.onStartWalking = (direction) => {
    animManager.changeAnim(direction)
  }
  controller.onStopWalking = (direction) => animManager.idle(direction)
  actor.onUpdate = function () {
    if (isPressed('ArrowRight')) controller.goTo('right')
    if (isPressed('ArrowLeft')) controller.goTo('left')
    if (isPressed('ArrowUp')) controller.goTo('top')
    if (isPressed('ArrowDown')) controller.goTo('bottom')
  }
  return actor.add(pos, anim, collider, body, controller)
}
