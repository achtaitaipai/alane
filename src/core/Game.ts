import drawLoadingBar from './loadingBar'
import Loop from './Loop'
import Drawing from './Drawing'
import Scene from './Scene'
import { keyBoardInputsUpdate, startListeningInputs } from './Inputs'
import { getProgress } from './Assets'

export default class Game {
  private _drawing: Drawing
  private _gameLoop: Loop
  private _loadingLoop: Loop

  private _currentScene: Scene | null = null

  constructor(width: number, height: number) {
    this._drawing = new Drawing(width, height)
    this._gameLoop = new Loop(this._gameUpdate.bind(this))
    this._loadingLoop = new Loop(this._loadingUpdate.bind(this))
  }

  private _gameUpdate(dt: number) {
    this._drawing.clear()
    if (!this._currentScene?.inProgress) this._currentScene?.start(this)
    this._currentScene?.update(dt)
    keyBoardInputsUpdate()
  }

  private _loadingUpdate() {
    const progress = getProgress()
    if (progress >= 1) {
      this._loadingLoop.stop()
      this._gameLoop.start()
    } else {
      drawLoadingBar(this.ctx, this.canvas, progress)
    }
  }

  public start() {
    startListeningInputs()
    this._loadingLoop.start()
  }

  get ctx() {
    return this._drawing.ctx
  }

  get canvas() {
    return this._drawing.canvas
  }

  set scene(scene: Scene) {
    this._currentScene?.exit()
    this._currentScene = scene
  }

  get width() {
    return this.canvas.width
  }

  get height() {
    return this.canvas.height
  }
}
