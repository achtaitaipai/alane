import Actor from '../../Actor'
import Component from '../../Component'
import Body from '../physic/Body'
import BoxCollider from '../physic/BoxCollider'
import Position from '../physic/Transform'

type Direction = 'left' | 'top' | 'bottom' | 'right'

export default class GridController extends Component {
  private _body: Body | null = null
  private _position: Position | null = null
  private _collider: BoxCollider | null = null
  public speed: number
  public gridSize: number
  public direction: Direction = 'bottom'
  private _oldDirection: Direction = this.direction
  private _lastRequest?: Direction
  public walking = false
  private _wasWalking = false
  private _futurPos?: { x: number; y: number }

  private _onCollideId?: number

  public onStartWalking?: (direction: Direction) => void
  public onStopWalking?: (direction: Direction) => void
  public onChangeDir?: (direction: Direction) => void

  constructor(speed: number, gridSize: number) {
    super()
    this.speed = speed
    this.gridSize = gridSize
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._body = actor.get(Body)
    this._position = actor.get(Position)
    this._collider = actor.get(BoxCollider)
    if (this._collider) {
      this._onCollideId = this._collider.onCollide.add(
        this._handleCollision.bind(this)
      )
    }
  }

  private _handleCollision({ direction }: { direction: Direction }) {
    if (direction === this.direction) {
      this._stopWalking()
    }
  }

  public beforeRemove(): void {
    super.beforeRemove()
    if (this._onCollideId) this._collider?.onCollide?.remove(this._onCollideId)
  }

  public update() {
    this._updateWalking()
    this._callEvents()
  }

  private _updateWalking() {
    if (this._position && this._futurPos && this._body) {
      if (this.direction === 'right') {
        if (this._position.x >= this._futurPos.x) {
          this._position.x = this._futurPos.x
          this._stopWalking()
        }
      } else if (this.direction === 'left') {
        if (this._position.x <= this._futurPos.x) {
          this._position.x = this._futurPos.x
          this._stopWalking()
        }
      } else if (this.direction === 'bottom') {
        if (this._position.y >= this._futurPos.y) {
          this._position.y = this._futurPos.y
          this._stopWalking()
        }
      } else if (this.direction === 'top') {
        if (this._position.y <= this._futurPos.y) {
          this._position.y = this._futurPos.y
          this._stopWalking()
        }
      }
    }
  }

  private _callEvents() {
    if (this.direction !== this._oldDirection && this.onChangeDir)
      this.onChangeDir(this.direction)
    if (this.walking && !this._wasWalking && this.onStartWalking)
      this.onStartWalking(this.direction)
    if (!this.walking && this._wasWalking && this.onStopWalking)
      this.onStopWalking(this.direction)

    this._oldDirection = this.direction
    this._wasWalking = this.walking
  }

  private _stopWalking() {
    if (!this.walking) return
    if (this._body && this._position) {
      this._body.velocity.x = 0
      this._body.velocity.y = 0
      this.walking = false
      if (this._lastRequest) {
        this.goTo(this._lastRequest)
      }
    }
  }

  public goTo(direction: Direction) {
    if (!this.walking) {
      this._startWalking(direction)
    } else {
      this._lastRequest = direction
    }
  }

  private _startWalking(direction: Direction) {
    this.direction = direction
    this._lastRequest = undefined
    if (this._collider?.isColliding(direction)) return
    switch (direction) {
      case 'left':
        if (this._body) this._body.velocity.x = -this.speed
        if (this._position) {
          const { x, y } = this._position
          this._futurPos = { x: x - this.gridSize, y }
          this.walking = true
        }
        break
      case 'right':
        if (this._body) this._body.velocity.x = this.speed
        if (this._position) {
          const { x, y } = this._position
          this._futurPos = { x: x + this.gridSize, y }
          this.walking = true
        }
        break
      case 'top':
        if (this._body) this._body.velocity.y = -this.speed
        if (this._position) {
          const { x, y } = this._position
          this._futurPos = { x, y: y - this.gridSize }
          this.walking = true
        }
        break
      case 'bottom':
        if (this._body) this._body.velocity.y = +this.speed
        if (this._position) {
          const { x, y } = this._position
          this._futurPos = { x, y: y + this.gridSize }
          this.walking = true
        }
        break
    }
    if (this._futurPos) {
      this._futurPos.x =
        Math.floor(this._futurPos.x / this.gridSize) * this.gridSize
      this._futurPos.y =
        Math.floor(this._futurPos.y / this.gridSize) * this.gridSize
    }
  }
}
