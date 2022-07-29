import {
  Actor,
  Anim,
  Body,
  BoxCollider,
  GridController,
  isPressed,
  Position,
} from '../../core'
import { alanSide } from '../loading'
import AnimManager from '../utils/AnimManager'
import { playerAnims } from './animations'

export default function player() {
  const actor = new Actor()
  const pos = new Position(0, 0)
  const anim = new Anim(alanSide, [0, 1, 2, 3])
  const collider = new BoxCollider(anim)
  const body = new Body()
  const controller = new GridController(50, 10)

  const animManager = new AnimManager(anim, playerAnims)
  anim.pause(0)
  animManager.set('bottom')

  controller.onChangeDir = (dir) => {
    animManager.set(dir)
  }
  controller.onStartWalking = () => anim.play()
  controller.onStopWalking = () => anim.pause(0)
  actor.onUpdate = function () {
    if (isPressed('ArrowRight')) controller.goTo('right')
    if (isPressed('ArrowLeft')) controller.goTo('left')
    if (isPressed('ArrowUp')) controller.goTo('top')
    if (isPressed('ArrowDown')) controller.goTo('bottom')
  }
  return actor.add(pos, anim, collider, body, controller)
}
