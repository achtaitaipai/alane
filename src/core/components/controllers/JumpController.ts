import Component from '../../Component'
import Actor from '../../Actor'
import Body from '../physic/Body'
import BoxCollider from '../physic/BoxCollider'

export default class JumpController extends Component {
  private _body: Body | null = null
  private _boxCollider: BoxCollider | null = null
  private _lastJumpRequest: number = 0
  private _lastTimeOnFloor: number = 0
  public jumpTimeTolerence = -Infinity
  public velocity

  constructor(velocity: number, jumpTimeTolerence?: number) {
    super()
    this.velocity = velocity
    this.jumpTimeTolerence = jumpTimeTolerence ?? this.jumpTimeTolerence
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._body = actor.get(Body)
    this._boxCollider = actor.get(BoxCollider)
  }

  public update() {
    const now = window.performance.now()
    if (this._boxCollider?.onFloor) {
      this._lastTimeOnFloor = now
      if (now - this._lastJumpRequest < this.jumpTimeTolerence) this._jump()
    }
  }

  public jump() {
    const now = window.performance.now()
    if (this._boxCollider?.onFloor) this._jump()
    else if (
      now - this._lastTimeOnFloor < this.jumpTimeTolerence &&
      this._body?.yDirection === 'bottom'
    )
      this._jump()
    else this._lastJumpRequest = window.performance.now()
  }
  private _jump() {
    if (this._body) this._body.velocity.y = -this.velocity
  }
}
