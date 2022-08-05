import { Actor, Body, BoxCollider, Position, Rect } from '../../core'
import { CELLSIZE, DEBUG } from '../settings'

export default function wall(x: number, y: number) {
  const actor = new Actor()
  const position = new Position(x * CELLSIZE, y * CELLSIZE)
  const rect = new Rect(CELLSIZE, CELLSIZE, DEBUG ? 'green' : 'transparent')
  const collider = new BoxCollider(rect)
  const body = new Body()
  return actor.add(position, rect, collider, body)
}
