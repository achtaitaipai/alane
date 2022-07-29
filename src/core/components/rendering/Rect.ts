import Actor from '../../Actor'
import Position from '../physic/Transform'
import RenderingComponent from './RenderingComponent'

export default class Rect extends RenderingComponent {
  private _position: Position | null = null
  public width: number
  public height: number
  public color: string

  constructor(width: number, height: number, color: string) {
    super()
    this.width = width
    this.height = height
    this.color = color
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._position = actor.get(Position)
  }
  public update(dt: number): void {
    super.update(dt)
  }

  public render(): void {
    if (this._game) {
      const ctx = this._game.ctx
      const position = this._position
      if (ctx && position) {
        ctx.fillStyle = this.color
        ctx.fillRect(position.x, position.y, this.width, this.height)
      }
    }
  }
}
