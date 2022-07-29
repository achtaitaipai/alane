import Actor from '../../Actor'
import Position from '../physic/Transform'
import RenderingComponent from './RenderingComponent'

export default class Text extends RenderingComponent {
  private _position: Position | null = null
  public color: string
  public content: string
  public fontSize: number
  public font: string
  private _ctx: CanvasRenderingContext2D

  constructor(
    content: string,
    font = 'monospace',
    fontSize: number = 12,
    color = '#000000'
  ) {
    super()
    this.content = content
    this.fontSize = fontSize
    this.color = color ?? '#000000'
    this.font = font ?? 'monospace'

    const canvas = document.createElement('canvas')
    this._ctx = canvas.getContext('2d')!
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
      const transform = this._position
      if (ctx && transform) {
        ctx.textBaseline = 'top'
        ctx.fillStyle = this.color
        ctx.font = `${this.fontSize}px ${this.font}`
        ctx.fillText(this.content, transform.x, transform.y)
      }
    }
  }

  get width() {
    this._ctx.font = `${this.fontSize}px font`
    return this._ctx.measureText(this.content).width
  }

  get height() {
    this._ctx.textBaseline = 'top'
    this._ctx.font = `${this.fontSize}px font`
    return (
      this._ctx.measureText(this.content).fontBoundingBoxDescent -
      this._ctx.measureText(this.content).fontBoundingBoxAscent
    )
  }
}
