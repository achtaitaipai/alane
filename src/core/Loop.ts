export default class MainLoop {
  private _animationFrameRequestId: number | null = null
  private _lastTime?: number
  public updateFunction: (dt: number) => void

  constructor(update: (dt: number) => void) {
    this.updateFunction = update
  }

  public start() {
    this._requestAnim()
  }

  public stop() {
    if (this._animationFrameRequestId)
      cancelAnimationFrame(this._animationFrameRequestId)
  }

  private _requestAnim() {
    this._animationFrameRequestId = requestAnimationFrame(this._loop.bind(this))
  }

  private _loop(now: number) {
    this._requestAnim()
    if (this._lastTime) {
      const deltaTime = (now - this._lastTime) / 1000
      this.updateFunction(deltaTime)
    }
    this._lastTime = now
  }
}
