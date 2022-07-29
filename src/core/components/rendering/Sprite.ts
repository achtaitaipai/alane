import Actor from '../../Actor'
import Position from '../physic/Transform'
import RenderingComponent from './RenderingComponent'

export default class Sprite extends RenderingComponent {
  private _position: Position | null = null
  private _getImage: () => HTMLImageElement
  public flipX = false
  public flipY = false

  constructor(getImage: () => HTMLImageElement) {
    super()
    this._getImage = getImage
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._position = actor.get(Position)
  }
  public update(dt: number): void {
    super.update(dt)
  }

  public render() {
    const x = Math.floor(this._position?.x ?? 0),
      y = Math.floor(this._position?.y ?? 0)
    const scaleX = this.flipX ? -1 : 1,
      scaleY = this.flipY ? -1 : 1,
      translateX = this.flipX ? -this.width : 0,
      translateY = this.flipY ? -this.height : 0
    this._game?.ctx.save()
    this._game?.ctx.translate(x, y)
    this._game?.ctx.scale(scaleX, scaleY)
    this._game?.ctx.drawImage(this._image, translateX, translateY)
    this._game?.ctx.restore()
  }

  private get _image() {
    return this._getImage()
  }
  get width() {
    return this._getImage().width
  }

  get height() {
    return this._getImage().height
  }
}
