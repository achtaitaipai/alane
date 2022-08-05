import {
  Actor,
  Anim,
  Body,
  BoxCollider,
  Position,
  Scene,
  Sprite,
} from '../../core'
import { dialogBox } from '../loading'
import { CELLSIZE } from '../settings'

export const collectedItems = new Map<string, number>()

export function addItem(name: string) {
  const n = collectedItems.get(name) ?? 0
  collectedItems.set(name, n + 1)
}

export function removeItem(name: string) {
  const n = collectedItems.get(name) ?? 1
  collectedItems.set(name, n - 1)
}

export function hasItem(name: string, quantity = 1) {
  const n = collectedItems.get(name) ?? 0
  return n >= quantity
}

interface ItemDatas {
  x: number
  y: number
  name: string
  display: Sprite | Anim
  sound?: HTMLAudioElement
  dialog?: string
}

export function createItem(
  { x, y, name, sound, dialog, display }: ItemDatas,
  scene: Scene
) {
  const actor = new Actor()
  const position = new Position(x * CELLSIZE, y * CELLSIZE)
  const body = new Body()
  const collider = new BoxCollider(display)
  actor.add(position, display, body, collider)
  collider.onCollide.add(() => {
    addItem(name)
    sound?.play()
    if (dialog) {
      dialogBox.open(dialog, scene, () => actor.destroy())
    } else {
      actor.destroy()
    }
  })
  return actor
}
