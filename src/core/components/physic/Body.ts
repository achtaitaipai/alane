import Component from '../../Component'
import Actor from '../../Actor'
import BoxCollider from './BoxCollider'
import Position from './Transform'

export type Direction = 'left' | 'right' | 'top' | 'bottom'

interface BodyOptions {
  maxVelocity?: number
  solid?: boolean
}

export default class Body extends Component {
  private position: Position | null = null
  private _boxCollider: BoxCollider | null = null
  public velocity = { x: 0, y: 0 }
  public maxVelocity?: number
  public solid = true

  constructor(options?: BodyOptions) {
    super()
    if (options) {
      const { maxVelocity, solid } = options
      if (maxVelocity) this.maxVelocity = maxVelocity
      this.solid = solid ?? true
    }
  }

  public start(actor: Actor): void {
    super.start(actor)
    this.position = actor.get(Position)
    this._boxCollider = actor.get(BoxCollider)
  }

  public update(dt: number): void {
    const transform = this.position

    this._clampVelocity(dt)

    if (transform) {
      transform.x += this.velocity.x * dt
      const xDir = this.xDirection
      if (xDir && this.solid) {
        const collider = this._boxCollider?.isColliding(xDir)
        if (collider && xDir === 'right')
          transform.x = collider.x - (this._boxCollider?.width ?? 0)
        if (collider && xDir === 'left')
          transform.x = collider.x + collider.width
      }

      transform.y += this.velocity.y * dt
      const yDir = this.yDirection
      if (yDir && this.solid) {
        const collider = this._boxCollider?.isColliding(yDir) ?? 0
        if (collider && yDir === 'top')
          transform.y = collider.y + collider.height
        if (collider && yDir === 'bottom')
          transform.y = collider.y - (this._boxCollider?.height ?? 0)
      }
    }
  }

  private _clampVelocity(dt: number) {
    const velocity = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)
    if (this.maxVelocity && velocity > this.maxVelocity) {
      const factor = (this.maxVelocity / velocity) * dt
      this.velocity.x = this.velocity.x * factor
      this.velocity.y = this.velocity.y * factor
    }
  }

  get xDirection() {
    if (this.velocity.x > 0) return 'right'
    if (this.velocity.x < 0) return 'left'
    return null
  }

  get yDirection() {
    if (this.velocity.y > 0) return 'bottom'
    if (this.velocity.y < 0) return 'top'
    return null
  }
}
