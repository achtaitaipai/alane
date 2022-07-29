import Actor from '../../Actor'
import Position from '../physic/Transform'
import RenderingComponent from './RenderingComponent'

interface Options {
  playing?: boolean
  looping?: boolean
  fps?: number
  start?: number
  onAnimationEnd?: (actor: Actor) => void
}

type PlayOptions = Omit<Options, 'playing'>

export default class Anim extends RenderingComponent {
  private _position: Position | null = null
  public spriteSheet: () => ImageBitmap[]
  private _currentAnim: number[]
  private _cursor = 0
  public fps = 5
  private _nextFrameTime = 0
  private _delayBetweenFrame: number = 0
  private _playing = true
  private _looping = true
  public onAnimationEnd?: (actor: Actor) => void
  public flipX = false
  public flipY = false

  constructor(
    getSpriteSheet: () => ImageBitmap[],
    currentAnim: number[],
    options?: Options
  ) {
    super()
    this.spriteSheet = getSpriteSheet
    this._currentAnim = currentAnim
    const { fps, playing, looping, start, onAnimationEnd } = { ...options }
    this.fps = fps ?? this.fps
    this._playing = playing ?? this.playing
    this._looping = looping ?? this._looping
    this._cursor = start ?? 0
    this.onAnimationEnd = onAnimationEnd
  }

  public start(actor: Actor): void {
    super.start(actor)
    this._position = actor.get(Position)
  }

  public update(dt: number): void {
    super.update(dt)
  }

  public render(): void {
    if (this.playing) this._anim()
    this._flipImage()
  }

  private _flipImage() {
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
    return this.spriteSheet()[this._currentAnim[this._cursor]]
  }

  private _anim() {
    this._delayBetweenFrame = 1000 / this.fps
    const now = window.performance.now()
    if (now > this._nextFrameTime) {
      this.frame++
    }
  }

  public play(options?: PlayOptions) {
    const { fps, looping, start, onAnimationEnd } = { ...options }
    this.fps = fps ?? this.fps
    this._looping = looping ?? this._looping
    this._cursor = start ?? 0
    this._delayBetweenFrame = 1000 / this.fps
    this.onAnimationEnd = onAnimationEnd
    const now = window.performance.now()
    this._nextFrameTime = now + this._delayBetweenFrame
    this._setPlaying(true)
  }

  private _setPlaying(state: boolean) {
    this._playing = state
    if (!this.playing && this.onAnimationEnd && this._actor)
      this.onAnimationEnd(this._actor)
  }

  public pause(frame?: number) {
    this._setPlaying(false)
    this.frame = frame ?? this.frame
  }

  get frame() {
    return this._cursor
  }

  set frame(f: number) {
    this._cursor = f
    this._resetTimer()
    if (this._cursor >= this._currentAnim.length) {
      if (this._looping) this._cursor = 0
      else {
        this._cursor = this._currentAnim.length - 1
        this._setPlaying(false)
      }
    }
  }

  private _resetTimer() {
    const now = window.performance.now()
    this._nextFrameTime = now + this._delayBetweenFrame
  }

  get playing() {
    return this._playing
  }

  get width() {
    return this.spriteSheet()[0].width
  }

  get height() {
    return this.spriteSheet()[0].height
  }
  set anim(frames: number[]) {
    this._currentAnim = frames
    this._cursor = Math.min(this._cursor, frames.length - 1)
  }
}
