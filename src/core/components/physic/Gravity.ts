import Component from '../../Component'
import Body from './Body'
import Actor from '../../Actor'
import BoxCollider from './BoxCollider'

export default class Gravity extends Component {
  private _body: Body | null = null
  private _boxCollider: BoxCollider | null = null
  public gravity: number

  constructor(gravity: number) {
    super()
    this.gravity = gravity
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._body = actor.get(Body)
    this._boxCollider = actor.get(BoxCollider)
  }

  public update() {
    if (this._body) {
      this._body.velocity.y += this.gravity
      if (this._boxCollider?.onFloor)
        this._body.velocity.y = Math.min(this._body.velocity.y, 0)
    }
  }
}
