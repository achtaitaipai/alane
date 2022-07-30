import Component from '../../Component'
import Actor from '../../Actor'
import Body, { Direction } from './Body'
import Position from './Transform'
import { Observer } from '../../utils'

interface Size {
  width: number
  height: number
}

interface Offset {
  x: number
  y: number
}

interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export default class BoxCollider extends Component {
  private _position: Position | null = null
  private _size: Size
  private _offset: Offset
  public onCollide = new Observer<{ direction: Direction; collider: Actor }>()

  constructor(size: Size, offset?: Offset) {
    super()
    this._size = size
    this._offset = offset ?? { x: 0, y: 0 }
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._position = actor.get(Position)
  }

  public isOverlapping(...tags: string[]) {
    const actors = this._scene?.getAllByTags(...tags)
    const results: Actor[] = []
    actors?.forEach((actor) => {
      if (actor.id !== this._actor?.id) {
        const box = actor.get(BoxCollider)?.box
        if (box && this._rectCollision(this.box, box)) results.push(actor)
      }
    })
    if (results.length === 0) return false
    return results
  }

  public isColliding(direction: Direction) {
    if (!this._actor?.get(Body)?.solid) return null
    const actors = this._scene?.getAllByComponent(Body)
    if (actors) {
      for (const actor of actors) {
        const rect1 = this._zoneCollision(direction)
        const rect2 = actor.get(BoxCollider)!
        const isSolid = actor.get(Body)?.solid
        if (
          isSolid &&
          actor.id !== this._actor?.id &&
          this._rectCollision(rect1, rect2)
        ) {
          this.collide(direction, actor, true)
          return rect2
        }
      }
    }
    return null
  }

  public collide(direction: Direction, collider: Actor, initial = false) {
    this.onCollide.notify({ direction, collider })
    if (initial && this._actor)
      collider
        .get(BoxCollider)
        ?.collide(this._inverseDirection(direction), this._actor)
  }

  private _inverseDirection(direction: Direction) {
    switch (direction) {
      case 'bottom':
        return 'top'
      case 'top':
        return 'bottom'
      case 'left':
        return 'right'
      case 'right':
        return 'left'
    }
  }

  private _rectCollision(rect1: Rect, rect2: Rect) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y
    )
  }

  private _zoneCollision(direction: Direction) {
    switch (direction) {
      case 'left':
        return {
          x: this.box.x - 1,
          y: this.box.y + 1,
          width: 1,
          height: this.box.height - 2,
        }
      case 'right':
        return {
          x: this.box.x + this.box.width,
          y: this.box.y + 1,
          width: 1,
          height: this.box.height - 2,
        }
      case 'top':
        return {
          x: this.box.x,
          y: this.box.y,
          width: this.box.width - 2,
          height: 1,
        }
      case 'bottom':
        return {
          x: this.box.x + 1,
          y: this.box.y + this.box.height,
          width: this.box.width - 2,
          height: 1,
        }
    }
  }

  get box() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }

  get x() {
    return this._position?.x ?? 0 + this._offset.x
  }

  get y() {
    return this._position?.y ?? 0 + this._offset.y
  }

  get width() {
    return this._size.width - 2 * this._offset.x
  }

  get height() {
    return this._size.height - 2 * this._offset.y
  }

  get onFloor(): boolean {
    return this.isColliding('bottom') !== null
  }
  get onCeil(): boolean {
    return this.isColliding('top') !== null
  }
  get onWall(): boolean {
    return (
      this.isColliding('left') !== null || this.isColliding('right') !== null
    )
  }
}
