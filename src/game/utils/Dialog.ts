import {
  Actor,
  chunckArray,
  isJustPressed,
  Position,
  Rect,
  Scene,
  Text,
} from '../../core'
import { inputsNames } from '../../core/Inputs/inputTypes'

type Options = typeof defaultOptions

const defaultOptions = {
  width: 500,
  nLines: 2,
  x: 0,
  y: 0,
  fontSize: 48,
  textColor: '#000',
  backgroundColor: '#fff',
  speed: 0.025,
  lineHeight: 1.12,
  paddingX: 30,
  paddingTop: 0,
  paddingBottom: 0,
  key: 'Space' as inputsNames,
}

export default class Dialog {
  public options: Options = defaultOptions
  public isOpen = false
  private _textWidth: number
  private _height: number

  private _linesObjects?: Actor[]
  private _rectObject?: Actor
  private _charCursor = 0
  private _time = 0
  private _lineCursor = 0
  private _currentChunk?: string[] = []
  private _textChuncks?: string[][]
  private _animRunning = false

  public onComplete?: () => void

  constructor(options?: Partial<Options>) {
    this.options = { ...this.options, ...options }
    this._textWidth = this.options.width - 2 * this.options.paddingX
    this._height =
      this.options.fontSize * this.options.nLines * this.options.lineHeight +
      this.options.paddingTop +
      this.options.paddingBottom
  }

  public open(txt: string, scene: Scene) {
    if (!this.isOpen) {
      this._createDialogElements(txt, scene)
    }
  }

  private _createDialogElements(txt: string, scene: Scene) {
    this.isOpen = true
    this._linesObjects = this.textEl()
    this._rectObject = this.rectEl()
    this._textChuncks = this.textToLines(txt)

    this._charCursor = 0
    this._lineCursor = 0
    this._currentChunk = this._textChuncks.shift()
    this._time = 0
    this._animRunning = true

    this._rectObject!.onUpdate = (dt: number) => {
      if (this._animRunning) {
        this._anim(dt)
      } else {
        if (isJustPressed(this.options.key)) {
          this._onKeyPress()
        }
      }
    }

    scene.add(this._rectObject, ...this._linesObjects)
  }

  private _anim(dt: number) {
    this._time += dt
    if (this._time > this.options.speed) {
      this._time = 0
      this._nextChar()
    }
  }

  private _nextChar() {
    this._charCursor++
    this._linesObjects![this._lineCursor].get(Text)!.content =
      this._currentLine.slice(0, this._charCursor)
    if (this._charCursor > this._currentLine.length) {
      this._nextLine()
    }
  }

  private get _currentLine() {
    return this._currentChunk ? this._currentChunk[this._lineCursor] ?? '' : ''
  }

  private _nextLine() {
    this._charCursor = 0
    this._lineCursor++
    if (this._lineCursor >= this.options.nLines) {
      this._animRunning = false
      this._lineCursor = 0
    }
  }

  private _onKeyPress() {
    if (this._textChuncks!.length) {
      this._currentChunk = this._textChuncks!.shift()
      this._charCursor = 0
      this._lineCursor = 0
      this._time = 0
      this._animRunning = true
      this._linesObjects?.forEach((line) => (line.get(Text)!.content = ''))
    } else {
      this._close()
    }
  }

  private _close() {
    this._rectObject?.destroy()
    this._linesObjects?.forEach((line) => line.destroy())
    this.isOpen = false
    if (this.onComplete) {
      this.onComplete()
      this.onComplete = undefined
    }
  }

  private textToLines(txt: string) {
    txt = txt.replace(/( [\?|\!|\:])/g, (str) => str.replace(' ', '\xa0'))
    const textComponent = new Text('', 'font', this.options.fontSize, '#ffffff')
    const text = txt.split(' ')
    let result = ['']
    for (const word of text) {
      const currentTxt = result.at(-1)! + ' ' + word
      textComponent.content = currentTxt
      if (textComponent.width > this._textWidth) {
        result.push(word)
      } else {
        result[result.length - 1] = currentTxt.trim()
      }
    }
    return chunckArray(result, this.options.nLines)
  }

  private rectEl() {
    const rect = new Actor().add(
      new Position(this.options.x, this.options.y),
      new Rect(this.options.width, this._height, this.options.backgroundColor)
    )
    return rect
  }

  private textEl() {
    return Array.from({ length: this.options.nLines }).map((_, i) => {
      const actor = new Actor()
      const txt = new Text(
        '',
        'font',
        this.options.fontSize,
        this.options.textColor
      )
      const position = new Position(
        this.options.x + this.options.paddingX,
        i * this.options.lineHeight * this.options.fontSize +
          this.options.paddingTop
      )
      return actor.add(position, txt)
    })
  }
}