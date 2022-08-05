export default class BitmapFont {
  private _characters: string[]
  private _spriteSheet: () => ImageBitmap[]
  public fontSize = 12
  public color = 'black'

  constructor(spriteSheet: () => ImageBitmap[], characters: string[]) {
    this._spriteSheet = spriteSheet
    this._characters = characters
  }

  private _getCharacter(character: string) {
    const index = this._characters.indexOf(character)
    if (index === -1) return undefined
    const image = this._spriteSheet()[index]
    return image
  }

  public draw(
    text: string,
    x: number,
    y: number,
    context: CanvasRenderingContext2D
  ) {
    if (text.length === 0) return
    const canvas = document.createElement('canvas')
    canvas.height = this.fontHeight
    canvas.width = text.length * this.fontWidth
    const ctx = canvas.getContext('2d')!
    ctx.imageSmoothingEnabled = false
    const chars = text.split('')
    chars.forEach((c, index) => {
      const image = this._getCharacter(c)
      if (image) {
        ctx.drawImage(
          image,
          index * this.fontWidth,
          0,
          this.fontWidth,
          this.fontHeight
        )
      }
    })

    ctx.globalCompositeOperation = 'source-in'
    ctx.fillStyle = this.color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(canvas, x, y)
  }

  get fontWidth() {
    const originalWidth = this._spriteSheet()[0].width
    const originalHeight = this._spriteSheet()[0].height
    return (originalWidth * this.fontSize) / originalHeight
  }

  get fontHeight() {
    return this.fontSize
  }
}
