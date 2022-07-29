import Component from '../../Component'
import Actor from '../../Actor'
import { lerp } from '../../utils'
import Body from '../physic/Body'

type Speed = { x: number; y: number }
type Friction = { x?: number; y?: number }

export default class Controller extends Component {
  private _body: Body | null = null
  public speed: Speed
  public friction?: Friction

  constructor(speed: Speed, friction?: Friction) {
    super()
    this.speed = speed
    this.friction = friction
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._body = actor.get(Body)
  }

  public update(dt: number) {
    if (this._body) {
      if (this.friction?.x)
        this._body.velocity.x = lerp(
          this._body.velocity.x,
          0,
          this.friction.x * dt
        )
      if (this.friction?.y)
        this._body.velocity.y = lerp(
          this._body.velocity.y,
          0,
          this.friction.y * dt
        )
    }
  }

  public left(dt: number) {
    if (this._body) {
      this._body.velocity.x -= this.speed.x * dt
    }
  }

  public right(dt: number) {
    if (this._body) {
      this._body.velocity.x += this.speed.x * dt
    }
  }
  public up(dt: number) {
    if (this._body) {
      this._body.velocity.y -= this.speed.y * dt
    }
  }

  public down(dt: number) {
    if (this._body) {
      this._body.velocity.y += this.speed.y * dt
    }
  }
}
