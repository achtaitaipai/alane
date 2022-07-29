export default class Drawing {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  public width: number
  public height: number

  constructor(width: number, height: number) {
    this.canvas = this._createCanvas(width, height)
    this.ctx = this.canvas.getContext('2d')!
    this.width = width
    this.height = height
  }

  public clear(color?: string) {
    if (color) {
      this.rect(0, 0, this.width, this.height, color)
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height)
    }
  }

  public rect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  private _createCanvas(width: number, height: number) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    this._stylizeCanvas(canvas, width, height)
    window.onresize = (_) => this._scaleCanvas(width, height, canvas)
    document.body.appendChild(canvas)
    return canvas
  }

  private _stylizeCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ) {
    canvas.style.setProperty('-webkit-optimize-contrast', 'pixelated')
    canvas.style.setProperty('-ms-interpolation-mode', 'nearest-neighbor')
    canvas.style.setProperty('image-rendering', 'crisp-edges')
    canvas.style.setProperty('image-rendering', 'pixelated')
    this._scaleCanvas(width, height, canvas)
  }

  private _scaleCanvas(
    width: number,
    height: number,
    canvas: HTMLCanvasElement
  ) {
    const canvasRatio = width / height
    const screenRatio = window.innerWidth / window.innerHeight
    if (canvasRatio < screenRatio) {
      canvas.style.setProperty('height', '90%')
      canvas.style.setProperty('width', 'auto')
    } else {
      canvas.style.setProperty('height', 'auto')
      canvas.style.setProperty('width', '90%')
    }
  }
}
