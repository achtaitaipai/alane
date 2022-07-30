type onImageLoadFunc = (
  id: number,
  img: HTMLImageElement,
  columns?: number,
  rows?: number
) => void

const images: Map<number, HTMLImageElement> = new Map()
const spriteSheets: Map<number, ImageBitmap[]> = new Map()
let _numberOfAssetsToload = 0
let _lastId: number = 0

function _newId() {
  return _lastId++
}

export async function loadFont(fontUrl: string, name: string) {
  const font = new FontFace(name, `url(${fontUrl})`)
  _numberOfAssetsToload++
  await font.load()
  _numberOfAssetsToload--
  ;(document.fonts as any).add(font)
}

export function loadImage(url: string) {
  const id = _addToLoad(url, _onImageLoad)
  return getSprite(id)
}

export function loadSpriteSheet(url: string, columns: number, rows: number) {
  const id = _addToLoad(url, _onSpriteSheetLoad, rows, columns)
  return getSpriteSheet(id)
}

function _addToLoad(
  url: string,
  onImageLoad: onImageLoadFunc,
  rows: number = 1,
  columns = 1
) {
  const id = _newId()
  const img = new Image()
  img.onload = () => onImageLoad(id, img, columns, rows)
  img.src = url
  _numberOfAssetsToload++
  return id
}

function getSprite(id: number): () => HTMLImageElement {
  return function () {
    const img = images.get(id)
    if (!img) throw new Error('this sprite does not exists')
    return img
  }
}

function getSpriteSheet(id: number): () => ImageBitmap[] {
  return function () {
    const imgs = spriteSheets.get(id)
    if (!imgs) throw new Error('this spriteSheet does not exists')
    return imgs
  }
}

function _onImageLoad(id: number, img: HTMLImageElement) {
  images.set(id, img)
}

async function _onSpriteSheetLoad(
  id: number,
  img: HTMLImageElement,
  columns = 1,
  rows = 1
) {
  const sprites = await Promise.all(_sliceImage(img, columns, rows))
  spriteSheets.set(id, sprites)
}

function _sliceImage(image: HTMLImageElement, columns: number, rows: number) {
  const width = image.width / columns
  const height = image.height / rows
  const promises: Promise<ImageBitmap>[] = []
  for (let y = 0; y < image.height; y += height) {
    for (let x = 0; x < image.width; x += width) {
      promises.push(createImageBitmap(image, x, y, width, height))
    }
  }
  return promises
}

export function getProgress() {
  return _numberOfAssetsToload === 0
    ? 1
    : (images.size + spriteSheets.size) / _numberOfAssetsToload
}
