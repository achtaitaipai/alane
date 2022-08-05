import Actor from '../../Actor'
import BitmapFont from '../../utils/BitmapFont'
import Position from '../physic/Transform'
import RenderingComponent from './RenderingComponent'

export default class BitmapText extends RenderingComponent {
  private _position: Position | null = null
  public color: string
  public content: string
  public fontSize: number
  public font: BitmapFont

  constructor(
    content: string,
    font: BitmapFont,
    fontSize: number = 12,
    color = '#000000'
  ) {
    super()
    this.content = content
    this.fontSize = fontSize
    this.color = color ?? '#000000'
    this.font = font
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
        this.font.fontSize = this.fontSize
        this.font.color = this.color
        this.font.draw(this.content, position.x, position.y, ctx)
      }
    }
  }

  get width() {
    this.font.fontSize = this.fontSize
    return this.content.length * this.font.fontWidth
  }

  get height() {
    return this.fontSize
  }
}
